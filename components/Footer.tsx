import Link from "next/link";

const Footer = () => {
  return (
    <footer className='px-20 py-10 bg-[#191919] text-white'>
      <nav className='mb-5 w-full'>
        <ul className='flex justify-center'>
          <li className='pr-8'>
            <Link href='/' className='navLink'>
              Terms Of Use
            </Link>
          </li>
          <li className='pr-8'>
            <Link href='/' className='navLink'>
              Privacy-Policy
            </Link>
          </li>
          <li className='pr-8'>
            <Link href='/' className='navLink'>
              Blog
            </Link>
          </li>
          <li className='pr-8'>
            <Link href='/' className='navLink'>
              FAQ
            </Link>
          </li>
          <li className='pr-8'>
            <Link href='/' className='navLink'>
              Watch List
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <p className='text-center'>© 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all
          related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly
          prohibited. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;