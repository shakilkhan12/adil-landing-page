'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
    const [links] = useState([
        {id: 1, title: 'we provide', link: '#'},
        {id: 2, title: 'how it works', link: '#'},
        {id: 3, title: 'pricing', link: '#'},
        {id: 4, title: 'FAQ', link: '#'},
        {id: 5, title: 'about us', link: '#'},
      ])
  return (
    <footer id="footer" className="max-w-[1280px] px-4 mx-auto mt-20 bg-[#222227] md:rounded-[16px] group overflow-hidden">
    <div className="flex">
        <div className="footer-logo w-[170px] md:w-[314px] h-[120px] md:h-[156px] relative">
            <Image src="https://assets-global.website-files.com/62cbe7a5c5049667d1ccf4b3/62d137c535f056cda8fcb767_geekpay.svg" width={75} height={14} alt="logo" className=" absolute top-[50%] md:top-[40%] group-hover:-top-[20%] transition-all duration-200" />
            <Image src="/images/dots-white.svg" width={50} height={14} alt="logo" className="translate-y-[200px] group-hover:translate-y-0 transition-all duration-200 mx-auto" />
        </div>
        <div className="w-full">
        <ul className="hidden lg:flex items-center space-x-[60px]  group-hover:space-x-[80px] border-b border-[#ffffff33] w-full px-20 py-8">
          {links.map(link => (
            <Link href={link.link} key={link.id} className="capitalize text-xs font-medium text-white decoration-clone flex items-center relative transition-all duration-200 group/link group/icon"><span>{link.title}</span> <MdOutlineKeyboardArrowRight className="group-hover/icon:ml-3 text-gray-300 transition-all duration-200" /></Link>
          ))}
        </ul>
        <div className="flex items-center justify-center space-x-2 mt-5">
                    <Link href={'#'} className="text-gray-400 hover:text-gray-400 focus:text-gray-300"><FaLinkedin color="white" /></Link>
                    <Link href={'#'} className="text-gray-400 hover:text-gray-400 focus:text-gray-300"><FaXTwitter color="white" /></Link>
                </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer