/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currPage, setCurrPage] = useState('');

  // router
  const router = useRouter();

  // TODO: change to split on / and get the first element
  useEffect(() => {
    const currPath = router.pathname;
    if (currPath === '/') {
      setCurrPage('home');
    } else if (currPath.substring(0,13) === '/geodashboard') {
      setCurrPage('geodashboard');
    } else if (currPath.substring(0,6) === '/works') {
      setCurrPage('works');
    } else if (currPath.substring(0,8) === '/company') {
      setCurrPage('company');
    } else if (currPath.substring(0,8) === '/contact') {
      setCurrPage('contact');
    } else {
      setCurrPage('');
    }
  }, [router]);

  const closeMobileNav = () => {
    document.getElementById('toggle').style.transform = 'rotate(0)';
    document.getElementById('mobile-nav').style.transform = 'translateY(-100vh)';
    document.getElementById('mobile-nav').style.display = 'hidden';
    setIsMobileNavOpen(false);
  }

  const openMobileNav = () => {
    document.getElementById('toggle').style.transform = 'rotate(180deg)';
    document.getElementById('nav').style.transform = 'translateY(0)';
    document.getElementById('mobile-nav').style.display = 'flex';
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
          if (window.scrollY > 40) { // hide navbar
            navbar.style.transform = 'translateY(-5rem)';
            navbar.style.transitionDelay = '0.2s';
          } else { // show navbar
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
      <nav id='mobile-nav' className='h-screen w-full bg-white bg-opacity-90 backdrop-blur z-50 fixed top-0 left-0 p-6 duration-300 translate-y-[-100vh] lg:hidden flex flex-col space-y-6 text-right justify-end selection:bg-primary selection:text-gray-50'>
        <div className='divider' aria-hidden/>
        <Link href='/'>
          <a className={`${currPage === 'home' ? 'text-primary underline' : ''} text-lg`} onClick={closeMobileNav}>Home</a>
        </Link>
        {/* <Link href='/geodashboard'> */}
          <p className={`${currPage === 'geodashboard' ? 'text-primary underline' : ''} opacity-50 text-lg`} onClick={closeMobileNav}>GeoDashboard</p>
        {/* </Link> */}
        {/* <Link href='/works'> */}
          <p className={`${currPage === 'works' ? 'text-primary underline' : ''} opacity-50 text-lg`} onClick={closeMobileNav}>Works</p>
        {/* </Link> */}
        {/* <Link href='/company/culture'> */}
          <p className={`${currPage === 'company' ? 'text-primary underline' : ''} text-lg`} onClick={closeMobileNav}>Company</p>
        {/* </Link> */}
        <Link href='/company/culture'>
          <a className="text-base" onClick={closeMobileNav}>Culture</a>
        </Link>
        <Link href='/company/career'>
          <a className="text-base" onClick={closeMobileNav}>Career</a>
        </Link>
        <Link href='/contact'>
          <a className={`${currPage === 'contact' ? 'text-primary underline' : ''} text-lg`} onClick={closeMobileNav}>Contact</a>
        </Link>
        <div className='divider' aria-hidden/>
        <Link href='/'><a className='text-sm text-gray-500' onClick={closeMobileNav}>Terms of Use</a></Link>
        <Link href='/'><a className='text-sm text-gray-500' onClick={closeMobileNav}>Privacy</a></Link>
      </nav>

      {/* DESKTOP NAV */}
      <nav id='nav' className='flex items-center justify-between w-full px-6 py-3 bg-white text-gray-600 bg-opacity-50 backdrop-blur sticky top-0 z-50 duration-200 selection:bg-primary selection:text-gray-50 h-[60px]'>
        {/* Logo images might be redundant, can be combined with conditionals */}
        <Link href='/'><img src='/logo-braga-sm.svg' alt='Braga Technologies Logo' className='md:hidden h-5 cursor-pointer' onClick={closeMobileNav}/></Link>
        <Link href='/'><img src='/logo-braga-full.svg' alt='Braga Technologies Logo' className='hidden md:block h-5 cursor-pointer' /></Link>
        <div className='justify-self-center items-center space-x-6 h-full hidden lg:flex'>
          <Link href='/'>
            <a className={`${currPage === 'home' ? 'text-primary underline underline-offset-[5px] decoration-[1.5px]' : 'unThin'} text-sm`}>Home</a>
          </Link>
          {/* <Link href='/geodashboard'> */}
            <p className={`${currPage === 'geodashboard' ? 'text-primary underline underline-offset-[5px] decoration-[1.5px]' : ''} opacity-50 text-sm`}>GeoDashboard</p>
          {/* </Link> */}
          {/* <Link href='/works'> */}
            <p className={`${currPage === 'works' ? 'text-primary underline underline-offset-[5px] decoration-[1.5px]' : ''} opacity-50 text-sm`}>Works</p>
          {/* </Link> */}
          <div className='relative h-full'>
            <p className='opacity-0 text-sm relative z-10'>Company</p>
            <div className='absolute -left-4 top-0 w-[calc(100%+32px)] min-h-[48px] max-h-[48px] hover:max-h-[10rem] duration-500 z-40 overflow-hidden flex flex-col'>
              <Link href='/company/culture'>
                <a className={`${currPage === 'company' ? 'text-primary underline underline-offset-[5px] decoration-[1.5px]' : 'unThin'} left-0 top-0 text-sm mt-[7px] mb-[25%] mx-4`}>Company</a>
              </Link>
              <div className='flex flex-col space-y-2 mt-0.5 py-3 px-4 bg-white bg-opacity-50 backdrop-blur rounded-md'>
                <Link href='/company/culture'>
                  <a className='unThin text-sm'>Culture</a>
                </Link>
                <Link href='/company/career'>
                  <a className='unThin text-sm'>Career</a>
                </Link>
              </div>
            </div>
          </div>
          <Link href='/contact'>
            <a className={`${currPage === 'contact' ? 'text-primary underline underline-offset-[5px] decoration-[1.5px]' : 'unThin'} text-sm`}>Contact</a>
          </Link>
        </div>
        <div className='flex'>
          <a href='https://geodashboard.braga.co.id/' target='_blank' rel='noreferrer noopener'>
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
