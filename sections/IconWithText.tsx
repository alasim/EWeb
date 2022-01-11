import { createAssetUrlForId } from "../helpers/directus";
import Image from "next/image";

export default function IconWithText({ data }: { data?: IIconWithTextData }) {
  data = data || DummyData;
  // return <pre>IconWithText With Data {JSON.stringify(data, null, 2)}</pre> //debug
  return (
    <div className="bg-secondary py-20 px-4 md:px-0">
      <div className="container mx-auto overflow-hidden">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-20">
          {data.items.map((item: any) => (
            <IconsWithTextItem
              key={item.id}
              headline={item.headline}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function IconsWithTextItem({ headline, text, icon }: any) {
  return (
    <div className=" flex flex-col md:flex-row items-center gap-4">
      {icon.type != "image/svg+xml" && <Image
        src={createAssetUrlForId(icon.id)}
        className="w-2/12"
        layout="responsive"
        width={icon.width}
        height={icon.height} />}
      {icon.type == "image/svg+xml" && <img
        src={createAssetUrlForId(icon.id)}
        className="w-2/12" />}
      <div className="text-white text-center md:text-left">
        <h1 className="text-3xl font-semibold" dangerouslySetInnerHTML={{ __html: headline }}></h1>
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </div>
  );
}

export interface IIconWithTextData {
  items: {
    id: string | number;
    text: string;
    headline: string;
    icon?: null | {
      id: string;
      description: string | null;
      width: number | null;
      height: number | null;
      type: string;
    }
    [key: string]: unknown;
  }[]
}

const DummyData: IIconWithTextData = {
  items: [
    {
      "id": 1,
      "languages_code": "de",
      "headline": "EINZIGARTIGE\nERLEBNISWELTEN",
      "text": "<p>Wir bieten keinen 08/15-Baukasten, in dem Sie Ihr Logo austauschen und eine Hotline anrufen k&ouml;nnen. Sehen Sie uns vielmehr als Ihr Geheimlabor f&uuml;r einen garantiert &uuml;berraschenden Auftritt. So wie Q f&uuml;r James Bond oder Alfred f&uuml;r Batman. Nur ohne Schurken, Scherben und Scherereien.</p>",
      "icon": {
        "id": "5efc0e5b-a290-412d-ae46-73eba63f43c8",
        "type": "image/svg+xml",
        "width": null,
        "height": null,
        "description": null
      }
    },
    {
      "id": 2,
      "languages_code": "de",
      "headline": "BEGEISTERUNG\nVORPROGRAMMIERT",
      "text": "<p>Wenn Sie Ihren Kunden etwas nie Dagewesenes bieten wollen, dann nutzen Sie doch Features und Technologien, von deren Existenz selbst Sie noch gar nichts wissen. H&ouml;ren Sie auf, nach awardverd&auml;chtigen Kreationen zu googeln und gestalten Sie Ihre eigene mit uns.</p>",
      "icon": {
        "id": "f40b74fb-f5a0-466e-84b6-216f56d309f6",
        "type": "image/svg+xml",
        "width": null,
        "height": null,
        "description": null
      }
    },
    {
      "id": 3,
      "headline": "SERVICE\nZUM ZURÜCKLEHNEN",
      "text": "<p>Wir bieten wir Ihnen das ganze Programm &ndash; Konzept, technische Planung, Produkt- und Interface Design, Hardware, Software-Entwicklung, Schulungen und Wartung. Zusammengefasst: Full Service von der Freigabe bis zum WOW.</p>",
      "icon": {
        "id": "aabb3928-1314-4a53-916e-3bdbacc4bdce",
        "type": "image/svg+xml",
        "width": null,
        "height": null,
        "description": null,
      }
    },
    {
      "id": 4,
      "headline": "FASZINATION\nZUM FESTPREIS",
      "text": "<p>&Uuml;berraschungen geh&ouml;ren zu unserem Gesch&auml;ftsmodell, b&ouml;se z&auml;hlen nicht dazu. Dank einer ordentlichen Portion Erfahrung, Voraussicht und Erfindergeist nennen wir Ihnen vor Projektbeginn einen Preis, der bis zum Ende genauso konstant bleibt wie die hohe Qualit&auml;t und der Liefertermin Ihres Produkts.</p>",
      "icon": {
        "id": "cc25e70a-5e81-418d-ac79-ed8084be4d24",
        "type": "image/svg+xml",
        "width": null,
        "height": null,
        "description": null
      }
    }
  ]
}