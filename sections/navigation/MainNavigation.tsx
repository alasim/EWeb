import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export interface INavigationItem {
  id: string | number;
  children_style: string;
  title: string;
  page: {
    full_slug: string;
    image?: null | {
      id: string;
      width: number;
      height: number;
      type: string;
    }
    [key: string]: unknown;
  };
  children?: INavigationItem[];
  [key: string]: unknown;
}

export default function MainNavigation({ navigationItem }: { navigationItem?: INavigationItem }) {
  navigationItem = navigationItem || DummyData;
  const [open, setopen] = useState(false);
  // return <pre>{JSON.stringify(navigationItem, null, 2)}</pre>
  return (
    <nav>
      <div className="flex justify-center py-6 bg-gray-100 relative">
        <img
          src="/images/garamantis-logo-1.svg"
          alt="brand logo"
          className="w-4/12 md:w-2/12"
        />

        <div
          className=" absolute top-8 right-8 lg:hidden"
          onClick={() => setopen(!open)}
        >
          <FiMenu size="1.5rem" className="text-gray-700" />
        </div>
      </div>
      <Desktop navigationItem={navigationItem} />
      <Mobile isOpen={open} navigationItem={navigationItem} />
    </nav>
  );
}

const DummyData: INavigationItem = {
  "title": "Index",
  "languages_code": "de",
  "id": 1,
  "children_style": "simple",
  "page": {
    "languages_code": "de",
    "full_slug": "iasdasdasd",
    "image": {
      "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
      "width": 3840,
      "height": 2160,
      "type": "image/webp"
    }
  },
  "children": [
    {
      "title": "Loesungen",
      "languages_code": "de",
      "id": 7,
      "children_style": "extended",
      "page": {
        "languages_code": "de",
        "full_slug": "idoasdasdasd",
        "image": {
          "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
          "width": 3840,
          "height": 2160,
          "type": "image/webp"
        }
      },
      "children": [
        {
          "title": "sub 3",
          "languages_code": "de",
          "id": 11,
          "children_style": "simple",
          "page": {
            "languages_code": "de",
            "full_slug": "idoasdasdasdw",
            "image": {
              "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
              "width": 3840,
              "height": 2160,
              "type": "image/webp"
            }
          }
        },
        {
          "title": "as dawd a",
          "languages_code": "de",
          "id": 9,
          "children_style": "simple",
          "page": {
            "languages_code": "de",
            "full_slug": "asdasdasd",
            "image": {
              "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
              "width": 3840,
              "height": 2160,
              "type": "image/webp"
            }
          }
        }
      ]
    },
    {
      "title": "ueber uns",
      "languages_code": "de",
      "id": 8,
      "children_style": "simple",
      "page": {
        "languages_code": "de",
        "full_slug": "asdasdasd",
        "image": {
          "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
          "width": 3840,
          "height": 2160,
          "type": "image/webp"
        }
      },
      "children": [
        {
          "title": "sub 2",
          "languages_code": "de",
          "id": 10,
          "children_style": "simple",
          "page": {
            "languages_code": "de",
            "full_slug": "asdasdasd",
            "image": {
              "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
              "width": 3840,
              "height": 2160,
              "type": "image/webp"
            }
          }
        }
      ]
    },
    {
      "title": "single",
      "languages_code": "de",
      "id": 23,
      "children_style": "simple",
      "page": {
        "languages_code": "de",
        "full_slug": "gsefsef",
        "image": null
      },
      "children": []
    }
  ]
}