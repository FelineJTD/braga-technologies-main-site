/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Data
import { WorksData } from "../../config/cfg-works";

// Components
import CardWorks from "../../components/card-works";
import GetInTouch from "../../components/section-get-in-touch";
import Navbar from "../../components/navbar";

export default function Works() {
  const [currPage, setCurrPage] = useState(1);
  const [currWorksType, setCurrWorksType] = useState("All Projects");
  const [worksToShow, setWorksToShow] = useState(WorksData);
  const [isSelectionOpened, setIsSelectionOpened] = useState(false);
  const [lastPage, setLastPage] = useState(Math.ceil(WorksData.length / 12));

  const worksContainer = useRef();

  useEffect(() => {
    setLastPage(Math.ceil(worksToShow.length / 12));
  }, [worksToShow]);

  const nextPage = () => {
    setCurrPage(Math.min(lastPage, currPage + 1));
    scrollToWorksTop();
  };

  const prevPage = () => {
    setCurrPage(Math.max(1, currPage - 1));
    scrollToWorksTop();
  };

  const scrollToWorksTop = () => {
    worksContainer.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta
          name='description'
          content='Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more.'
          key='description'
        />
        <meta
          name='keywords'
          content='Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services'
          key='keywords'
        />
      </Head>

      <Navbar color='light' />
      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBG relative'>
          <p className='bold mb-4'>00.</p>
          <p className='col-span-4 mb-4 bold'>Works /</p>
          <h1 className='row-start-2 col-start-4 col-span-6 text-center mb-6'>
            <i>Navigating</i> the World, One <u>Map</u> at a Time.
          </h1>
          <p className='col-start-5 col-span-4 text-center text-sm'>
            See our approach in utilizing, creating, and engineering maps to
            help in navigate various fields and sectors.
          </p>

          {/* WORKS */}
          <div
            ref={worksContainer}
            className='pt-24 col-start-2 col-span-10 flex flex-col md:grid md:grid-cols-3 gap-6 w-full relative'
          >
            {worksToShow
              .slice(12 * (currPage - 1), 12 * currPage)
              .map((work, index) => (
                <CardWorks
                  work={work}
                  key={index}
                  className='md:[&:nth-child(3n+2)]:top-16'
                />
              ))}
          </div>

          {/* TOOLTIP */}
          <nav className='flex items-center justify-between sticky bottom-6 mt-24 col-start-1 col-span-12 w-full z-30'>
            <div className='hidden md:block'>
              <img src='/works/Compass.svg' alt='' width={56} height={56} />
            </div>
            <div className='flex space-x-3 w-full md:w-auto justify-between'>
              <div className='flex space-x-1 md:space-x-3'>
                <button onClick={prevPage} className='buttonTooltip shadow-lg'>
                  &lt;
                </button>
                <button className='buttonTooltip shadow-lg md:hidden' disabled>
                  {currPage}
                </button>{" "}
                {/* Mobile Ver */}
                <button
                  className='buttonTooltip shadow-lg hidden md:block'
                  disabled
                >
                  Page {currPage}
                </button>{" "}
                {/* Desktop Ver */}
                <button onClick={nextPage} className='buttonTooltip shadow-lg'>
                  &gt;
                </button>
              </div>
              <div>
                <button
                  className='buttonTooltip shadow-lg flex justify-between space-x-3 w-40 z-30 relative duration-300'
                  onClick={() => setIsSelectionOpened(!isSelectionOpened)}
                >
                  <p className='text-xs md:text-sm bold mr-2'>
                    {currWorksType}
                  </p>
                  <img
                    src='/works/ic-filter.svg'
                    alt=''
                    width={14}
                    height={14}
                  />
                </button>
                <div
                  id='selections-container'
                  className={`${
                    isSelectionOpened ? "block" : "hidden"
                  } pb-12 md:pb-16 absolute bottom-0 right-0 z-[25]`}
                >
                  <div
                    id='selections'
                    className={`${
                      isSelectionOpened ? "max-h-screen" : "max-h-0"
                    } w-40 flex-col bg-white rounded-lg p-2 shadow-lg transition duration-300 overflow-hidden`}
                  >
                    <button
                      onClick={() => {
                        setWorksToShow(WorksData);
                        setCurrPage(1);
                        scrollToWorksTop();
                        setCurrWorksType("All Projects");
                      }}
                      className='buttonTooltip w-full text-left'
                    >
                      All Projects
                    </button>
                    <button
                      onClick={() => {
                        setWorksToShow(
                          WorksData.filter(
                            (work) => work.work_type === "Project"
                          )
                        );
                        setCurrPage(1);
                        scrollToWorksTop();
                        setCurrWorksType("Projects");
                      }}
                      className='buttonTooltip w-full text-left'
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => {
                        setWorksToShow(
                          WorksData.filter(
                            (work) => work.work_type === "Case Study"
                          )
                        );
                        setCurrPage(1);
                        scrollToWorksTop();
                        setCurrWorksType("Case Studies");
                      }}
                      className='buttonTooltip w-full text-left'
                    >
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
  );
}
