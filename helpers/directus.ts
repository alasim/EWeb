const ASSET_PATH = "https://directus.garamantis.com/assets";
const API_TOKEN = "hf78eghf78ssgeufhs90ef";

const LANGUAGE_TO_LOCALE: { [key: string]: string } = {
    "en": "en_US",
    "de": "de_DE"
}

async function directusFetch(url: string) {
    return await fetch(url, {
        headers: new Headers({
            'Authorization': 'Bearer ' + API_TOKEN
        }),
    });
}

export function createAssetUrlForId(uuid: string) {
    return ASSET_PATH + "/" + uuid;
}

export async function getRootPage() {
    const url = `${process.env.REST_API}/pages?fields=*,translations.*`;
    const response = await directusFetch(url);
    const jsonResponse = await response.json();
    if (jsonResponse.data.length == 0) {
        throw new Error("Root Page not found in API, parent must be null.");
    }

    return jsonResponse.data[0];
}

export async function getAllPagesWithTranslations() {
    let url = `${process.env.REST_API}/pages`
    url += `?fields=id,translations.languages_code`;

    const response = await directusFetch(url);
    const jsonResponse = await response.json();
    if (jsonResponse.data.length == 0) {
        throw new Error("No Pages Available.");
    }

    let pages = [];
    for (let key in jsonResponse.data) {
        let translations = jsonResponse.data[key].translations.map((trans: { languages_code: any; }) => {
            return trans.languages_code;
        });
        pages.push({
            id: jsonResponse.data[key].id,
            translations: translations
        });
    }

    return pages;
}

export async function getPageChildren(id: number, language: string) {
    let url = `${process.env.REST_API}/pages`
    url += `?fields=*,translations.*,image.*`;
    // url += `&deep[parent][_filter][id][_eq]=${id}`;
    url += `&filter[parent][_eq]=${id}`;
    url += `&deep[translations][_filter][languages_code][_eq]=${language}`;

    const response = await directusFetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    if (jsonResponse.data.length == 0) {
        throw new Error("Children not Found: " + id);
    }

    return mergeTranslationRecursive(jsonResponse.data, language);;
}

export async function getTestimonialsByCategory(id: number, language: string) {
    let url = `${process.env.REST_API}/testimonials`
    url += `?fields=*,translations.*,categories.id,image.*`;
    // url += `&deep[parent][_filter][id][_eq]=${id}`;
    url += `&filter[categories][id][_in]=${1}`;
    // url += `&deep[categories][_filter][id][_eq]=${2}`;
    url += `&deep[translations][_filter][languages_code][_eq]=${language}`;
    const response = await directusFetch(url);
    const jsonResponse = await response.json();
    if (jsonResponse.data.length == 0) {
        throw new Error("Children not Found: " + id);
    }

    return mergeTranslationRecursive(jsonResponse.data, language);;
}

export async function getSlugArrayForPage(id: number, languageSlug: string): Promise<string[]> {
    let slugs: string[] = [];
    let url = `${process.env.REST_API}/pages`
    url += `?fields=parent,translations.slug`;
    url += `&filter[id][_eq]=${id}`;
    url += `&deep[translations][_filter][languages_code][_eq]=${languageSlug}`;

    const response = await directusFetch(url);
    const jsonResponse = await response.json();
    if (jsonResponse.data.length == 0) {
        throw new Error("Page not Found: " + id);
    }

    if (jsonResponse.data[0].translations.length == 0) {
        console.warn("Page is missing slug translation: " + id);
        return slugs;
    }

    let slug = jsonResponse.data[0].translations[0].slug;
    let parentId = jsonResponse.data[0].parent;
    if (parentId > 0) {
        let parentSlugs = await getSlugArrayForPage(parentId, languageSlug);
        slugs = parentSlugs;
    }

    if (slug) {
        slugs.push(slug);
    }
    return slugs;
}

