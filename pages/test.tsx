import { getMainNav } from "../helpers/directus";
import Contact from "../sections/Contact";
import CustomerGrid from "../sections/CustomerGrid";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import IconWithText from "../sections/IconWithText";
import ImageSlider from "../sections/ImageSlider";
import ImageWithText from "../sections/ImageWithText";
import ImageWithTextList from "../sections/ImageWithTextList";
import LargeImageWithText from "../sections/LargeImageWithText";
import PageGridWithFilter from "../sections/PageGridWithFilter";
import ProjectData from "../sections/ProjectData";
import TeamGrid from "../sections/TeamGrid";

export default function Test(test: any) {
    return <>
        <PageGridWithFilter />
        <ImageWithText />
        <ProjectData />
        <LargeImageWithText />
        <TeamGrid />
        <CustomerGrid />
        {/* <Contact /> */}
        {/* <Footer /> */}
        {/* <Hero /> */}
        {/* <IconWithText /> */}
        {/* <ImageSlider /> */}
        {/* <ImageWithTextList /> */}

        {/* <SimpleText /> */}
        {/* <MainNavigation /> */}
        {/* <pre>
            {JSON.stringify(test, null, 2)}
        </pre> */}
    </>;
}


export async function getServerSideProps({
    params,
    locale,
}: {
    params: any;
    locale: string;
}) {
    // let data = await getMainNav(locale);


    return {
        props: {
            MainNav: [],
        },
    };
}