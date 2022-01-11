import { FC } from "react";
import { classes } from "../helpers/utils";

export default function ImageWithTextList() {
  return (
    <div className="py-8 pb-12 bg-black">
      <ImageWithTextListItem isTitleLink={true} />
      <ImageWithTextListItem leftImage={true} isTitleLink={true} />
      <ImageWithTextListItem />
      <ImageWithTextListItem leftImage={true} />
    </div>
  );
}

export const ImageWithTextListItem: FC<{
  title?: string;
  decs?: string;
  image?: string;
  leftImage?: boolean;
  isTitleLink?: boolean;
}> = ({
  title = "Multitouch-Software",
  decs = `Multi‑touch tables, Virtual Reality, interactive display cases – and
            that’s just a blink of our portfolio. Keep your eyes open for more!
            We conceive, develop, and design unique interactive worlds around
            your product, your brand, or your experience. We make complex
            subject matters look like a piece of cake (and your content look
            terrific). With custom-made technological innovations, with
            high-quality design, and with one outcome: trade show visitors,
            clients, investors, and staff with their mouths agape.`,
  image = "https://www.garamantis.com/wp-content/uploads/2018/11/table_09_Screen_01-600x338.png.webp",
  leftImage = false,
  isTitleLink = false,
}) => {
  const imageSec = (
    <div className="w-full p-6 md:w-1/2">
      <div className="flex items-center w-full h-full overflow-hidden">
        <img
          src={image}
          alt="Lorem text"
          className="object-cover w-full transition-all duration-1000 scale-110 h-72 hover:scale-125"
        />
      </div>
    </div>
  );
  const textSec = (
    <div className="flex items-center w-full px-4 py-16 text-left md:w-1/2 md:px-0">
      <div
        className={classes(
          leftImage
            ? "pl-0 md:pl-10 text-left"
            : "md:pr-10 pr-0 text-left md:text-right"
        )}
      >
        <h3
          className={classes(
            "text-xl font-medium",
            isTitleLink
              ? "text-primary cursor-pointer hover:text-secondary"
              : "text-white"
          )}
        >
          {title}
        </h3>
        <p className="mt-6 text-white">{decs}</p>
      </div>
    </div>
  );
  return (
    <div
      className={classes(
        "container flex md:flex-row",
        !leftImage ? "flex-col" : "flex-col-reverse"
      )}
    >
      {leftImage ? imageSec : textSec}
      {!leftImage ? imageSec : textSec}
    </div>
  );

  return (
    <div className="container grid grid-cols-2">
      <div className="flex items-center w-full col-span-1 px-4 py-16 text-right md:px-0">
        <div className="pr-10">
          <h3
            className={`text-xl font-medium ${classes(
              isTitleLink
                ? "text-primary cursor-pointer hover:text-secondary"
                : "text-white"
            )}`}
          >
            {title}
          </h3>
          <p className="mt-6 text-white">{decs}</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center w-full h-full overflow-hidden">
          <img
            src={image}
            alt="Lorem text"
            className="object-cover w-full transition-all duration-1000 scale-110 h-72 hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};
