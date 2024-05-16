'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [links] = useState([
    {id: 1, title: 'we provide', link: '#'},
    {id: 2, title: 'how it works', link: '#'},
    {id: 3, title: 'pricing', link: '#'},
    {id: 4, title: 'FAQ', link: '#'},
    {id: 5, title: 'about us', link: '#'},
  ])
  return (
    <nav className="h-20 bg-white/65 !z-[9999999] fixed top-0 left-0 w-full hover:h-[100px] transition-all duration-200 group">
      <div className="px-4 max-w-[1400px] w-full mx-auto flex items-center justify-between space-x-4 h-20 group-hover:h-[100px] transition-all duration-200 relative">
        <Link href="/" className="relative w-[120px] h-[22px] group-hover:w-20 group-hover:h-3 transition-all duration-200">  <Image src={'/images/logo.svg'} fill className="object-cover" alt="logo"  /></Link>
      
        <ul className="hidden lg:flex items-center space-x-[60px]">
          {links.map(link => (
            <Link href={link.link} key={link.id} className="capitalize text-xs font-medium decoration-clone flex items-center relative  h-20 group-hover:h-[100px] transition-all duration-200 group/link group/icon"><span>{link.title}</span> <MdOutlineKeyboardArrowRight className="group-hover/icon:ml-3 text-gray-600 transition-all duration-200" /> <span className="absolute w-0 group-hover/link:w-full transition-all duration-200 h-0.5 bg-black top-full"></span></Link>
          ))}
        </ul>
     
        <div className="flex items-center space-x-6 md:space-x-16">
          <Link href="/" className="capitalize text-xs font-medium decoration-clone">sign in</Link>
          <Link href="/" className="bg-[#eaeaf3] rounded-[40px] py-5 pl-[26px] pr-[36px] flex uppercase text-xs font-medium items-center space-x-4"><span>get geekpay</span> <Image src={'https://assets-global.website-files.com/62cbe7a5c5049667d1ccf4b3/62cc1883903d3473092643bf_bubble.svg'} width={20} height={20} alt="fots" /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar