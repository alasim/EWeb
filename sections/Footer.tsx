import Image from "next/image";
import { Fragment } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100 py-10 px-4 md:px-0">
        <div className=" container mx-auto">
          <div className=" flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
            <div className="w-full">
              <h1 className=" text-gray-600 text-lg pb-2 w-full border-b-2">
                News
              </h1>
              <div className="mt-8">
                <a
                  className="twitter-timeline overflow-hidden"
                  data-height="600"
                  href="https://twitter.com/garamantis?ref_src=twsrc%5Etfw"
                >
                  Tweets by garamantis
                </a>{" "}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </div>
            </div>

            <div className="w-full">
              <h1 className=" text-gray-600 text-lg pb-2 w-full border-b-2">
                News
              </h1>
              <div className="mt-8 flex flex-col gap-6">
                <div className=" flex items-center gap-2">
                  <FaMapMarkedAlt className=" text-gray-500" />
                  <a href="/" className="text-secondary">
                    {" "}
                    EUREF-Campus 7, 10829 Berlin, Germany
                  </a>
                </div>

                <div className=" flex items-center gap-2">
                  <MdEmail className=" text-gray-500" />
                  <a href="/" className="text-secondary">
                    {" "}
                    info@garamantis.com
                  </a>
                </div>

                <div className=" flex items-center gap-2">
                  <FaPhone className=" text-gray-500" />
                  <a href="/" className="text-secondary">
                    {" "}
                    +493055144669
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h1 className=" text-gray-600 text-lg pb-2 w-full border-b-2">
                News
              </h1>
              <div className="mt-8">
                <form className=" flex flex-col gap-4">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2"
                    placeholder="Name*"
                  />
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2"
                    placeholder="E-Mail*"
                  />
                  <input
                    type="phone"
                    className="w-full border border-gray-300 p-2"
                    placeholder="Phone*"
                  />
                  <textarea
                    className="w-full border border-gray-300 p-2"
                    rows={4}
                    placeholder="Message"
                  ></textarea>
                  <div className=" flex items-center gap-2">
                    <input type="checkbox" id="footerContactCheck" />
                    <label htmlFor="footerContactCheck" className=" text-sm">
                      I agree to the{" "}
                      <a href="/" className=" text-secondary">
                        Privacy Statement
                      </a>{" "}
                      *
                    </label>
                  </div>
                  <div>
                    <button className=" border border-gray-300 bg-white px-6 py-1 text-gray-400">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-4 py-10 bg-footerBg">
        <ul className=" flex justify-center gap-6">
          <li>
            <a href="/">
              <FaYoutube size="1.5rem" className=" text-white" />
            </a>
          </li>

          <li>
            <a href="/">
              <FaTwitter size="1.5rem" className=" text-white" />
            </a>
          </li>

          <li>
            <a href="/">
              <FaFacebookF size="1.5rem" className=" text-white" />
            </a>
          </li>

          <li>
            <a href="/">
              <FaInstagram size="1.5rem" className=" text-white" />
            </a>
          </li>

          <li>
            <a href="/">
              <FaLinkedin size="1.5rem" className=" text-white" />
            </a>
          </li>
        </ul>
        <ul className=" flex justify-center gap-4 text-white text-sm">
          <li>
            <p>Language: </p>
          </li>
          <li>
            <a href="/">Deutsch (German)</a>
          </li>
          <li>
            <a href="/">English</a>
          </li>
        </ul>

        <ul className=" flex justify-center gap-4 text-white text-xs md:text-sm">
          <li>
            <a href="/">Site Notice </a>
          </li>
          <li>
            <a href="/">Privacy Statement</a>
          </li>
          <li>
            <a href="/">General Terms and Conditions</a>
          </li>
        </ul>
        <p className=" text-white text-sm">
          ©2021 Garamantis GmbH. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
