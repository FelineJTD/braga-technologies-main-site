/* eslint-disable @next/next/no-img-element */
import TeamIcon from '../assets/images/company/team-icon';
import { useState } from 'react';

export default function CardTeam({ staff, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`w-full rounded-lg border-[1px] border-gray-500 relative flex flex-col h-[21rem] ${className}`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      {/* Image */}
      <img src={staff.img} alt='' className={`${isHovered? 'h-full' : 'h-60'} w-full rounded-lg object-cover object-top absolute z-0 top-0 duration-500`} />
      <div className={`${isHovered? 'opacity-100 h-full' : 'opacity-0 h-60'} bg-gray-900 bg-opacity-50 w-full top-0 rounded-lg z-0 duration-500 absolute flex flex-col items-center justify-start p-3 text-white`}>
        <div className={`${isHovered? 'translate-y-0': '-translate-y-2'} w-full duration-500`}>
          <div className='flex justify-between w-full space-x-3'>
            <p className='text-xs font-normal'>{staff.desc}</p>
            <p className='text-xs font-normal'>About</p>
          </div>
        </div>
      </div>
      <div className='h-60 w-full' />
      {/* Title */}
      <div className={`${isHovered? 'translate-y-0' : 'translate-y-4'} p-3 relative z-10 bottom-0 justify-self-end duration-500`}>
        <TeamIcon className={`${isHovered? 'fill-white' : 'fill-gray-500'} duration-500`} />
        <h6 className={`${isHovered? 'text-white':'text-gray-700'} my-1 duration-500`}>{staff.name}</h6>
        <p className={`${isHovered? 'text-white':'text-gray-500'} mb-1 text-xs duration-500`}>{staff.position}</p>
        <div className={`${isHovered? 'visible' : 'select-none cursor-default invisible'} flex justify-between`}>
          <a href={staff.linkedin} className='text-white text-xs'>Linkedin</a>
          <a href={staff.social} className='text-white text-xs'>Social Link</a>
        </div>
      </div>
    </div>
  )
}