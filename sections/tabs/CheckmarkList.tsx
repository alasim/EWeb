import { FC } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
export default function CheckmarkList() {
  return (
    <div className="px-8">
      <CheckmarkListItem
        title="Lorem ipsum dolor sit"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis velit reprehenderit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis velit reprehenderit"
      />
      <CheckmarkListItem />
      <CheckmarkListItem />
      <CheckmarkListItem />
      <CheckmarkListItem />
    </div>
  );
}

const CheckmarkListItem: FC<{ title?: string; content?: string }> = ({
  title = "Lorem ipsum dolor sit",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis velit reprehenderit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis velit reprehenderit",
}) => {
  return (
    <div className="flex items-start pb-2 mt-3 space-x-4 text-left">
      <BsFillCheckCircleFill className="w-5 h-5 mt-1 text-green-500 shrink-0" />
      <div>
        <span className="font-bold">{title}:</span>
        <span>{content}</span>
      </div>
    </div>
  );
};
