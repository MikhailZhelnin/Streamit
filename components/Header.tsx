import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from '../public/images/logo.png'
import {UserCircleIcon} from "@heroicons/react/20/solid";
import {HeartIcon} from "@heroicons/react/24/outline";
import MyList from "./MyList";

function Header() {

  const [openMyListModal, setOpenMyListModal] = useState(false)

  return (
    <>
      <header className='absolute w-full flex justify-between items-center py-6 px-20 bg-black/50 backdrop-blur-md z-50'>
        <div className='w-[150px]'>
          <Image src={HeaderLogo} alt="Logo" className='w-full h-full object-cover'/>
        </div>
        <nav>
          <ul className='flex'>
            <li className='pr-8'>
              <Link href='/' className='navLink'>Home</Link>
            </li>
            <li className='pr-8'>
              <Link href='/' className='navLink'>Pricing</Link>
            </li>
            <li className='pr-8'>
              <Link href='/' className='navLink'>Blog</Link>
            </li>
            <li className='pr-8'>
              <Link href='/' className='navLink'>About</Link>
            </li>
          </ul>
        </nav>
        <div className='flex items-center'>
          <HeartIcon
            onClick={() => setOpenMyListModal(true)}
            className='h-8 w-8 text-white cursor-pointer transition duration-[.3s] hover:text-red-500 mr-2'
          />
          <UserCircleIcon className='h-8 w-8 text-white cursor-pointer transition duration-[.3s] hover:text-red-500'/>
        </div>
      </header>
      {openMyListModal && <MyList onClose={() => setOpenMyListModal(false)}/>}
    </>

  );
}

export default Header;