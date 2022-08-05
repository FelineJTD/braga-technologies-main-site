import Head from 'next/head'
import { useState, useEffect } from 'react'
import PartnerLogos from '../components/partner-logos'

export default function Home() {
  const [num, setNum] = useState('01.');
  useEffect(() => {
    const onScroll = () => {
      const top = window.outerHeight+500;
      if (window.scrollY < top + 300) {
        setNum('01.');
      } else if (window.scrollY > top + 300 && window.scrollY < top + 600) {
        setNum('02.');
      } else if (window.scrollY > top + 900) {
        setNum('03.');
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
        <div className='h-[2500px]'>
          <section id='scroll-area' className='whiteBG sticky top-0'>
            <p className='bold mb-4 z-10'>01.</p>
            <div className='col-span-4 z-10'>
              <p className='mb-4 bold'>Visualize Easily</p>
              <h2>From <i>seeing</i> where, to understand why.</h2>
            </div>
            <p className='text-gray-600 lg:self-end col-start-7 col-span-4 z-10'>Created with less time, easy to add data, interactive visualization and user friendly interface.</p>
            <div className='col-start-2 col-span-10 border-t-[1px] border-gray-600 mt-5 mb-10 z-10' aria-hidden/>

            {/* 01 SCROLL AREA */}
            <div className='flex flex-col justify-end min-h-[50vh] h-full col-start-2 col-span-4 relative'>
              <h3 className='font-inter text-[13.5rem] [line-height:10rem] font-medium text-gray-100 absolute top-0 z-0'>{num}</h3>
              <div className='self-end relative z-10'>
                <h5 className='text-2xl mb-4'>Multi-Format Data Visualization</h5>
                <p>GeoDashboard easily visualize data in point, polygon and polyline format. Inspect rich data display for each attribute.</p>
              </div>
            </div>
            <div className='col-start-7 col-span-5 row-span-2 bg-gray-200 h-full w-full rounded-xl' />
          </section>
        </div>

        

        {/* 02 */}
        <section className='blackBG'>
          <p className='bold mb-4 z-10'>02.</p>
          <div className='col-span-4 z-10'>
            <p className='mb-4 bold'>Visualize Easily</p>
            <h2>Gathering Insights through Spatial Data</h2>
          </div>
        </section>

        {/* 03 */}
        <section className='whiteBG'>
          <p className='bold mb-4 z-10'>03.</p>
          <p className='mb-4 bold col-span-4'>Customer Stories</p>
        </section>
      </main>
    </div>
  )
}
