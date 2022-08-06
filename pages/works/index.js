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

  for (let i = 0; i < 50; i++) {
    works.push({
      id: `${i}`,
      title: "Smiling Java / Event Portal",
      type: "Braga Enterprise",
      img: "https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0",
      coordinates: "37° 48' 15.7068'' N  122° 16' 15.9996'' W",
      number: `No. ${i}`,
      isComingSoon: false,
    })
  }

  const [currPage, setCurrPage] = useState(1);
  const lastPage = Math.ceil(works.length / 12);

  const scrollToWorksTop = () => {
    document.getElementById('works-container').scrollIntoView({ behavior: 'smooth' });
  }

  const nextPage = () => {
    setCurrPage(Math.min(lastPage, currPage + 1));
    scrollToWorksTop();
  }

  const prevPage = () => {
    setCurrPage(Math.max(1, currPage - 1));
    scrollToWorksTop();
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
        <section className='whiteBG relative'>
          <p className='bold mb-4'>00.</p>
          <p className='col-span-4 mb-4 bold'>Works /</p>
          <h1 className='row-start-2 col-start-4 col-span-6 text-center mb-6'><i>Navigating</i> the World, One <u>Map</u> at a Time.</h1>
          <p className='col-start-5 col-span-4 text-center text-sm'>See our approach in utilizing, creating, and engineering maps to help in navigate various fields and sectors.</p>

          {/* WORKS */}
          <div id='works-container' className='pt-24 col-start-2 col-span-10 flex flex-col md:grid md:grid-cols-3 gap-6 w-full'>
            {works.slice(12*(currPage-1),12*currPage).map((work, index) => (
              <CardWorks work={work} key={index} className='md:[&:nth-child(3n+2)]:translate-y-16' />
            ))}
          </div>

          {/* TOOLTIP */}
          <nav className='flex justify-between sticky bottom-6 mt-24 col-start-1 col-span-12 w-full z-30'>
            <p>Compass</p>
            <div className='flex space-x-3'>
              <button onClick={prevPage} className='bg-white'>&lt;</button>
              <button className='bg-white'>Page {currPage}</button>
              <button onClick={nextPage} className='bg-white'>&gt;</button>
              <button className='bg-white'>Show All Projects</button>
            </div>
          </nav>
        </section>

        <GetInTouch number='01.' />
      </main>
    </div>
  )
}
