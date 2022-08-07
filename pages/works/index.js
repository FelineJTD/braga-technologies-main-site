/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react'
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
      is_coming_soon: false,
      work_type: "Project",
    },
    {
      id: "2",
      title: "Smiling Java / Event Portal",
      type: "Braga Enterprise",
      img: "https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0",
      coordinates: "37° 48' 15.7068'' N  122° 16' 15.9996'' W",
      number: "No. 03",
      is_coming_soon: true,
      work_type: "Case Study",
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
      is_coming_soon: false,
      work_type: "Case Study",
    })
  }


  const [currPage, setCurrPage] = useState(1);
  const [currWorksType, setCurrWorksType] = useState("All Projects");
  const [worksToShow, setWorksToShow] = useState(works);
  const [lastPage, setLastPage] = useState(Math.ceil(works.length / 12));

  useEffect(() => {
    setLastPage(Math.ceil(worksToShow.length / 12));
    setCurrPage(1);
    scrollToWorksTop();
  }, [worksToShow]);

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

  const showSelections = () => {
    document.getElementById('selections').classList.remove('hidden');
    document.getElementById('selections').classList.add('flex');
  }

  const hideSelections = () => {
    document.getElementById('selections').classList.add('hidden');
    document.getElementById('selections').classList.remove('flex');
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
            {worksToShow.slice(12*(currPage-1),12*currPage).map((work, index) => (
              <CardWorks work={work} key={index} className='md:[&:nth-child(3n+2)]:translate-y-16' />
            ))}
          </div>

          {/* TOOLTIP */}
          <nav className='flex items-center justify-between sticky bottom-6 mt-24 col-start-1 col-span-12 w-full z-30'>
            <div className='hidden md:block'>
              <Image src='/works/Compass.svg' alt='' width={56} height={56} />
            </div>
            <div className='flex space-x-3 w-full md:w-auto justify-between'>
              <div className='flex space-x-3'>
                <button onClick={prevPage} className='buttonTooltip shadow-lg'>&lt;</button>
                <button className='buttonTooltip shadow-lg md:hidden' disabled>{currPage}</button> {/* Mobile Ver */}
                <button className='buttonTooltip shadow-lg hidden md:block' disabled>Page {currPage}</button> {/* Desktop Ver */}
                <button onClick={nextPage} className='buttonTooltip shadow-lg'>&gt;</button>
              </div>
              <div className='group'>
                <button className='buttonTooltip shadow-lg flex justify-between space-x-3 w-40 z-30 relative duration-300' onClick={showSelections}>
                  <p className='text-xs md:text-sm bold mr-2'>{currWorksType}</p>
                  <Image src='/works/ic-filter.svg' alt='' width={14} height={14} />
                </button>
                <div className='pb-16 absolute bottom-0 right-0 z-[25] group-hover:block hidden'>
                  <div id='selections' className='w-40 flex-col bg-white rounded-lg p-2 shadow-lg transition duration-300 max-h-0 group-hover:max-h-36 overflow-hidden'>
                    <button 
                      onClick={() => {
                        setWorksToShow(works); 
                        setCurrWorksType("All Projects");
                      }} 
                      className='buttonTooltip w-full text-left'>
                        All Projects
                    </button>
                    <button 
                      onClick={() => {
                        setWorksToShow(works.filter(work => work.work_type === 'Project'));
                        setCurrWorksType('Projects');
                      }}
                      className='buttonTooltip w-full text-left'>
                        Projects
                    </button>
                    <button 
                      onClick={() => {
                        setWorksToShow(works.filter(work => work.work_type === 'Case Study'));
                        setCurrWorksType('Case Studies');
                      }}
                      className='buttonTooltip w-full text-left'>
                        Case Studies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>

        <GetInTouch number='01.' />
      </main>
    </div>
  )
}
