import { FC, useEffect, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel-js";

export default function SliderTextBlocks() {
  const items = [
    {
      id: "item-1",
      renderItem: <SliderTextBlocksItem />,
    },
    {
      id: "item-2",
      renderItem: <SliderTextBlocksItem />,
    },
    {
      id: "item-3",
      renderItem: <SliderTextBlocksItem />,
    },
    {
      id: "item-4",
      renderItem: <SliderTextBlocksItem />,
    },
  ];
  const [wsize, setwsize] = useState(0);
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
    if (window.innerWidth > 1024) {
      setnItems(3);
    } else if (window.innerWidth > 764) {
      setnItems(2);
    } else if (window.innerWidth < 640) {
      setnItems(1);
    }
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
    <div className="relative w-full mx-auto">
      {carouselFragment}
      <div
        onClick={() => {
          slideToPrevItem();
        }}
        className="absolute inset-y-0 z-50 w-10 h-10 my-auto text-3xl font-bold leading-tight text-center text-white bg-black bg-opacity-50 rounded-full cursor-pointer -left-1 hover:bg-opacity-70"
      >
        ‹
      </div>
      <div
        onClick={() => {
          slideToNextItem();
        }}
        className="absolute inset-y-0 z-50 w-10 h-10 my-auto text-3xl font-bold leading-tight text-center text-white bg-black bg-opacity-50 rounded-full cursor-pointer -right-1 hover:bg-opacity-70"
      >
        ›
      </div>
    </div>
  );
}

const SliderTextBlocksItem: FC<{ title?: string; content?: string }> = ({
  title = "1. Lorem ipsum dolor",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos, est necessitatibus ullam, doloremque nobis qui repudiandae odit delectus, nulla minus magnam! Debitis, quod! Vero laudantium quisquam possimus enim perspiciatis ut nam porro corporis explicabo exercitationem nisi, repudiandae voluptatibus, iste est suscipit molestiae. Pariatur necessitatibus reiciendis aut repellat quibusdam voluptas nostrum amet assumenda ea eaque, veniam quo nemo? Neque ea fugiat consequuntur cupiditate ducimus tenetur, quos distinctio ullam sed aut ipsum ad commodi earum? Esse eveniet explicabo, architecto nam vitae iusto, optio quam iste, ut blanditiis maiores consequatur harum in veniam libero!",
}) => {
  return (
    <div className="px-6 py-8 mx-4 text-left border border-gray-100">
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};
