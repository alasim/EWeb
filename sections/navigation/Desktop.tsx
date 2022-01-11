import React from "react";
import { INavigationItem } from "./MainNavigation";
import MegaMenu from "./MegaMenu";
import SimpleMenu from "./SimpleMenu";

export default function Dektop({ navigationItem }: { navigationItem?: INavigationItem }) {
  // return <pre>{JSON.stringify(navigationItem, null, 2)}</pre>
  return (
    <div className="bg-white justify-center py-2 hidden lg:flex">
      <ul className="flex gap-14">
        {/* <pre>{JSON.stringify(navigationItem?.children, null, 2)}</pre> */}
        {navigationItem?.children?.map((item) => {
          return <>
            {item.children_style == "simple" && <SimpleMenu title={item.title} href={item.page?.full_slug} items={item.children} />}
            {item.children_style == "extended" && <MegaMenu title={item.title} href={item.page?.full_slug} items={item.children} />}
          </>
        })}
      </ul>
    </div>
  );
}