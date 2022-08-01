import Head from 'next/head'
import Image from 'next/image'
import PartnerLogos from '../components/partner-logos'

export default function Home() {

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
        <section className='whiteBG'>
          <p className='bold mb-4 z-10'>01.</p>
          <div className='col-span-4 z-10'>
            <p className='mb-4 bold'>Visualize Easily</p>
            <h2>From <i>seeing</i> where, to understand why.</h2>
          </div>
          <p className='text-gray-600 lg:self-end col-start-7 col-span-4 z-10'>Created with less time, easy to add data, interactive visualization and user friendly interface.</p>
          <div className='col-start-2 col-span-10 border-t-[1px] border-gray-600 mt-5 mb-10 z-10' aria-hidden/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/geodashboard/01.svg' alt='' className='hidden md:block absolute lg:relative col-start-2 col-span-4 z-0' />
          <div className='col-start-7 col-span-5 row-span-2 bg-gray-200 h-[50vh] w-full rounded-xl' />
          <div className='col-start-2 col-span-4 self-end'>
            <h5 className='text-2xl mb-4'>Multi-Format Data Visualization</h5>
            <p>GeoDashboard easily visualize data in point, polygon and polyline format. Inspect rich data display for each attribute.</p>
          </div>
        </section>

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
