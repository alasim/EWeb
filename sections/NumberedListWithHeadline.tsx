import { FC } from "react";

export default function NumberedListWithHeadline() {
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="container px-4 py-16 text-center h-fit ">
        <h1 className="pb-12 text-2xl uppercase md:text-4xl">
          IM SCHNELLDURCHLAUF: VOM WIE ZUM WOW.
          <span className="font-bold"> SO GEHT’S!</span>
        </h1>
        <NumberedListWithHeadlineItem count={1} />
        <NumberedListWithHeadlineItem count={2} />
        <NumberedListWithHeadlineItem count={3} />
        <NumberedListWithHeadlineItem count={4} />
        <NumberedListWithHeadlineItem count={5} />
        <NumberedListWithHeadlineItem count={6} />
      </div>
    </div>
  );
}

const NumberedListWithHeadlineItem: FC<{
  title?: string;
  content?: string;
  count?: number;
}> = ({
  title = "Lorem ipsum dolor sit",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis velit reprehenderit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis velit reprehenderit",
  count = 1,
}) => {
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center text-white bg-green-500 rounded-full -top-1 -left-3 w-7 h-7">
        <span>{count}</span>
      </div>

      <div className="pb-4 pl-10 text-left border-l-8 border-green-500">
        <span className="font-bold">{title}:</span>
        <span>{content}</span>
      </div>
    </div>
  );
};
