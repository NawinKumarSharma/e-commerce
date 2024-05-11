'use client'

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Link from "next/link";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Category",
    link: "/#category",
  },
  {
    title: "men",
    link: "/men",
  },
  {
    title: "women",
    link: "/#women",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              {/* <img src={footerLogo} alt="Logo" className="max-w-[50px]" /> */}
              Ur Next Bazaar
            </h1>
            <p className="">
              We sell only the most exclusive and high quality products for you.
              We are the best so come and shop with us.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Jain global campus</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 9835979046</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <Link href="#">
                <FaInstagram className="text-3xl" />
              </Link>
              <Link href="#">
                <FaFacebook className="text-3xl" />
              </Link>
              <Link href="#">
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link, index) => (
                    <li key={`important-link-${index}`} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={`link-${index}`} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={`location-${index}`} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Nawin
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;