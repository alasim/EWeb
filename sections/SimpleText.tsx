import Image from "next/image";

interface ISimpleTextData {
  headline: string;
  subline: string;
  text: string;
}

export default function SimpleText({ textData }: { textData?: ISimpleTextData }) {
  textData = textData || DummyData;
  // return <pre>
  //   {JSON.stringify(textData, null, 2)}
  // </pre>
  return (<>
    <style global jsx>{`
      .directus-wysiwyg a {
        @apply text-lg text-primary;
      } 
    `}</style>
    <div className="py-28 text-center px-4 md:px-0">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl uppercase">
          {textData.headline} ad asd
        </h1>
        {/* <h1 className=" text-2xl md:text-3xl font-semibold text-gray-900">
          {textData.headline}
        </h1> */}
        <h2 className="mt-8 text-xl font-medium text-secondary">
          {textData.subline}
        </h2>
        {/* <h2 className=" text-2xl md:text-3xl font-semibold text-gray-900 mt-8">
          {textData.subline}
        </h2> */}
        <div
          className="mt-12 directus-wysiwyg"
          dangerouslySetInnerHTML={{ __html: textData.text }}
        ></div>
      </div>
    </div>
  </>
  );
}

const DummyData: ISimpleTextData = {
  "headline": "INTERAKTIVE AUSSTELLUNGEN & ERLEBNISWELTEN",
  "subline": "SETZEN SIE IHRER VORSTELLUNGSKRAFT KEINE GRENZEN",
  "text": "<p><a href=\"https://www.garamantis.com/de/produkt/multitouch-tisch/\" target=\"_blank\" rel=\"noopener noreferrer\">Multitouch-Tische</a>,&nbsp;<a href=\"https://www.garamantis.com/de/produkt/virtual-reality/\" target=\"_blank\" rel=\"noopener noreferrer\">Virtual Reality</a>, <a title=\"\" href=\"https://www.garamantis.com/de/produkt/interaktive-vitrine/\" target=\"_blank\" rel=\"noopener\">interaktive Vitrinen</a> &ndash; das ist nur ein Wimpernschlag unseres Portfolios. Halten Sie die Augen offen nach mehr! Wir konzipieren, entwickeln und gestalten einzigartige interaktive Welten rund um Ihr Produkt, Ihre Marke oder Ihr Erlebnis. Wir lassen komplexe Zusammenh&auml;nge spielerisch einfach aussehen. Und Ihre Inhalte immer gut. Mit technologischen Innovationen nach Ma&szlig;, mit hochwertigen Designs und einem Ziel: offene M&uuml;nder bei Ihren Messebesuchern, Kunden, Investoren und Mitarbeitern.</p>"
}