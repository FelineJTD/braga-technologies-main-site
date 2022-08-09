/* eslint-disable @next/next/no-img-element */
import WorkIcon from '../assets/images/works/work-icon';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// TODO: change hover useState to TailwindCSS group

export default function CardWorks({ work, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    // on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => observer.unobserve(domRef.current);
  });

  return (
      <div className={`${isVisible? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} w-full rounded-lg border-[1px] border-gray-500 relative duration-1000 ${className}`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} ref={domRef}>
        {/* Title */}
        <div className='p-3 relative z-10'>
          <WorkIcon className={`${isHovered? 'fill-white' : 'fill-gray-500'} duration-500`} />
          <h6 className={`${isHovered? 'text-white':'text-gray-700'} mb-1 duration-500`}>{work.title}</h6>
          <p className={`${isHovered? 'text-white':'text-gray-500'} text-xs duration-500`}>{work.type}</p>
        </div>
        {/* Image */}
        <img src={work.img} alt='' className={`${isHovered? 'h-full' : 'h-72'} w-full rounded-lg object-cover object-bottom absolute z-0 bottom-0 duration-500`} />
        <div className={`${isHovered? 'opacity-100 h-full' : 'opacity-0 h-72'} bg-gray-900 bg-opacity-50 w-full bottom-0 rounded-lg z-0 duration-500 absolute flex flex-col items-center justify-end p-3 text-white`}>
          <div className={`${isHovered? 'translate-y-0': 'translate-y-2'} w-full duration-500`}>
            {work.is_coming_soon?
              <button className='buttonDark w-full mb-2 text-sm' disabled>Coming Soon</button>
              :
              <Link href={`/works/casestudy/${work.id}`}><a>
                <button className='buttonDark w-full mb-2 text-sm'>View Work</button>
              </a></Link>
            }
            <div className='flex justify-between w-full'>
              <p className='text-xs font-normal'>{work.coordinates}</p>
              <p className='text-xs font-normal'>{work.number}</p>
            </div>
          </div>
        </div>
        <div className='h-72 w-full' />
      </div>
  )
}