export async function getPageBySlug(slug: string[], language: string) {

    let url = `${process.env.REST_API}/pages`
    url += `?fields=*,*.*,translations.*,sections.item`;
    url += ",sections.item:HeroSections.*.*,sections.item:HeroSections.items.image.*";
    url += ",sections.item:TextSections.translations.*,sections.item:TextSections.*.*";
    url += ",sections.item:IconWithTextSections.items.*,sections.item:IconWithTextSections.items.translations.*,sections.item:IconWithTextSections.items.icon.*";
    url += ",sections.item:PageGridSections.page.*";
    url += ",sections.item:WorkflowSections.items.*,sections.item:WorkflowSections.items.translations.*";
    if (slug && slug.length > 0) {
        const lastSlug = slug[slug.length - 1];
        url += `&filter[translations][slug][_eq]=${lastSlug}`;
    } else {
        /* !!! empty filter not working, use id as workaround */
        // url += `&filter[translations][slug][_empty]=true`;
        url += `&filter[id]=23`; // index
    }
    url += `&filter[translations][languages_code][_eq]=${language}`;
    url += `&deep[translations][_filter][languages_code][_eq]=${language}`;

    const response = await directusFetch(url);
    const jsonResponse = await response.json();

    if (jsonResponse.data.length == 0) {
        throw new Error("Page not found with slug: " + slug);
    }

    if (jsonResponse.data.length > 1) {
        throw new Error("To many pages found for slug: " + slug);
    }

    let firstResult = jsonResponse.data[0];
    firstResult = mergeTranslationRecursive(firstResult, language);
    return firstResult;
}

function mergeTranslationRecursive(data: any, language: string): any {
    let newData = data;
    if (Array.isArray(data)) {
        for (let index in data) {
            data[index] = mergeTranslationRecursive(data[index], language);
        }
    } else if (typeof data === "object") {
        for (let key in data) {
            if (key == "translations") {
                if (data[key].length > 0 && typeof data[key][0] === "number") {
                    continue;
                }
                let translations = data[key].find((x: { languages_code: string; }) => x.languages_code === language);
                if (translations === undefined) {
                    throw new Error("Missing Translation for " + language);
                }
                newData = { ...translations, ...data };
                delete newData[key];
            } else {
                newData[key] = mergeTranslationRecursive(newData[key], language);
            }
        }
    } else {
        return data;
    }

    return newData;
}

export function languageToLocale(language: string) {

    if (language in LANGUAGE_TO_LOCALE) {
        return LANGUAGE_TO_LOCALE[language];
    }

    throw new Error("Locale for language not found: " + language);
}

export async function getMainNav(language: string) {
    let url = `${process.env.REST_API}/MainNav`
    url += `?fields=id`;
    url += `,children_style`;

    url += `,translations.title`;
    url += `,translations.languages_code`;
    url += `,page.translations.languages_code`;
    url += `,page.translations.full_slug`;
    url += `,page.image.id`;
    url += `,page.image.width`;
    url += `,page.image.height`;
    url += `,page.image.type`;

    url += `,children.id`;
    url += `,children.children_style`;
    url += `,children.translations.title`;
    url += `,children.translations.languages_code`;
    url += `,children.page.translations.languages_code`;
    url += `,children.page.translations.full_slug`;
    url += `,children.page.image.id`;
    url += `,children.page.image.width`;
    url += `,children.page.image.height`;
    url += `,children.page.image.type`;

    url += `,children.children.id`;
    url += `,children.children.children_style`;
    url += `,children.children.translations.title`;
    url += `,children.children.translations.languages_code`;
    url += `,children.children.page.translations.languages_code`;
    url += `,children.children.page.translations.full_slug`;
    url += `,children.children.page.image.id`;
    url += `,children.children.page.image.width`;
    url += `,children.children.page.image.height`;
    url += `,children.children.page.image.type`;

    // url += `,children.translations.*`;
    // url += `,children.page.translations.*`;
    // url += `,children.page.image.*`;
    // url += `,children.children.translations.*`;
    // url += `,children.children.page.translations.*`;
    // url += `,children.children.page.image.*`;

    // url += `?fields=*,translations.*,page.translations.*,page.image.*`;
    // url += `,children.*,children.translations.*,children.page.translations.*,children.page.image.*`;
    // url += `,children.children.*,children.children.translations.*,children.children.page.translations.*,children.children.page.image.*`;

    // url += `?fields=children.translations.*`;
    // url += `?fields=children.*`;
    // url += `&deep[parent][_filter][id][_eq]=${id}`;
    // url += `&filter[parent][_eq]=${id}`;
    // url += `&deep[translations][_filter][languages_code][_eq]=${language}`;

    const response = await directusFetch(url);
    const jsonResponse = await response.json();

    return mergeTranslationRecursive(jsonResponse.data, language);;
}