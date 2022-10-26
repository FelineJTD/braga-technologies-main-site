/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Data
import { Values, LastSectionImage } from '../../config/cfg-culture';
import Animation from '../../assets/animations/culture/culture-animation.json'

// Components
// import Team from '../../components/section-team';
import Lottie from 'lottie-react';
import Image from 'next/image';
import Navbar from '../../components/navbar';

export default function Culture() {  
  const valuesRef = useRef();

  // ** scroll **
  const scroll = (elementRef, scrollAmount) => {
    const currOffset = elementRef.current.scrollLeft;
    let element = elementRef.current;
    if (element) {
      element.scrollTo({
        left: currOffset + scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  const [isScrollArea, setIsScrollArea] = useState(false);
  const scrollAreaRef = useRef();
  useEffect(() => {
    if (window.innerWidth > 768) {
      const onScroll = () => {
        const top = scrollAreaRef.current.getBoundingClientRect().top;
        if (top < 50) {
          setIsScrollArea(true);
        } else {
          setIsScrollArea(false);
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <Navbar color='light' />
      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBGFullGridSmPadding'>
          <p className='bold mb-4'>00.</p>
          <p className='col-start-2 col-span-4 mb-4'>Company / <b>Culture</b></p>
          <h1 className='row-start-2 lg:col-start-4 col-span-6 mb-6'>Locate your <u>uncharted</u> passion here.</h1>
          <p className='row-start-3 lg:col-start-2 col-span-2'><b>Values</b></p>
          <p className='row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-4 col-span-4 lg:col-span-3 mb-6'>We&apos;re creating an environment to keep everyone standout with their talents and be able to cherish each and every unique qualities that we have.</p>
          <p className='row-start-4 lg:row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-7 col-span-4 lg:col-span-3'>Dare to act, own the work, be the truest you. Seizing opportunities daily, that’s how we do.</p>
          {/* carousel */}
          <div className='col-start-1 col-span-6 lg:col-span-12 flex space-x-3 overflow-auto no-scrollbar w-full mt-10' ref={valuesRef}>
            <div className='lg:min-w-[24%] min-w-0 -ml-3 lg:ml-0 h-full' />
            { Values.map((value, index) => (
                <div key={index} className='flex flex-col space-y-2 min-w-[287px] w-full rounded-lg p-3 border-2 border-gray-200'>
                  <div className='relative flex items-center justify-center bg-gray-200 w-full aspect-[2/1]'>
                    <Image src={value.img} alt='' layout='fill' objectFit='cover' />
                  </div>
                  <p className='text-xs'>{value.title}</p>
                  <h5 className='w-8/12'>{value.headline}</h5>
                  <p className='text-sm'>{value.desc}</p>
                </div>
            ))}
          </div>
          {/* TODO: change to icon */}
          <div className='lg:col-start-4 col-span-3 -ml-4 mt-8'>
            <button 
              className='border-0 hover:text-primary duration-200' 
              onClick={() => scroll(valuesRef, -200)}
            >
              &lt;
            </button>
            <button 
              className='border-0 hover:text-primary duration-200'
              onClick={() => scroll(valuesRef, 200)}
            >
              &gt;
            </button>
          </div>
        </section>

        <section ref={scrollAreaRef} className={`relative defaultGrid py-24 text-gray-50 bg-[#0E0D0D] ${isScrollArea? 'mt-0 mx-0 px-6 xl:px-[calc(10%+1.5rem)]' : 'mt-12 lg:mx-6 rounded-2xl px-6 lg:px-0 xl:px-[10%]'} duration-500`}>
          <div className='flex items-end justify-center absolute left-0 bottom-0 h-full w-full max-w-full z-0'>
            <Lottie animationData={Animation} loop />
          </div>
          <div className='col-start-2 col-span-3 lg:sticky top-24 z-10 lg:mb-0 pb-[24vw]'>
            <p className='bold mb-4'>Culture Manifesto</p>
            <h2 className='w-full'>
              Only good<br />
              <u>well-being</u><br />
              leads to<br />
              <i>well-working.</i>
            </h2>
          </div>
          <p className='col-start-9 col-span-3 text-gray-200 mb-[30vw] text-sm relative z-10'>More than our work, we are valuable as a person. As much as you do your best at work, we are committed at prioritizing and improving your well-being.</p>
          <p className='col-start-9 col-span-3 text-gray-200 mt-8 bold mb-[30vw] relative z-10 text-lg'>With Braga Technologies, navigate your passion and expertise here together.</p>
          <p className='col-start-9 col-span-3 text-gray-200 mt-8 text-sm relative z-10'>Braga’s living systems and playbook are designed to ensure you have a wholly impeccable experience here.</p>
          <button className='col-start-9 col-span-2 text-gray-200 mt-8 mb-[30vw] buttonDark relative z-10'>Grow With Us &gt;</button>
        </section>

        {/* 01 */}
        {/* <section className='whiteBG'>
          <p className='bold mb-4'>01.</p>
          <div className='col-span-4'>
            <p className='mb-4 bold'>Our Team</p>
            <h2 className='mb-6 lg:mb-10'>Here, our difference makes a difference.</h2>
          </div>
          <p className='col-start-7 col-span-5 self-end -translate-y-2 mb-10'>We&apos;re creating an environment to keep everyone standing out with their talents and be able to cherish each and every unique qualities that we have.</p>

          <Team departments={Departments} page='culture' />
        </section> */}

        <section className='px-6 py-14 lg:px-[10%] h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-end justify-end' style={{backgroundImage: `url(${LastSectionImage})`}}>
          <div className='w-full md:w-1/2 md:mb-4 flex md:flex-col items-end'>
            <div className='flex lg:flex-row flex-col lg:space-x-4 bg-gray-50 rounded-t-2xl rounded-bl-2xl p-6'>
              <p className='bold mb-4'>01.</p>
              <div>
                <p className='mb-4 bold'>Work at Braga</p>
                <h3>Location Intelligence meets <u>your</u> uniquity creates something new.</h3>
              </div>
            </div>
            <img src='/company/corner.svg' alt='' className='md:-mt-0.5 md:-mr-0.5 select-none rotate-180 md:rotate-0 mr-4 -mb-0.5' />
          </div>
          <div className='w-full md:w-1/2 flex md:flex-col'>
            <div className='flex items-start md:items-end md:space-x-10'>
              <img src='/company/corner.svg' alt='' className='md:-mb-0.5 md:-ml-0.5 select-none md:rotate-180 rotate-0 min-w-[24px] ml-4 -mt-0.5' />
              <img src='/company/additional.svg' alt='' className='-mb-0.5 -ml-0.5 select-none hidden md:block' />
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-4 bg-gray-50 rounded-b-2xl rounded-tr-2xl p-6 lg:items-center justify-between'>
              <p className='text-sm mb-3 lg:mb-0'>Being part of Braga means finding yourself in a unique position. Seize the possibility to work on challanges that have impacts all over the world.</p>
              <Link href='/company/career'><a>
                <button className='buttonLight w-2/3 lg:w-auto whitespace-nowrap'>Grow With Us &gt;</button>
              </a></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
