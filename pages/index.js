import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import CardSolution from '../components/card-solution'

// Partner Logos
import LogoA from '../assets/images/partner-logos/logo-a.png'
import LogoB from '../assets/images/partner-logos/logo-b.png'
import LogoC from '../assets/images/partner-logos/logo-c.png'
import LogoD from '../assets/images/partner-logos/logo-d.png'
import LogoE from '../assets/images/partner-logos/logo-e.png'
import LogoF from '../assets/images/partner-logos/logo-f.png'

export default function Home() {
  const partnerLogos = [LogoA, LogoB, LogoC, LogoD, LogoE, LogoF]

  const solutions = [
    {
      "title": "Big Data Processing", 
      "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
      "type": "Powerful",
    }, {
      "title": "Rich Analytics",
      "desc": "Advanced tools that Braga provides helps to come up with analytics that beneficial to tackle various challanges.",
      "type": "Advanced",
    }, {
      "title": "IoT and AI Integration",
      "desc": "Connect to IoT and AI tools, models, or hardwares for furhterly advanced and integrated problem solving.",
      "type": "Dynamic",
    }, {
      "title": "Access Anywhere, Anytime.",
      "desc": "Not bounded by space and time, we help in multiple platforms, adapting to different conditions and terrains.",
      "type": "Global",
    }
  ]

  const features = [
    {
      "title": "Spatial Range Calculation",
      "desc": "Visualize multiple layers both vector and raster to perform a detailed, precise, and insightful analysis.",
    }, {
      "title": "Multi-Format Data Visualization",
      "desc": "Easily visualize data in point, polygon and polyline format. Inspect rich data display for each attribute.",
    }, {
      "title": "Bootstrap Approach",
      "desc": "Created in no time through bootstrap. Get all the desired features, tailored to your needs.",
    }
  ]

  const quotes = [
    {
      "quote": "“The Framework will help countries in building capacity using geospatial technology ... to achieve a digital transformation, and bridge the digital divide”",
      "author": "Anna Wellenstein",
      "author_title": "Director, Land and Geospatial, World Bank.",
    }, {
      "quote": "“The Framework will help countries in building capacity using geospatial technology ... to achieve a digital transformation, and bridge the digital divide”",
      "author": "Anna Wellenstein 2",
      "author_title": "Director, Land and Geospatial, World Bank.",
    }, {
      "quote": "“The Framework will help countries in building capacity using geospatial technology ... to achieve a digital transformation, and bridge the digital divide”",
      "author": "Anna Wellenstein 3",
      "author_title": "Director, Land and Geospatial, World Bank.",
    }
  ]

  const examples = [
    {
      "title": "Si-Pulau", 
      "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
      "type": "GeoDashboard",
    }, {
      "title": "Fleet Management System",
      "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
      "type": "Enterprise",
    }, {
      "title": "Visitor Monitoring",
      "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
      "type": "Braga-AI",
    }, {
      "title": "West Java Tourism",
      "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution..",
      "type": "GeoDashboard",
    }
  ]

  const services = [
    {
      "title": "GIS",
      "desc": "Data Collection / GeoMapping Tools / Spatial Research / Data Collections / ETC",
    }, {
      "title": "Development",
      "desc": "Full-Stack Web & Mobile / Product Cycle Management / CMS / Artificial Intelligence / GIS Integration / ETC",
    }, {
      "title": "Design",
      "desc": "Design System / Prototyping / Interaction Design / Digital Platform Design / Kits / Experience Design",
    }, {
      "title": "Services",
      "desc": "Lorem / Ipsum Dolor / Sit Amet Const / ETC",
    }
  ]


  // ** quotes **
  const [activeQuote, setActiveQuote] = useState(0)
  const count = quotes.length;
  useEffect(() => {
    const calcWidth = `${100*count}%`
    document.getElementById("quotes").style.width = calcWidth;
  }, [count]);

  const nextQuote = () => {
    document.getElementById("quotes").style.transform = `translateX(-${((activeQuote+1)%count)*100/count}%)`;
    setActiveQuote((activeQuote+1)%count);
  }

  const prevQuote = () => {
    document.getElementById("quotes").style.transform = `translateX(-${((activeQuote-1+count)%count)*100/count}%)`;
    setActiveQuote((activeQuote-1+count)%count);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 5000);
    return () => clearInterval(interval);
  });
  // ** end quotes **

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-gray-900 w-full'>
        {/* 00 */}
        <section className='w-full h-screen text-center px-6 lg:px-[25vw] flex flex-col justify-between'>
          <div className='flex items-center w-full flex-grow'>
            <h1>
              Answering <i>How</i>, by Understanding <span className='underline italic'>Where</span>
            </h1>
          </div>
          <div>
            <p className='text-sm py-10'>
              In this era of volatility, uncertainty, complexity, and ambiguity, Braga Technologies brings Location Insight to help industries and organizations alike in Assets Monitoring, Fleet Management, Campaign Optimation, and more.
            </p>
          </div>
        </section>

        {/* PARTNER LOGOS */}
        <section className='defaultPadding flex justify-center items-center w-full space-x-12'>
          {
            partnerLogos.map((logo, index) => (
              <div key={index}>
                <Image
                  src={logo}
                  alt='Partner Logo'
                  className='mx-auto'
                />
              </div>
            ))
          }
        </section>

        {/* 01 */}
        <section className='whiteBG'>
          <p className='font-bold mb-4'>01.</p>
          <div className='col-span-4'>
            <p className='mb-4 font-bold'>Powered by Braga</p>
            <h2 className='mb-4'>Sustainably Accelerating through Geospatial Tech</h2>
            <p className='text-gray-700'>Meticulously designed solutions, implemented with geospatial expertise to empower You today, tomorrow and many years to come.</p>
          </div>
          <div className='flex flex-col space-y-1 col-span-6 md:grid grid-cols-2 px-0 lg:px-6 gap-6 mt-8'>
            {
              solutions.map((solution, index) => (
                <CardSolution solution={solution} key={index} />
              ))
            }
          </div>
        </section>

        {/* 02 */}
        <section className='blackBG'>
          <p className='font-bold mb-4'>02.</p>
          <div className='col-span-4'>
            <p className='mb-4 font-bold'>GeoDashboard</p>
            <h2 className='mb-4'>From seeing <i>where</i> to understand <u>why.</u></h2>
          </div>
          <p className='col-span-3 col-start-7 md:self-end mb-4'>Analyze site conditions, measure key urban indicators, and perform spatial analysis — directly in the browser.</p>
          <button className='col-span-2 md:self-end mb-4'>GeoDashboard</button>

          <div className='col-span-12 h-96 w-full bg-white my-6 rounded-xl' />

          <div className='col-start-2 col-span-11 flex space-x-3 overflow-auto'>
            { 
              features.map((feature, index) => (
                <div key={index} className='flex border-2 border-gray-700 rounded-lg p-3 space-x-4 min-w-[35vw]'>
                  <div className='bg-gray-700 h-full w-24 rounded-lg' />
                  <div>
                    <h5 className='font-bold'>{feature.title}</h5>
                    <p className='text-sm'>{feature.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {/* TODO: change to icon */}
          <div className='col-start-2'>
            <button className='mr-3'>&lt;</button>
            <button>&gt;</button>
          </div>
        </section>

        {/* 03 */}
        <section className='whiteBG'>
          <p className='font-bold mb-4'>03.</p>
          <p className='mb-4 font-bold col-span-3'>GeoSpatial Potential</p>
          {/* Experts' Quotes */}
          <div className='col-span-4 mx-6 overflow-hidden'>
            <div id='quotes' className='flex w-full duration-500'>
              {
                quotes.map((quote, index) => (
                  <blockquote key={index} className='max-w-full'>
                    <p className='font-tt-hoves font-bold text-3xl mb-6'>{quote.quote}</p>
                    <div className='flex space-x-3'>
                      <div className='w-24 h-24 bg-gray-400'/>
                      <p>{quote.author} <br /> {quote.author_title}</p>
                    </div>
                  </blockquote>
                ))
              }
            </div>
            <div className='col-start-2'>
              <button className='mr-3' onClick={prevQuote}>&lt;</button>
              <button onClick={nextQuote}>&gt;</button>
            </div>
          </div>
          <div className='col-span-4'>
            <p className='text-xl'>We believe Geospatial Approach could solve various issues for everyone, <b><u>everywhere.</u></b></p>
          </div>
        </section>

        {/* Sectors */}
        <section className='whiteBG'>
          
        </section>

        {/* 04 */}
        <section className='blackBG'>
          <p className='font-bold mb-4'>04.</p>
          <div className='col-span-4'>
            <p className='mb-4 font-bold'>Our Works</p>
            <h2 className='mb-4'>Braga Solutions, Integrated to You.</h2>
          </div>
          <p className='col-span-3 col-start-7 md:self-end mb-4'>Our interdisciplinary design and development approach accelerates the geospatial tech delivery to your hands.</p>
          <button className='col-span-2 md:self-end mb-4'>Works</button>

          <div className='col-start-2 col-span-11 flex space-x-3 overflow-auto'>
            {
              examples.map((example, index) => (
                <CardSolution solution={example} isDarkMode={true} key={index} />
              ))
            }
          </div>
          {/* TODO: change to icon */}
          <div className='col-start-2 col-span-10'>
            <button className='mr-3'>&lt;</button>
            <button>&gt;</button>
          </div>

          <div className='col-start-2 col-span-10 mt-11'>
            <h4>What We Do</h4>
            <div className='flex flex-col space-y-1 w-full md:grid grid-cols-2 px-0 gap-4 mt-8'>
            {
              services.map((service, index) => (
                <div key={index} className='flex border-2 border-gray-700 rounded-lg p-3 space-x-4 min-w-[35vw]'>
                  <div>
                    <h5 className='font-bold'>{service.title}</h5>
                    <p className='text-sm'>{service.desc}</p>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </section>

        {/* 05 */}
        <section className='whiteBG'>
          <p className='font-bold mb-4'>05.</p>
          <div className='col-span-4'>
            <p className='mb-4 font-bold'>Get in Touch</p>
            <h2 className='mb-4'>Start Mapping Your Future, Today.</h2>
          </div>
          <p className='col-span-3 col-start-7 md:self-end mb-4'>Find out how you can maximize the value from data and strengthen your decision making.</p>
          <button className='col-span-2 md:self-end mb-4'>Contact Us</button>

          <div className='col-start-2 col-span-10 h-96 w-full bg-gray-200 my-6 rounded-xl' />
        </section>
      </main>

      <footer className='p-6 pt-0 flex flex-col lg:grid lg:grid-cols-12'>
        <div className='col-span-3'>
          <p>Indonesia&apos;s Leading Geospatial Technology that optimize analytics and performance, moving the world one map at a time.</p>
        </div>
        <div className='col-start-5 col-span-2 pr-6'>
          <h6>Product</h6>
          <a href='#'><p>GeoDashboard</p></a>
          <a href='#'><p>Braga Enterprise</p></a>
          <a href='#'><p>Braga AI</p></a>
        </div>
        <div className='col-span-2 pr-6'>
          <h6>Works</h6>
          <a href='#'><p>Works</p></a>
          <a href='#'><p>Case Study</p></a>
          <a href='#'><p>Portfolio</p></a>
        </div>
        <div className='col-span-2 pr-6'>
          <h6>Office</h6>
          <a href='#'><p>About</p></a>
          <a href='#'><p>Team</p></a>
          <a href='#'><p>Career</p></a>
          <a href='#'><p>Contact Us</p></a>
        </div>

        <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200 mt-10 mb-4' />
        <a href='#' className='col-start-5 col-span-2'>Privacy</a>
        <a href='#' className='col-span-2'>Terms of Use</a>
        <p className='text-right col-span-4'>© Braga Technologies 2022</p>
        <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200 mt-4' />
      </footer>
    </div>
  )
}
