import Image from "next/image";
import { Fragment } from "react";

export default function Video() {
  return (
    <div className=" py-20 px-4 md:px-0">
      <div className=" container mx-auto">
        <h1 className=" text-center text-4xl text-gray-900">
          INTERACTIVE PROJECTS
        </h1>
        <iframe
          className="mt-20"
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/Ck4ScgS0v58?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
