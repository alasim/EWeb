import Head from 'next/head'
import { useRouter } from 'next/router';
import { languageToLocale } from "../helpers/directus";

export default function PageHeader({ page }: { page: any }) {
    const { basePath, locale, asPath, pathname } = useRouter();
    const fbLocale = languageToLocale(locale as string);
    return (
        <Head>
            <title>{page.title}</title>
            <meta name="description" content={page.description} />

            <meta property="og:title" content={page.title + " │ Garamantis"} />
            <meta property="og:description" content={page.description} />
            <meta property="og:locale" content={fbLocale} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={"https://www.garamantis.com/" + locale + basePath + asPath} />
            <meta property="og:site_name" content="Garamantis" />
            <meta property="article:publisher" content="https://www.facebook.com/garamantis" />
            <meta property="article:modified_time" content={page.date_updated} />
            <meta property="og:image" content={page.image} />
            <meta property="og:image:width" content="1920" />
            <meta property="og:image:height" content="1080" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@garamantis" />
            <meta name="google-site-verification" content="aex98xlql5WQtlkrP6DbghhFadXnRjgEKRgzcMaBCCU" />
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
        </Head>)
}