/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Footer() {
  const copyrightText = '© Braga Technologies 2022';
  return (
    <footer className='bg-gray-100 text-gray-500 p-6 pt-0 xl:px-[10%] grid grid-cols-12 w-full gap-6 selection:bg-primary selection:text-gray-50'>
      <div className='col-span-12 md:col-span-3'>
        <Link href='/'><img src='/logo-braga-sm.svg' alt='Braga Technologies Logo' className='col-span-6 h-5 cursor-pointer mb-6'/></Link>
        <p className='text-gray-600'>Indonesia&apos;s Leading Geospatial Technology that optimize analytics and performance, moving the world one map at a time.</p>
      </div>
      <div className='col-span-6 md:col-start-5 lg:col-span-2 flex flex-col space-y-4'>
        <h6 className='text-gray-600'>Product</h6>
        <a href='#'><p>GeoDashboard</p></a>
        <a href='#'><p>Braga Enterprise</p></a>
        <a href='#'><p>Braga AI</p></a>
      </div>
      <div className='col-span-6 md:col-span-2 flex flex-col space-y-4'>
        <h6 className='text-gray-600'>Works</h6>
        <a href='#'><p>Works</p></a>
        <a href='#'><p>Case Study</p></a>
        <a href='#'><p>Portfolio</p></a>
      </div>
      <div className='col-span-6 md:col-span-2 flex flex-col space-y-4'>
        <h6 className='text-gray-600'>Office</h6>
        <a href='#'><p>About</p></a>
        <a href='#'><p>Team</p></a>
        <a href='#'><p>Career</p></a>
        <a href='#'><p>Contact Us</p></a>
      </div>

      <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200 mt-4' />
      <a href='#' className='col-span-6 md:col-start-5 md:col-span-2'><p>Privacy</p></a>
      <a href='#' className='col-span-6 md:col-span-2'><p>Terms of Use</p></a>
      <p className='hidden md:block text-right col-span-4'>{copyrightText}</p>
      <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200' />
      <p className='md:hidden col-span-12'>{copyrightText}</p>
    </footer>
  )
}
