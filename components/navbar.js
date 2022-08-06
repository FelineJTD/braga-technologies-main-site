/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => {
    document.getElementById('toggle').style.transform = 'rotate(0)';
    document.getElementById('mobile-nav').style.transform = 'translateY(-100vh)';
    setIsMobileNavOpen(false);
  }

  const openMobileNav = () => {
    document.getElementById('toggle').style.transform = 'rotate(180deg)';
    document.getElementById('nav').style.transform = 'translateY(0)';
    document.getElementById('mobile-nav').style.height = window.innerHeight + 'px';
    document.getElementById('mobile-nav').style.transform = 'translateY(0)';
    setIsMobileNavOpen(true);
  }

  const toggleMobileNav = () => {
    if (isMobileNavOpen) { // close nav
      closeMobileNav();
    } else { // open nav
      openMobileNav();
    }
  }

  const [lastScrollY, setLastScrollY] = useState(0);

  // fix mobile nav height when window is resized
  useEffect(() => {
    const handleResize = () => {
      document.getElementById('mobile-nav').style.height = window.innerHeight + 'px';
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // hide navbar when scrolled
  useEffect(() => {
    const navbar = document.getElementById('nav');
    const onScroll = () => {
      setLastScrollY(window.scrollY);
      if (!isMobileNavOpen) {
        if (window.scrollY > lastScrollY) { // scroll down
          if (window.scrollY > 0) {
            navbar.style.transform = 'translateY(-5rem)';
            navbar.style.transitionDelay = '0.2s';
          } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.transitionDelay = '0s';
          }
        } else { // scroll up
          navbar.style.transform = 'translateY(0)';
          navbar.style.transitionDelay = '0s';
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [lastScrollY, isMobileNavOpen]);

  return (
    <>
      {/* MOBILE NAV */}
      <nav id='mobile-nav' className='h-screen w-full bg-white bg-opacity-90 backdrop-blur z-50 fixed top-0 left-0 p-6 duration-300 translate-y-[-100vh] lg:hidden flex flex-col space-y-6 text-right justify-end'>
        <div className='divider' aria-hidden/>
        <Link href='/'><a className='text-lg' onClick={closeMobileNav}>Home</a></Link>
        <Link href='/geodashboard'><a className='text-lg' onClick={closeMobileNav}>GeoDashboard™</a></Link>
        <Link href='/works'><a className='text-lg' onClick={closeMobileNav}>Works</a></Link>
        <Link href='/'><a className='text-lg' onClick={closeMobileNav}>Company</a></Link>
        <Link href='/'><a className='text-lg' onClick={closeMobileNav}>Contact</a></Link>
        <div className='divider' aria-hidden/>
        <Link href='/'><a className='text-sm text-gray-500' onClick={closeMobileNav}>Terms of Use</a></Link>
        <Link href='/'><a className='text-sm text-gray-500' onClick={closeMobileNav}>Privacy</a></Link>
      </nav>

      {/* DESKTOP NAV */}
      <nav id='nav' className='flex items-center justify-between w-full px-6 py-3 bg-white text-gray-600 bg-opacity-50 backdrop-blur sticky top-0 z-50 duration-200'>
        {/* Logo images might be redundant, can be combined with conditionals */}
        <Link href='/'><img src='/logo-braga-sm.svg' alt='Braga Technologies Logo' className='md:hidden h-5 cursor-pointer' onClick={closeMobileNav}/></Link>
        <Link href='/'><img src='/logo-braga-full.svg' alt='Braga Technologies Logo' className='hidden md:block h-5 cursor-pointer' /></Link>
        <div className='justify-self-center space-x-6 hidden lg:block'>
          <Link href='/'><a className='un text-sm'>Home</a></Link>
          <Link href='/geodashboard'><a className='un text-sm'>GeoDashboard™</a></Link>
          <Link href='/works'><a className='un text-sm'>Works</a></Link>
          <Link href='/'><a className='un text-sm'>Company</a></Link>
          <Link href='/'><a className='un text-sm'>Contact</a></Link>
        </div>
        <div className='flex'>
          <a href='https://geodashboard.braga.co.id/' rel='noreferrer noopener'>
            <button className='buttonLight text-gray-900 bg-white bg-opacity-50'>
              Map Demo
            </button>
          </a>
          <img src='/navbar/ic-arrow-left.svg' alt='Navbar menu button' id='toggle' onClick={toggleMobileNav} className='lg:hidden ml-3 relative cursor-pointer duration-300' />
        </div>
      </nav>
    </>
  )
}
