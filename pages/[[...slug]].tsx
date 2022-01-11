import { Fragment } from "react";
import Header from "../sections/navigation/MainNavigation";
import PageHeader from "../components/PageHeader";
import VideoLoop from "../sections/VideoLoop";
import SimpleText from "../sections/SimpleText";
import Video from "../sections/Video";
import Workflow from "../sections/Workflow";
import Contact from "../sections/Contact";
import CustomersSlider from "../sections/ImageSlider";
import Footer from "../sections/Footer";
import {
  getAllPagesWithTranslations,
  getPageBySlug,
  getPageChildren,
  getSlugArrayForPage,
  getTestimonialsByCategory,
} from "../helpers/directus";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
const OptionalHeroSection = dynamic(() => import("../sections/Hero"));
const OptionalTextSection = dynamic(() => import("../sections/SimpleText"));
const OptionalIconWithText = dynamic(() => import("../sections/IconWithText"));
const OptionalPageGrid = dynamic(() => import("../sections/PageGrid"));
const OptionalTestimonialsSlider = dynamic(
  () => import("../sections/TestimonialsSlider")
);

export default function Page({ page }: { page: any }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <PageHeader page={page} />
      <Header />
      {page.sections.map((section: any) => {
        return (
          <>
            {section.collection == "HeroSections" && (
              <OptionalHeroSection {...section.item} />
            )}
            {section.collection == "TextSections" && (
              <OptionalTextSection {...section.item} />
            )}
            {section.collection == "IconWithTextSections" && (
              <OptionalIconWithText data={section.item} />
            )}
            {section.collection == "PageGridSections" && (
              <OptionalPageGrid {...section.item} />
            )}
            {section.collection == "TestimonialsSliderSections" && (
              <OptionalTestimonialsSlider {...section.item} />
            )}
          </>
        );
      })}
      {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
      {/* <VideoLoop /> */}
      {/* <SimpleText /> */}
      {/* <Video /> */}
      {/* <Workflow /> */}
      {/* <Contact /> */}
      {/* <CustomersSlider /> */}
      {/* <Footer /> */}
    </Fragment>
  );
}

export async function getServerSideProps({
  params,
  locale,
}: {
  params: any;
  locale: string;
}) {
  let data = await getPageBySlug(params.slug, locale);

  // for page grid
  for (let section of data.sections) {
    if (section.collection == "PageGridSections") {
      if (section.item.page === undefined) {
        throw new Error("Page Grid has no page: TODO Error message");
      }
      section.item.children = await getPageChildren(
        section.item.page.id,
        locale
      );
    }

    if (section.collection == "TestimonialsSliderSections") {
      console.log(section.item);
      console.log("huren");
      if (section.item.testimonial_category === undefined) {
        throw new Error("TestimonialsSliderSections has no category.");
      }
      section.item.children = await getTestimonialsByCategory(
        section.item.testimonial_category,
        locale
      );
    }
  }

  return {
    props: {
      page: data,
    },
  };
}

/* static rendering, disabled for debugging and development */

// export async function getStaticProps({params, locale}: {params: any, locale: string }) {
//     const data = await getPageBySlug(params.slug, locale);
//     return {
//         props: {
//             page: data,
//         },
//     };
// }

// export async function getStaticPaths() {

//     let paths: { params: { slug: any; }; locale: string }[] = [];
//     const pages = await getAllPagesWithTranslations();
//     for (let page of pages) {
//         for (let language of page.translations) {
//             const slugs = await getSlugArrayForPage(page.id, language);
//             console.log(slugs);
//             paths.push({ params: { slug: slugs }, locale: language });
//         }
//     }

//     return {
//         paths: paths,
//         fallback: true
//     };
// }
