import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import CardSector from './card-sector'
import { Sectors } from '../config/cfg-homepage';

export default function SectorsSection() {
  const [selectedSectorIdx, setSelectedSectorIdx] = useState(0);
  const [sectorLength, _setSectorLength] = useState(Sectors.length);
  const sectorsRef = useRef(null);

  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(sectorsRef.current);
  });

  useEffect(() => {
    if (isVisible) {
      setSelectedSectorIdx(0);
    } 
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSectorIdx((selectedSectorIdx + 1)%sectorLength);
    }, 5000);
    return () => clearInterval(interval);
  }, [sectorLength, selectedSectorIdx]);

  return (
    <section ref={sectorsRef} className='whiteBGFullGrid'>
      {/* Left */}
      <div className='hidden md:flex flex-col col-start-1 lg:col-start-2 col-span-2 lg:col-span-3 pr-6'>
        { Sectors.filter((_, idx) => {return(idx%4 == 0 || idx%4 == 1)}).map((sector, index) => (
          <CardSector 
            key={index} 
            sector={sector} 
            index={index} 
            selectedSectorTitle={Sectors[selectedSectorIdx].title} 
          />
        )) }
      </div>

      {/* Center */}
      <div className='col-span-6 md:col-start-3 md:col-span-2 lg:col-start-5 lg:col-span-4'>
        <h6 className='text-gray-800 text-[20px] lg:text-[22px] mb-6'>We have navigated enterprises and organizations across these sectors.</h6>
        <div className='w-full flex flex-col sticky top-6 z-10 md:hidden'>
          { Sectors.map((sector, index) => (
            <CardSector 
              key={index} 
              sector={sector} 
              index={index} 
              selectedSectorTitle={Sectors[selectedSectorIdx].title} 
              isMobile={true} 
            />
          )) }
        </div>
        { Sectors.map((sector, index) => (
          <div key={index} className='flex flex-col space-y-1 relative z-0'>
            <button 
              key={index} 
              className={`${selectedSectorIdx === index ? 'buttonSelectionTimedSelected' : 'buttonSelection'} font-normal relative min-w-[8rem] !flex`} 
              onClick={() => setSelectedSectorIdx(index)}
            >
              <Image src={sector.icon} alt='' width={16} height={16} />
              <h3 className='text-left mt-4 text-gray-800 ml-3 text-2xl md:text-xl lg:text-3xl '>{sector.title}</h3>
            </button>
          </div>
        )) }
      </div>

      {/* Right */}
      <div className='hidden md:flex flex-col col-start-5 col-span-2 lg:col-start-9 lg:col-span-3 pt-36 pl-6'>
        { Sectors.filter((_, idx) => {return(idx%4 == 2 || idx%4 == 3)}).map((sector, index) => (
          <CardSector 
            key={index} 
            sector={sector} 
            index={index} 
            selectedSectorTitle={Sectors[selectedSectorIdx].title} 
          />
        )) }
      </div>
    </section>
  )
}