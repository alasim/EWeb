import Link from "next/link";
import { useState } from "react";
import { INavigationItem } from "./MainNavigation";
import { createAssetUrlForId } from "../../helpers/directus";
import Image from "next/image";

type MegaMenueProps = {
  title: string;
  href?: string;
  items?: INavigationItem[];
}

export default function MegaMenu(props: MegaMenueProps) {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div
      onMouseLeave={() => {
        if (props.items?.length != 0) setmenuOpen(false);
      }}
      onClick={(e: any) => {
        console.log(e.view.open);
      }}
      className="cursor-pointer inline-block"
    >
      <div
        onMouseEnter={() => {
          if (props.items?.length != 0) setmenuOpen(true);
        }}
        className="font-bold relative text-sm text-gray-900 hover:text-primary uppercase flex items-center gap-2"
      >
        {props.title}
        {props.items?.length != 0 && (
          <div>
            <div className="w-full top-0 left-0 h-12 absolute"> </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {props.items?.length != 0 && menuOpen && (
        <div className="absolute z-10 left-0 right-0 bg-white bg-opacity-90 border-t-4 border-primary py-4 mt-2">
          <div className=" grid grid-cols-4 gap-6 w-10/12 mx-auto">
            {props.items?.map((item) => (
              <MegaMenuItem
                key={item.id}
                title={item.title}
                image={item.page?.image}
                href={item.page?.full_slug}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function MegaMenuItem({ title, href, image }: any) {
  return (
    <Link href={href}>
      <a>
        <div className=" relative group">
          <Image
            src={createAssetUrlForId(image.id)}
            layout="responsive"
            width={image.width}
            height={image.height}
            sizes="25vw"
          />
          <div className=" absolute group-hover:text-primary  bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-white pl-4 font-bold text-sm text-gray-900">
            <p className="mb-2 mt-6 group-hover:mb-3 group-hover:mt-5 transition-all">
              {title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}