import { createAssetUrlForId } from "../helpers/directus";
import Image from "next/image";

export default function Hero({ heroData }: { heroData?: IHeroData }) {
  {
    heroData = heroData || DummyData;
    // return <pre>hero With Data {JSON.stringify(heroData, null, 2)}</pre> //debug
    return (
      <>
        {heroData.items.map((item: any, key: any) => {
          if (item.youtube) {
            return (
              <iframe
                key={key}
                className="aspect-video"
                width="100%"
                height="600"
                src={
                  item.youtube +
                  "?controls=0&showinfo=0&rel=1&autoplay=1&loop=1&mute=1"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            );
          } else if (item.image) {
            return (
              <Image
                key={key}
                src={createAssetUrlForId(item.image.id)}
                layout="responsive"
                width={item.image.width}
                height={item.image.height}
                priority
              />
            );
          }

          throw new Error(
            "Missing video or image in HeroSection: Page -> " +
            props.page.id +
            "(" +
            props.page.name +
            ")"
          );
          // throw new Error("Hero Data is Missing Image and Video: Fix this in the database: Todo create direct link to database Item.");
        })}
      </>
    );
  }
}


export interface IHeroData {
  items: {
    id: string | number;
    youtube: string | null;
    text: string;
    image?: null | {
      id: string;
      description: string;
      width: number;
      height: number;
      type: string;
    }
    [key: string]: unknown;
  }[]
}

const DummyData: IHeroData = {
  "items": [
    {
      "id": 6,
      "youtube": null,
      "text": "<p>#TODO Overlay Text</p>",
      "parent": 1,
      "image": {
        "id": "a7b19145-6240-45ae-a7b9-9a8b600a4614",
        "type": "image/jpeg",
        "width": 2048,
        "height": 2048,
        "description": "alt text"
      }
    }
  ]
}
