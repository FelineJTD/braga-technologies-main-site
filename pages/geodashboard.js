/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState, useEffect } from 'react'
import GetInTouch from '../components/get-in-touch-section';
import PartnerLogos from '../components/partner-logos';
import Carousel from '../components/carousel';

export default function GeoDashboard() {
  const data01 = [
    {
      num: '01.',
      title: 'Multi-Format Data Visualization',
      text: 'GeoDashboard easily visualize data in point, polygon and polyline format. Inspect rich data display for each attribute.',
    },
    {
      num: '02.',
      title: 'Range Calculation',
      text: 'Visualize multiple layers both vector and raster to perform a detailed, precise, and insightful analysis.',
    },
    {
      num: '03.',
      title: 'Bootstrap Approach',
      text: 'Created in no time through bootstrap. Get all the desired features, tailored to your needs.',
    },
  ]

  const custStories = [
    {
      client_logo: '/static/images/logos/logo-1.png',
      client_logo_alt: 'Pertamina',
      image_url: '/images/cust-stories/1.png',
      title: 'Accelerating Agricultural Sustainability',
      text: '“It has provided a fast-track to enhance the solution & bring value to our clients. The Python package has allowed us to integrate CARTO into our DataOps pipelines, allowing us to create, update & publish maps faster, saving our team valuable time, and giving a better service.”',
      source_name: 'Isaac Pernas',
      source_title: 'Chief Information Officer at JLL',
    },
    {
      client_logo: '/static/images/logos/logo-2.png',
      client_logo_alt: 'Pertamina',
      image_url: '/images/cust-stories/2.png',
      title: 'Accelerating Agricultural Sustainability 2',
      text: '“It has provided a fast-track to enhance the solution & bring value to our clients. The Python package has allowed us to integrate CARTO into our DataOps pipelines, allowing us to create, update & publish maps faster, saving our team valuable time, and giving a better service.”',
      source_name: 'Isaac Pernas',
      source_title: 'Chief Information Officer at JLL',
    },
    {
      client_logo: '/static/images/logos/logo-3.png',
      client_logo_alt: 'Pertamina',
      image_url: '/images/cust-stories/3.png',
      title: 'Accelerating Agricultural Sustainability 3',
      text: '“It has provided a fast-track to enhance the solution & bring value to our clients. The Python package has allowed us to integrate CARTO into our DataOps pipelines, allowing us to create, update & publish maps faster, saving our team valuable time, and giving a better service.”',
      source_name: 'Isaac Pernas',
      source_title: 'Chief Information Officer at JLL',
    },
  ]

  const [currIdx, setCurrIdx] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const top = window.outerHeight+500;
      if (window.scrollY < top + 300) {
        setCurrIdx(0);
      } else if (window.scrollY > top + 300 && window.scrollY < top + 600) {
        setCurrIdx(1);
      } else if (window.scrollY > top + 900) {
        setCurrIdx(2);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);
  

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBG'>
          <h1 className='col-start-2 col-span-5 text-5xl'>Broaden Your Insight Through Maps.</h1>
          <p className='col-span-5 self-end'>Visualize spatial data, excercise spatial analysis, and gather valuable insights with Geo-Dashboard – from your browser.</p>
          <div className='col-start-2 col-span-10 mt-10 bg-gray-500 rounded-lg h-[50vh]' />
        </section>

        {/* PARTNER LOGOS */}
        <PartnerLogos />

        {/* 01 */}
        <div className='md:h-[2500px]'>
          <section id='scroll-area' className='whiteBG md:sticky top-0'>
            <p className='bold mb-4 z-10'>01.</p>
            <div className='col-span-4 z-10'>
              <p className='mb-4 bold'>Visualize Easily</p>
              <h2>From <i>seeing</i> where, to understand why.</h2>
            </div>
            <p className='text-gray-600 lg:self-end col-start-7 col-span-4 z-10 mt-3'>Created with less time, easy to add data, interactive visualization and user friendly interface.</p>
            <div className='w-full col-start-2 col-span-10 border-t-[1px] border-gray-600 mt-5 mb-10 z-10' aria-hidden/>

            {/* 01 SCROLL AREA (DESKTOP) */}
            <div className='hidden md:flex flex-col justify-end min-h-[50vh] h-full col-start-2 col-span-4 relative'>
              <h3 className='font-inter text-[13.5rem] [line-height:10rem] font-medium text-gray-100 absolute top-0 z-0'>{data01[currIdx].num}</h3>
              <div className='self-end relative z-10'>
                <h5 className='text-2xl mb-4'>{data01[currIdx].title}</h5>
                <p>{data01[currIdx].text}</p>
              </div>
            </div>
            <div className='col-start-7 col-span-5 row-span-2 bg-gray-200 h-full w-full rounded-xl' />

            {/* 01 SCROLL AREA (MOBILE) */}
            {
              data01.map((item, idx) => {
                return (
                  <div className='md:hidden flex flex-col justify-end min-h-[50vh] h-full col-start-2 col-span-4 relative' key={idx}>
                    <div className='self-end relative z-10'>
                      <h5 className='text-2xl mb-4'>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                )
              })
            }
          </section>
        </div>

        

        {/* 02 */}
        <section className='blackBG'>
          <p className='bold mb-4 z-10'>02.</p>
          <div className='col-span-4 z-10'>
            <p className='mb-4 bold'>Key Features</p>
            <h2>Gathering Insights through Spatial Data</h2>
          </div>
        </section>

        {/* 03 */}
        <section className='whiteBG'>
          <p className='bold z-10 lg:sticky top-20 mb-4 lg:-mb-20'>03.</p>
          <p className='bold col-span-3 lg:sticky top-20 mb-4 lg:-mb-20'>Customer Stories</p>
          <h6 className='text-xl col-start-9 col-span-4 row-start-1 lg:sticky top-20 mb-11 lg:-mb-36'>We believe Geospatial Approach could solve various issues for everyone, <u>everywhere.</u></h6>

          <div className='row-start-1 col-start-5 col-span-4'>
            <h3 className='mb-44'>
              Designed for discoveries. <br />
              A simply-powerful tool, made <u>for everyone to explore</u> location insights faster than ever.
            </h3>
            <div className='bg-gray-200 rounded-lg h-72 w-full' />
            <div className='border-t-[1px] border-gray-600 mt-10 -mb-4 w-full' aria-hidden/>
          </div>
        </section>

        {/* Carousel */}
        <section className='bg-gray-50 text-gray-900 flex flex-col lg:grid lg:grid-cols-12 items-start gap-x-6 px-6 pb-14 xl:px-[10%]'>
          <Carousel>
            {
              custStories.map((item, idx) => {
                return (
                  <div key={idx} className='w-full px-0.5'>
                    <img src={item.client_logo} alt={item.client_logo_alt} className='h-6' />
                    <img src={item.image_url} alt='cover image' className='w-full h-36 bg-gray-200 text-center my-6' />
                    <h3 className='mb-4'>{item.title}</h3>
                    <p className='mb-4 md:mb-12'>{item.text}</p>
                    <div className='md:flex justify-between text-gray-800'>
                      <p className='text-sm mb-3 md:mb-0'>{item.source_name}, <br /> {item.source_title}</p>
                      <button className='buttonLight'>Read Story</button>
                    </div>
                  </div>
                )
              })
            }
          </Carousel>
        </section>

        <GetInTouch number='04.' />
      </main>
    </div>
  )
}
