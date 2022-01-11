import { useEffect, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel-js";
import { classes } from "../helpers/utils";
const MediaSlider = () => {
  const [activeSlide, setactiveSlide] = useState(null);
  const items = [
    {
      id: "item-1",
      renderItem: (
        <div class="h-full w-full bg-yellow-500 flex items-center justify-center text-white text-5xl text-center">
          <img
            className="object-cover w-full h-full"
            src="https://www.garamantis.com/wp-content/uploads/2020/03/showroom_links-wpcf_1200x768.jpg"
            alt=""
          />
        </div>
      ),
    },
    {
      id: "item-2",
      renderItem: (
        <div class="h-full w-full bg-yellow-500 flex items-center justify-center text-white text-5xl text-center">
          <iframe
            className="object-cover w-full h-full"
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/Ck4ScgS0v58?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
    {
      id: "item-3",
      renderItem: (
        <div class="h-full w-full bg-yellow-500 flex items-center justify-center text-white text-5xl text-center">
          <img
            className="object-cover w-full h-full"
            src="https://www.garamantis.com/wp-content/uploads/2020/03/showroom_links-wpcf_1200x768.jpg"
            alt=""
          />
        </div>
      ),
    },

    {
      id: "item-4",
      renderItem: (
        <div class="h-full w-full bg-yellow-500 flex items-center justify-center text-white text-5xl text-center">
          <iframe
            className="object-cover w-full h-full"
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/Ck4ScgS0v58?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
  ];
  useEffect(() => {
    setactiveSlide(items[0].id);
  }, []);
  function handleSlide(id) {
    setactiveSlide(id);
    slideToItem(id);
  }
  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    items,
    withLoop: true,
  });
  return (
    <div className="w-full py-8 mt-6 bg-gray-50">
      <div class="container relative my-16 h-2/3">
        {carouselFragment}
        <div
          onClick={() => {
            slideToPrevItem();
            if (activeSlide.split("-")[1] != 1) {
              setactiveSlide(
                "item-" + (parseInt(activeSlide.split("-")[1]) - 1)
              );
            } else {
              setactiveSlide("item-" + items.length);
            }
          }}
          class="z-50 w-10 bg-opacity-50 h-10 ml-2 hover:bg-opacity-70 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black  rounded-full bg-white  leading-tight text-center inset-y-0 left-0 my-auto"
        >
          ‹
        </div>
        <div
          onClick={() => {
            slideToNextItem();
            if (activeSlide.split("-")[1] != items.length) {
              setactiveSlide(
                "item-" + (parseInt(activeSlide.split("-")[1]) + 1)
              );
            } else {
              setactiveSlide("item-" + 1);
            }
          }}
          class="w-10 h-10 mr-2 md:mr-10 bg-opacity-50 hover:bg-opacity-70 absolute cursor-pointer text-3xl font-bold text-black  rounded-full bg-white  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </div>

        <div className="flex justify-center w-full pt-4 pb-12 space-x-4">
          {items.map((e) => (
            <div
              onClick={() => handleSlide(e.id)}
              className={classes(
                "w-4 h-4 rounded-full border cursor-pointer transition-colors duration-150 hover:bg-secondary",
                activeSlide == e.id ? "bg-secondary" : "bg-gray-100"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaSlider;
