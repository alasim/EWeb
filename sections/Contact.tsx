import Image from "next/image";
import { Fragment, useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-20  bg-secondary">
      {!open && <div className="container mx-auto text-center text-white ">
        <h1 className="text-4xl text-center ">FREE ADVICE</h1>
        <p className="w-10/12 mx-auto mt-8 text-xl ">
          Are you interested in interactive technologies or multitouch
          solutions? We advise you free of charge! (+49 30 55144669)
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="px-10 py-2 mt-16 text-white border-2 border-white">
          REQUEST NOW
        </button>
      </div>}
      {open && <ContactForm />}
    </div>
  );
}

function ContactForm() {
  return <div className=" container mx-auto text-center text-white">
    <div className="">
      <h1 className=" text-3xl ">
        INTERACTIVE EXHIBITIONS & WORLDS OF EXPERIENCE
      </h1>

      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        quod inventore iste. Libero quaerat culpa accusamus atque,
        laudantium sit earum! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Dolore quod inventore iste. Libero quaerat culpa
        accusamus atque, laudantium sit earum!
      </p>
    </div>
    <div className="mt-16">
      <form className="grid grid-cols-2 gap-x-12 gap-y-6">
        <input
          type="text"
          className="w-full col-span-2 md:col-span-1 border border-gray-300 p-2"
          placeholder="Name*"
        />
        <input
          type="text"
          className="w-full col-span-2 md:col-span-1 border border-gray-300 p-2"
          placeholder="Organization"
        />
        <input
          type="email"
          className="w-full col-span-2 md:col-span-1 border border-gray-300 p-2"
          placeholder="E-Mail*"
        />
        <input
          type="phone"
          className="w-full col-span-2 md:col-span-1 border border-gray-300 p-2"
          placeholder="Phone*"
        />
        <textarea
          className="w-full col-span-2 border border-gray-300 p-2"
          rows={4}
          placeholder="Message"
        ></textarea>
        <div className=" col-span-2 flex justify-center items-center gap-2">
          <input
            type="checkbox"
            className="cursor-pointer"
            id="footerContactCheck"
          />
          <label
            htmlFor="footerContactCheck"
            className="cursor-pointer text-sm"
          >
            I agree to the{" "}
            <a href="/" className=" text-black">
              Privacy Statement
            </a>{" "}
            *
          </label>
        </div>
        <div className="col-span-2">
          <button className=" text-sm hover:bg-white transition-colors duration-150 hover:text-secondary border border-gray-300  px-6 py-1 text-white">
            SEND
          </button>
        </div>
      </form>
    </div>
  </div>
}