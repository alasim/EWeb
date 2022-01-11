import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { INavigationItem } from "./MainNavigation";

type MobileProps = {
  isOpen: boolean;
  navigationItem: INavigationItem;
}

export default function Mobile(props: MobileProps) {
  return (
    <div className=" lg:hidden">
      {props.isOpen && (
        <>
          {props.navigationItem.children?.map((item) => {
            if (item.children?.length != 0) {
              return <>
                <MobileSubmenu navigationItem={item} />
              </>
            } else {
              return <Link href={item.page?.full_slug}>
                <a className="w-full px-6 py-4 border-y border-gray-400 block">
                  {item.title}
                </a>
              </Link>
            }
          })}
        </>
      )}
    </div>
  );
}

function MobileSubmenu({ navigationItem }: { navigationItem: INavigationItem }) {
  return <Disclosure>
    <Disclosure.Button className="w-full px-6 py-4 border-y border-gray-400 flex justify-between items-center">
      {navigationItem.title}
      <MdKeyboardArrowDown />
    </Disclosure.Button>
    <Disclosure.Panel className="text-gray-500">
      <ul className=" flex flex-col">
        {navigationItem.children?.map((item) => {
          return <li>
            <Link href={item.page?.full_slug}>
              <a className=" py-4 block border-y border-gray-200 pl-12">
                {item.title}
              </a>
            </Link>
          </li>
        })}
      </ul>
    </Disclosure.Panel>
  </Disclosure>
}