import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { classes } from "../helpers/utils";
import { createAssetUrlForId } from "../helpers/directus";

import Image from "next/image";
SwiperCore.use([Pagination, Autoplay]);

export default function ImageSlider({ sliderData }: { sliderData?: ISliderData }) {
  sliderData = sliderData || DummyData;
  const [hovered, sethovered] = useState(false);
  return (
    <div className={classes("py-20 px-4 md:px-0 transition-all duration-150")}>
      <div
        onMouseLeave={() => {
          sethovered(false);
        }}
        onMouseEnter={() => {
          sethovered(true);
        }}
        className="container mx-auto"
      >
        <Swiper
          // slidesPerView={3}
          // spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          className="mx-auto max-w-7xl"
        >
          {sliderData.items?.map((item) => {
            return <SwiperSlide key={item.id} className="transition-all duration-150 grayscale hover:grayscale-0">
              <div className="w-full">
                <Image
                  src={createAssetUrlForId(item.image!.id)}
                  layout="responsive"
                  width={item.image?.width}
                  height={item.image?.height}
                  sizes="25vw"
                  alt={item.image?.description}
                />
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  );
}

export interface ISliderData {
  items: {
    id: string | number;
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

const DummyData: ISliderData = {
  items: [{
    "id": 6,
    "image": {
      "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
      "width": 3840,
      "height": 2160,
      "type": "image/webp",
      "description": "test  description"
    }
  }, {
    "id": 5,
    "image": {
      "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
      "width": 3840,
      "height": 2160,
      "type": "image/webp",
      "description": "test  description"
    }
  }, {
    "id": 4,
    "image": {
      "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
      "width": 3840,
      "height": 2160,
      "type": "image/webp",
      "description": "test  description"
    }
  }, {
    "id": 3,
    "image": {
      "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
      "width": 3840,
      "height": 2160,
      "type": "image/webp",
      "description": "test  description"
    }
  }, {
    "id": 2,
    "image": {
      "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
      "width": 3840,
      "height": 2160,
      "type": "image/webp",
      "description": "test  description"
    }
  }, {
    "id": 1,
    "image": {
      "id": "201bb5b9-cd53-4c5c-a2ac-15e0420cb0b3",
      "width": 3840,
      "height": 2160,
      "type": "image/webp",
      "description": "test  description"
    }
  }]
}