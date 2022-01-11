import Link from "next/link";
import { createAssetUrlForId } from "../helpers/directus";
import Image from "next/image";

export default function PageGrid({ children }: { children: any }) {
  // return <pre>PageGrid With Data {JSON.stringify(children, null, 2)}</pre> //debug
  return (
    <div className="px-4 py-20 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
          {children.map((item: any) => (
            <div className="" key={item.id}>
              <div className="overflow-hidden  h-72">
                <Image
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src={createAssetUrlForId(item.image.id)}
                  layout="responsive"
                  width={item.image.width}
                  height={item.image.height}
                  sizes="33vw"
                  alt={item.title}
                />
              </div>
              <div className="p-6 bg-gray-100 ">
                <Link href={item.name}>
                  <a>{item.title}</a>
                </Link>
                <p className="mt-6 mb-16">{item.teaser}</p>
                <Link href={item.name}>
                  <a className="p-2 text-white bg-primary">MORE INFO »</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
