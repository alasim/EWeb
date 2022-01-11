import Image from "next/image";
import Link from "next/link";
import { FC, Fragment, useEffect, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel-js";

interface IPageGridItem {}
const content = [
  {
    id: 1,
    title: "MULTI-TOUCH TABLE",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/1.webp",
    href: "/",
  },
  {
    id: 2,
    title: "MULTI-TOUCH SOFTWARE",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/2.webp",
    href: "/",
  },
  {
    id: 3,
    title: "MULTI-TOUCH REVOLVING MONITOR",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/3.webp",
    href: "/",
  },
  {
    id: 4,
    title: "VIRTUAL REALITY",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/4.webp",
    href: "/",
  },
  {
    id: 5,
    title: "CONTENT MANAGEMENT SYSTEM",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/5.webp",
    href: "/",
  },
  {
    id: 6,
    title: "INTERACTIVE DISPLAY CASE",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/6.webp",
    href: "/",
  },
  {
    id: 7,
    title: "MULTI-TOUCH WALL",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/7.webp",
    href: "/",
  },
  {
    id: 8,
    title: "INTERACTIVE PROJECTION",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/8.webp",
    href: "/",
  },
  {
    id: 9,
    title: "SOCIAL MEDIA TABLE",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/9.webp",
    href: "/",
  },
  {
    id: 10,
    title: "INTERACTIVE SHOWROOM",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/10.webp",
    href: "/",
  },
];

export default function PageSlider() {
  const items = content.map((e) => {
    return { id: `item-${e.id}`, renderItem: <PageSliderItem item={e} /> };
  });

  const [nItems, setnItems] = useState(3);
  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    items,
    withLoop: true,
    itemsPerSlide: nItems,
    initialStartingPosition: "center",
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);

      if (window.innerWidth > 1024) {
        setnItems(3);
      } else if (window.innerWidth > 764) {
        setnItems(2);
      } else if (window.innerWidth < 640) {
        setnItems(1);
      }
      console.log(nItems);
    });
  }, []);

  return (
    <div className="py-8 mb-12 text-center h-2/3">
      <h1 className="pt-16 pb-16 text-4xl uppercase">
        KOMPLETTLÖSUNG: INTERAKTIVER SHOWROOM
      </h1>
      <div className="container w-full h-2/3">
        <div className="relative w-full">
          {carouselFragment}
          <div
            onClick={() => {
              slideToPrevItem();
            }}
            className="absolute inset-y-0 z-50 w-12 h-12 my-auto text-3xl font-bold leading-tight text-center text-white transition-colors duration-150 bg-gray-400 rounded-full cursor-pointer -left-4 hover:bg-gray-900"
          >
            ‹
          </div>
          <div
            onClick={() => {
              slideToNextItem();
            }}
            className="absolute inset-y-0 z-50 w-12 h-12 my-auto text-3xl font-bold leading-tight text-center text-white transition-colors duration-150 bg-gray-400 rounded-full cursor-pointer -right-4 hover:bg-gray-900"
          >
            ›
          </div>
        </div>
      </div>
    </div>
  );
}

export const PageSliderItem: FC<{
  item?: {
    id: number;
    title: string;
    description: string;
    img: string;
    href: string;
  };
}> = ({
  item = {
    id: "1",
    title: "MULTI-TOUCH TABLE",
    description:
      "Not Only Recognizes the Sign of the Times, but People and Objects Too! The most innovative and interactive table on the market",
    img: "/images/products/1.webp",
    href: "/",
  },
}) => {
  return (
    <div className="mx-2" key={item.id}>
      <div className="overflow-hidden h-72">
        <img
          src={item.img}
          alt={item.title}
          className="object-cover w-full h-full transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 bg-gray-100 ">
        <Link href={item.href}>
          <a>{item.title}</a>
        </Link>
        <p className="mt-6 mb-16">{item.description}</p>
        <Link href={item.href}>
          <a className="p-2 text-white bg-primary">MORE INFO »</a>
        </Link>
      </div>
    </div>
  );
};
