/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState } from 'react'
import CardWorks from '../../components/card-works';
import GetInTouch from '../../components/get-in-touch-section';

export default function Works() {
  const works = [
    {
      id: "1",
      title: "Smiling Java / Event Portal",
      type: "Braga Enterprise",
      img: "https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0",
      coordinates: "37° 48' 15.7068'' N  122° 16' 15.9996'' W",
      number: "No. 03",
      isComingSoon: false,
    },
    {
      id: "2",
      title: "Smiling Java / Event Portal",
      type: "Braga Enterprise",
      img: "https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0",
      coordinates: "37° 48' 15.7068'' N  122° 16' 15.9996'' W",
      number: "No. 03",
      isComingSoon: true,
    },
  ]

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
          <p className='col-start-5 col-span-4 text-center text-sm mb-14'>See our approach in utilizing, creating, and engineering maps to help in navigate various fields and sectors.</p>

          {/* WORKS */}
          <div className='col-start-2 col-span-10 grid grid-cols-3 gap-6'>
            {works.map((work, index) => (
              <CardWorks work={work} key={index} />
            ))}
          </div>

          {/* TOOLTIP */}
          <nav className='flex justify-between sticky bottom-6 mt-6 col-start-1 col-span-12'>
            <p>Compass</p>
            <div className='flex space-x-3'>
              <button>&lt;</button>
              <button>Page 1</button>
              <button>&gt;</button>
              <button>Show All Projects</button>
            </div>
          </nav>
        </section>

        <GetInTouch number='01.' />
      </main>
    </div>
  )
}
