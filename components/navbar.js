/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Navbar() {
  const openMobileNav = () => {
    document.getElementById('mobile-nav').style.transform = 'translateY(0)';
  }

  const closeMobileNav = () => {
    document.getElementById('mobile-nav').style.transform = 'translateY(-100vh)';
  }

  return (
    <>
      {/* MOBILE NAV */}
      <nav id='mobile-nav' className='h-screen w-full bg-white bg-opacity-90 backdrop-blur z-50 fixed p-6 duration-500 translate-y-[-100vh] lg:hidden'>
        <div className='flex flex-col space-y-6 text-right'>
          <button onClick={closeMobileNav}>Close Nav</button>
          <Link href='/'><a className='un text-lg'>Home</a></Link>
          <Link href='/geodashboard'><a className='un text-sm'>GeoDashboard</a></Link>
          <Link href='/'><a className='un text-lg'>Works</a></Link>
          <Link href='/'><a className='un text-lg'>Company</a></Link>
          <Link href='/'><a className='un text-lg'>Contact</a></Link>
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav className='flex items-center justify-between w-full px-6 py-3 bg-white text-gray-600 bg-opacity-75 backdrop-blur sticky top-0 z-40'>
        {/* Logo images might be redundant, can be combined with conditionals */}
        <img src='/logo-braga-full.svg' alt='Braga Technologies Logo' className='hidden md:block h-5' />
        <img src='/logo-braga-sm.svg' alt='Braga Technologies Logo' className='md:hidden h-5' />
        <div className='justify-self-center space-x-6 hidden lg:block'>
          <Link href='/'><a className='un text-sm'>Home</a></Link>
          <Link href='/geodashboard'><a className='un text-sm'>GeoDashboard</a></Link>
          <Link href='/'><a className='un text-sm'>Works</a></Link>
          <Link href='/'><a className='un text-sm'>Company</a></Link>
          <Link href='/'><a className='un text-sm'>Contact</a></Link>
        </div>
        <div>
          <a href='https://geodashboard.braga.co.id/' rel='noreferrer noopener'>
            <button className='buttonLight text-gray-900 bg-white bg-opacity-50'>
              Map Demo
            </button>
          </a>
          <button onClick={openMobileNav} className='lg:hidden'>DropDown</button>
        </div>
      </nav>
    </>
  )
}
