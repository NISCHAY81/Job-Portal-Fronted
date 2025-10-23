import {
  IconAnchor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";
import { footerLinks } from "../../public/Data/Data";

const Footer = () => {
  return (
    <div className="pt-20 pb-5 flex gap-5 justify-around  ">
     <div className="w-1/4 flex flex-col gap-4">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-6 w-6 stroke={2.5}" />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <div className="text-sm text-mine-shaft-300">
        Job portal users profiles, skills updates, certification, work
        experience and admin job postings
        <div className="flex gap-3 text-bright-sun-400 mt-3">
          <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-600 transition">
            <IconBrandFacebook />
          </div>
          <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-600 transition">
            <IconBrandInstagram />
          </div>
          <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-600 transition">
            <IconBrandX />
          </div>
        </div>
      </div>
     </div>
     {
        footerLinks.map((item, index)=><div key={index}>
            <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
            {
             item.links.map((link, index)=><div key={index} className="text-mine-shaft-300
             hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 duration-300 ease-in-out">{link}</div>)   
            }
        </div>)
     }
    </div>
  );
};

export default Footer;
