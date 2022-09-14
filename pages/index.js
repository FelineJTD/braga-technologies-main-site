/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react'

// Data
import { 
  Solutions, 
  Features, 
  Quotes, 
  Examples, 
  Services 
} from '../config/cfg-homepage'
import BGLottie from '../assets/animations/homepage/bg-section-hero.json'
import ScrollDown from '../assets/animations/homepage/scroll-down.json'
import GeoDashboardAnimation from '../assets/animations/homepage/geodashboard.json'

// Components
import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'lottie-react'
import PartnerLogos from '../components/section-partner-logos'
import CardSolution from '../components/card-solution'
import Carousel from '../components/carousel'
import GetInTouch from '../components/section-get-in-touch'
import Fleet from '../components/fleet'
import SectorsSection from '../components/section-sectors'

export default function Home() {
  const featureRef = useRef();
  const examplesRef = useRef();
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

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

  // Fleet
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);
  useEffect(() => {
    if (!isVisible1 && !isVisible2 && !isVisible3 && !isVisible4) {
      setTimeout(() => {
        setIsVisible1(true);
        setIsVisible2(true);
        setIsVisible3(true);
        setIsVisible4(true);
      }, 1000);
    }
  }, [isVisible1, isVisible2, isVisible3, isVisible4]);

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <main className='text-gray-900 bg-gray-50 w-full'>
        <div className='md:w-full w-auto h-[calc(100vh-2rem)] absolute -mt-8 z-0'>
          <Lottie animationData={BGLottie} loop={true}/>
        </div>
        { width > 768 && (
        <>
          <Fleet
            fleetNum={120}
            isVisible={isVisible1}
            setIsVisible={setIsVisible1}
            type='bus'
            color='primary'
            className='top-24 md:top-[25%] left-[10%]'
          />
          <Fleet
            fleetNum={124}
            isVisible={isVisible2}
            setIsVisible={setIsVisible2}
            type='car'
            color='primary'
            className='top-36 md:top-[30%] right-[10%] delay-300'
          />
          <Fleet
            fleetNum={200}
            isVisible={isVisible3}
            setIsVisible={setIsVisible3}
            type='car'
            color='secondary'
            className='bottom-52 md:bottom-[28%] left-[15%]'
          />
          <Fleet
            fleetNum={200}
            isVisible={isVisible4}
            setIsVisible={setIsVisible4}
            type='bus'
            color='secondary'
            className='bottom-64 md:bottom-[20%] right-[10%] delay-200'
          />
        </>
        )}
        {/* 00 */}
        <section className='w-full h-[calc(100vh-2rem)] pt-12 text-center flex flex-col justify-between relative z-10'>
          <div className='flex items-center w-full flex-grow px-6 lg:px-[25vw] xl:px-[30vw]'>
            <h1 className='overflow-hidden'>
              Answering <span className='italic animate-top-to-bottom'>How</span>, by Understanding <span className='underline italic animate-bottom-to-top'>Where</span>
            </h1>
          </div>
          <div className='flex flex-col items-center px-6 lg:px-[25vw] xl:px-[30vw] pb-12 bg-gradient-to-b from-transparent to-gray-50'>
            <a href='#section1'>
              <div className='h-6 w-6'>
                <Lottie animationData={ScrollDown} loop={true} />
              </div>
            </a>
            <p className='text-sm py-10'>
              In this era of volatility, uncertainty, complexity, and ambiguity, Braga Technologies brings Location Insight to help industries and organizations alike in Assets Monitoring, Fleet Management, Campaign Optimation, and more.
            </p>
          </div>
        </section>

        {/* PARTNER LOGOS */}
        <PartnerLogos />

        {/* 01 */}
        <section id='section1' className='whiteBG relative z-20'>
          <p className='bold mb-4'>01.</p>
          <div className='col-span-4'>
            <p className='mb-4 bold'>Powered by Braga</p>
            <h2 className='mb-4'>Sustainably Accelerating through Geospatial Tech</h2>
            <p className='text-gray-600'>Meticulously designed solutions, implemented with geospatial expertise to empower You today, tomorrow and many years to come.</p>
          </div>
          <div className='flex flex-col space-y-1 lg:space-y-0 col-span-6 md:grid grid-cols-2 gap-6 mt-8'>
            {
              Solutions.map((solution, index) => (
                <CardSolution solution={solution} key={index} />
              ))
            }
          </div>
        </section>

        {/* 02 */}
        <section className='blackBG'>
          <p className='bold mb-4'>02.</p>
          <div className='col-span-4'>
            <p className='mb-4 bold'>GeoDashboard</p>
            <h2 className='mb-4'>From seeing <i>where</i> to understand <u>why.</u></h2>
          </div>
          <p className='col-span-3 col-start-7 lg:self-end mb-4'>Analyze site conditions, measure key urban indicators, and perform spatial analysis — directly in the browser.</p>
          <button className='col-span-2 lg:self-end mb-4'>GeoDashboard</button>

          <div className='col-span-12 w-full aspect-[1362/625] my-6 rounded-xl'>
            <Lottie animationData={GeoDashboardAnimation} loop={true} />
          </div>

          <div id='features' className='col-start-1 col-span-12 flex space-x-3 overflow-auto w-full lg:snap-x no-scrollbar' ref={featureRef}>
            {/* spacer */}
            <div className='lg:min-w-[7.5%] min-w-0 -ml-3 lg:ml-0 h-full' />
            { 
              Features.map((feature, index) => (
                <div key={index} className='lg:snap-start flex border-2 border-gray-700 rounded-lg p-3 space-x-4 min-w-[30rem] lg:min-w-[40vw]'>
                  <div className='bg-gray-800 rounded-lg h-[68px] w-[68px] flex justify-center items-center flex-shrink-0'>
                    <Image src={feature.img} alt='' height={56} width={56} objectPosition='center' />
                  </div>
                  <div>
                    <h5 className='font-bold'>{feature.title}</h5>
                    <p className='text-sm'>{feature.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* TODO: change to icon */}
          <div className='col-start-2 col-span-11 -ml-4'>
            <button 
              className='border-0 hover:text-primary duration-200' 
              onClick={() => scroll(featureRef, -300)}
            >
              &lt;
            </button>
            <button 
              className='border-0 hover:text-primary duration-200'
              onClick={() => scroll(featureRef, 300)}
            >
              &gt;
            </button>
          </div>
        </section>

        {/* 03 */}
        <section className='whiteBG'>
          <p className='bold mb-4'>03.</p>
          <p className='mb-4 bold col-span-3'>GeoSpatial Potential</p>
          <div className='col-start-9 col-span-4 mb-10'>
            <p className='text-xl'><b>We believe Geospatial Approach could solve various issues for everyone, <u>everywhere.</u></b></p>
          </div>
          {/* Experts' Quotes */}
          <Carousel>
            {
              Quotes.map((quote, index) => (
                <blockquote key={index} className='flex flex-col justify-between w-full max-w-full px-0.5'>
                  <p className='font-tt-hoves font-bold text-2xl lg:text-3xl mb-6'>{quote.quote}</p>
                  <div className='flex space-x-3'>
                    <div className='relative max-h-18 max-w-14 rounded-md flex-shrink-0 flex-grow-0'>
                      <Image src={quote.img} alt={'photo of ' + quote.author} width={56} height={70} />
                    </div>
                    <p className='flex-shrink text-gray-600'><b>{quote.author}</b> <br /> {quote.author_title}</p>
                  </div>
                </blockquote>
              ))
            }
          </Carousel>
          
        </section>

        {/* SECTORS */}
        <SectorsSection />

        {/* 04 */}
        <section className='blackBG'>
          <p className='bold mb-4'>04.</p>
          <div className='col-span-4'>
            <p className='mb-4 bold'>Our Works</p>
            <h2 className='mb-10'>Braga Solutions, Integrated to You.</h2>
          </div>
          <p className='col-span-3 col-start-7 lg:self-end mb-10'>Our interdisciplinary design and development approach accelerates the geospatial tech delivery to your hands.</p>
          <button className='col-span-2 lg:self-end mb-10'>Works</button>

          <div className='col-start-1 col-span-12 flex space-x-3 overflow-auto no-scrollbar w-full snap-x' ref={examplesRef}>
          <div className='lg:min-w-[7.5%] min-w-0 -ml-3 lg:ml-0 h-full' />
            {
              Examples.map((example, index) => (
                <CardSolution solution={example} isDarkMode={true} key={index} />
              ))
            }
          </div>
          {/* TODO: change to icon */}
          <div className='col-start-2 col-span-11 -ml-4 mt-8'>
            <button 
              className='border-0 hover:text-primary duration-200' 
              onClick={() => scroll(examplesRef, -300)}
            >
              &lt;
            </button>
            <button 
              className='border-0 hover:text-primary duration-200'
              onClick={() => scroll(examplesRef, 300)}
            >
              &gt;
            </button>
          </div>

          <div className='col-start-2 col-span-10 mt-11'>
            <h4>What We Do</h4>
            <div className='flex flex-col space-y-1 md:space-y-0 w-full md:grid grid-cols-2 px-0 gap-4 mt-8'>
            {
              Services.map((service, index) => (
                <div key={index} className='border-2 border-gray-600 rounded-lg p-3 w-full'>
                  <h5 className='font-bold'>{service.title}</h5>
                  <p className='text-sm'>{service.desc}</p>
                </div>
              ))
            }
            </div>
          </div>
        </section>

        <GetInTouch number='05.' />
      </main>
    </div>
  )
}
