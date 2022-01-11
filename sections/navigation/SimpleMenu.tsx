import Link from "next/link";
import { FC, useState } from "react";
import { IMegaMenuItem, IMenuItem } from "./interfaces";
import { INavigationItem } from "./MainNavigation";
import { createAssetUrlForId } from "../../helpers/directus";
import Image from "next/image";

type SimpleMenuProps = {
  title: string;
  href?: string;
  items?: INavigationItem[];
}

// const DropDownMenu: FC<{
//   title: string;
//   href?: string;
//   items?: IMenuItem[];
// }> = ({ title, items = [] }) => {
export default function SimpleMenu(props: SimpleMenuProps) {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <li>
      <div
        onMouseLeave={() => {
          if (props.items?.length != 0) setmenuOpen(false);
        }}
        className="relative"
      >
        <div
          onMouseEnter={() => {
            if (props.items?.length != 0) setmenuOpen(true);
          }}
          className="font-bold cursor-pointer text-sm text-gray-900 hover:text-primary uppercase flex items-center gap-2"
        >
          {props.title}
          <div className="w-full top-0 left-0 h-12 absolute"> </div>
          {props.items?.length != 0 && (
            <div>
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
          <div className="absolute z-10 mt-2 border-l-2 border-primary">
            <div className="flex flex-col gap-4 bg-white w-40">
              {props.items?.map((item) => (
                // <pre>{JSON.stringify(item, null, 2)}</pre>
                <DropDownMenuItem
                  title={item.title}
                  href={item.page.full_slug}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

// export default DropDownMenu;

function DropDownMenuItem({ title, href }: any) {
  return (
    <Link href={href}>
      <a className="hover:bg-gray-100 hover:text-primary px-6 py-2 text-sm">
        {title}
      </a>
    </Link>
  );
}

// const about = [
//   { id: 1, title: "Team", href: "/" },
//   { id: 2, title: "Services", href: "/" },
//   { id: 3, title: "Referances", href: "/" },
//   { id: 4, title: "Partners", href: "/" },
// ];
