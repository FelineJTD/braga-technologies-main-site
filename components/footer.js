/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Footer() {
  const copyrightText = '© 2022';
  return (
    <footer>
      <nav className='bg-gray-100 text-gray-500 p-6 xl:px-[10%] grid grid-cols-12 w-full gap-6 selection:bg-primary selection:text-gray-50'>
        <div className='col-span-12 md:col-span-3'>
          <Link href='/'><img src='/logo-braga-sm.svg' alt='Braga Technologies Logo' className='col-span-6 h-5 cursor-pointer mb-6'/></Link>
          <p className='text-gray-600'>Indonesia&apos;s Leading Geospatial Technology that optimize analytics and performance, moving the world one map at a time.</p>
        </div>
        <div className='col-span-6 md:col-start-5 lg:col-start-7 lg:col-span-2 flex flex-col space-y-4'>
          <h6 className='text-gray-600'>Product</h6>
          <p className='opacity-50'>GeoDashboard</p>
          {/* <p className='opacity-50'>Braga Enterprise</p>
          <p className='opacity-50'>Braga AI</p> */}
        </div>
        {/* <div className='col-span-6 md:col-span-2 flex flex-col space-y-4'>
          <h6 className='text-gray-600'>Works</h6>
          <p className='opacity-50'>Works</p>
          <p className='opacity-50'>Case Study</p>
          <p className='opacity-50'>Portfolio</p>
        </div> */}
        <div className='col-span-6 md:col-span-2 flex flex-col space-y-4'>
          <h6 className='text-gray-600'>Company</h6>
          {/* <p className='opacity-50'>About</p> */}
          <Link href='/company/career'><a><p className='unThin'>Career</p></a></Link>
          <Link href='/company/culture'><a><p className='unThin'>Culture</p></a></Link>
          <Link href='/contact'><a><p className='unThin'>Contact Us</p></a></Link>
        </div>

        <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200 mt-4' />
        <a href='#' className='col-span-6 col-start-1 hidden md:block'><p>Navigate Mutually, with Braga Technologies</p></a>
        <p className='col-span-8 md:col-span-2 text-gray-500'>Privacy Policy</p>
        <p className='text-right col-span-4'>{copyrightText}</p>
        <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200' />
        {/* <p className='md:hidden col-span-12'>{copyrightText}</p> */}
      </nav>
    </footer>
  )
}
