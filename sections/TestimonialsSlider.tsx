import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { createAssetUrlForId } from "../helpers/directus";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Autoplay]);

export default function TestimonialsSlider({ children }: { children: any }) {
  // return <pre>TestimonialsSlider With Data {JSON.stringify(children, null, 2)}</pre> //debug
  return (
    <div className=" bg-blue-50 py-20 px-4 md:px-0">
      <div className=" container mx-auto">
        <Swiper
          // spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mx-auto max-w-7xl"
        >
          {children.map((item: any) => (
            <SwiperSlide>
              <div className=" flex flex-col gap-6">
                <div className="bg-white flex flex-col md:flex-row items-center gap-6 p-6">
                  <div className=" w-4/12">
                    <Image
                      src={createAssetUrlForId(item.image.id)}
                      layout="responsive"
                      width={item.image.width}
                      height={item.image.height}
                    />
                  </div>
                  <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: item.text }}>
                  </div>
                </div>
                <img src="/images/bar.webp" alt="bar" />
                <div className=" text-center">
                  <h1>{item.author}</h1>
                  <p>{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
