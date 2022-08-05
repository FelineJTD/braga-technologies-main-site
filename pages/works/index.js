/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState } from 'react'
import WorkIcon from '../../assets/images/works/work-icon';
import GetInTouch from '../../components/get-in-touch-section';

export default function Works() {
  const [isHovered, setIsHovered] = useState(false);

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
          <p className='bold mb-4'>00.</p>
          <p className='col-span-4 mb-4 bold'>Works /</p>
          <h1 className='row-start-2 col-start-4 col-span-6 text-center mb-6'><i>Navigating</i> the World, One <u>Map</u> at a Time.</h1>
          <p className='col-start-5 col-span-4 text-center text-sm'>See our approach in utilizing, creating, and engineering maps to help in navigate various fields and sectors.</p>

          {/* WORK COMPONENT */}
          <div className='col-start-2 col-span-10 grid grid-cols-3 gap-6'>
            <div className='w-full rounded-lg border-[1px] border-gray-500 relative' onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
              {/* Title */}
              <div className='p-3 relative z-10'>
                <WorkIcon className={`${isHovered? 'fill-white' : 'fill-gray-500'} duration-500`} />
                <h6 className={`${isHovered? 'text-white':'text-gray-700'} mb-1 duration-500`}>Smiling Java / Event Portal</h6>
                <p className={`${isHovered? 'text-white':'text-gray-500'} text-xs duration-500`}>Braga Enterprise</p>
              </div>
              {/* Image */}
              <img src='https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0' alt='' className={`${isHovered? 'h-full' : 'h-72'} w-full rounded-lg object-cover object-bottom absolute z-0 bottom-0 duration-500`} />
              <div className={`${isHovered? 'opacity-100 h-full' : 'opacity-0 h-72'} bg-gray-900 bg-opacity-50 w-full bottom-0 rounded-lg z-0 duration-500 absolute flex flex-col items-center justify-end p-3 text-white`}>
                <div className={`${isHovered? 'translate-y-0': 'translate-y-2'} w-full duration-500`}>
                  <button className='buttonDark w-full mb-2 text-sm'>View Work</button>
                  <div className='flex justify-between w-full'>
                    <p className='text-xs font-normal'>{`37° 48' 15.7068'' N  122° 16' 15.9996'' W`}</p>
                    <p className='text-xs font-normal'>No. 03</p>
                  </div>
                </div>
              </div>
              <div className='h-72 w-full' />
            </div>
          </div>
        </section>

        <GetInTouch number='01.' />
      </main>
    </div>
  )
}
