import Head from 'next/head'
import Image from 'next/image'
import { createRef } from 'react'

import PartnerLogos from '../components/partner-logos'
import CardSolution from '../components/card-solution'
import QuotesCarousel from '../components/quotes-carousel'

export default function Home() {
  const featureRef = createRef();
  const examplesRef = createRef();

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

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='w-full h-[calc(100vh-2rem)] py-12 text-center px-6 lg:px-[25vw] xl:px-[30vw] flex flex-col justify-between'>
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
        <PartnerLogos />

        {/* 01 */}
        <section className='whiteBG'>
          <p className='bold mb-4'>01.</p>
          <div className='col-span-4'>
            <p className='mb-4 bold'>Powered by Braga</p>
            <h2 className='mb-4'>Sustainably Accelerating through Geospatial Tech</h2>
            <p className='text-gray-600'>Meticulously designed solutions, implemented with geospatial expertise to empower You today, tomorrow and many years to come.</p>
          </div>
          <div className='flex flex-col space-y-1 lg:space-y-0 col-span-6 md:grid grid-cols-2 gap-6 mt-8'>
            {
              solutions.map((solution, index) => (
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

          <div className='col-span-12 h-96 w-full bg-white my-6 rounded-xl' />

          <div id='features' className='col-start-2 col-span-11 flex space-x-3 overflow-auto w-full lg:snap-x no-scrollbar' ref={featureRef}>
            { 
              features.map((feature, index) => (
                <div key={index} className='lg:snap-start flex border-2 border-gray-700 rounded-lg p-3 space-x-4 min-w-[30rem] lg:min-w-[35vw]'>
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
          <div className='col-start-2 col-span-11 -ml-4'>
            <button 
              className='border-0 hover:text-primary duration-200' 
              onClick={() => scroll(featureRef, -400)}
            >
              &lt;
            </button>
            <button 
              className='border-0 hover:text-primary duration-200'
              onClick={() => scroll(featureRef, 400)}
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
          <QuotesCarousel>
            {
              quotes.map((quote, index) => (
                <blockquote key={index} className='max-w-full'>
                  <p className='font-tt-hoves font-bold text-2xl lg:text-3xl mb-6'>{quote.quote}</p>
                  <div className='flex space-x-3'>
                    <div className='w-24 h-24 bg-gray-400'/>
                    <p>{quote.author} <br /> {quote.author_title}</p>
                  </div>
                </blockquote>
              ))
            }
          </QuotesCarousel>
          
        </section>

        {/* Sectors */}
        <section className='whiteBG'>
          
        </section>

        {/* 04 */}
        <section className='blackBG'>
          <p className='bold mb-4'>04.</p>
          <div className='col-span-4'>
            <p className='mb-4 bold'>Our Works</p>
            <h2 className='mb-10'>Braga Solutions, Integrated to You.</h2>
          </div>
          <p className='col-span-3 col-start-7 lg:self-end mb-10'>Our interdisciplinary design and development approach accelerates the geospatial tech delivery to your hands.</p>
          <button className='col-span-2 lg:self-end mb-10'>Works</button>

          <div className='col-start-2 col-span-11 flex space-x-3 overflow-auto no-scrollbar w-full snap-x' ref={examplesRef}>
            {
              examples.map((example, index) => (
                <CardSolution solution={example} isDarkMode={true} key={index} />
              ))
            }
          </div>
          {/* TODO: change to icon */}
          <div className='col-start-2 col-span-11 -ml-4 mt-8'>
            <button 
              className='border-0 hover:text-primary duration-200' 
              onClick={() => scroll(examplesRef, -200)}
            >
              &lt;
            </button>
            <button 
              className='border-0 hover:text-primary duration-200'
              onClick={() => scroll(examplesRef, 200)}
            >
              &gt;
            </button>
          </div>

          <div className='col-start-2 col-span-10 mt-11'>
            <h4>What We Do</h4>
            <div className='flex flex-col space-y-1 md:space-y-0 w-full md:grid grid-cols-2 px-0 gap-4 mt-8'>
            {
              services.map((service, index) => (
                <div key={index} className='border-2 border-gray-600 rounded-lg p-3 w-full'>
                  <h5 className='font-bold'>{service.title}</h5>
                  <p className='text-sm'>{service.desc}</p>
                </div>
              ))
            }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
