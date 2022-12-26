import React from 'react';
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from '../public/images/logo.png'
import {UserCircleIcon} from "@heroicons/react/20/solid";

function Header() {
  return (
    <header className='absolute w-full flex justify-between items-center py-6 px-20 bg-black/50 backdrop-blur-md z-50'>
      <div className='w-[150px]'>
        <Image src={HeaderLogo} alt="Logo" className='w-full h-full object-cover'/>
      </div>
      <nav>
        <ul className='flex'>
          <li className='pr-8'>
            <Link href='/' className='headerLink'>Home</Link>
          </li>
          <li className='pr-8'>
            <Link href='/' className='headerLink'>Pricing</Link>
          </li>
          <li className='pr-8'>
            <Link href='/' className='headerLink'>Blog</Link>
          </li>
          <li className='pr-8'>
            <Link href='/' className='headerLink'>About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <UserCircleIcon className='h-8 w-8 text-white cursor-pointer transition duration-[.3s] hover:text-red-500'/>
      </div>
    </header>
  );
}

export default Header;