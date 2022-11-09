/* eslint-disable @next/next/no-img-element */
import Lottie from 'lottie-react'
import Image from 'next/image'

export default function CardSolution({solution, isDarkMode=false}) {
  return (
    <div className={`group snap-start lg:snap-none flex flex-col space-y-2 w-full rounded-lg p-3 border-2 ${isDarkMode? 'border-gray-600' : 'border-gray-200'}`}>
      <div className={`${solution.animation?'bg-gray-100':'aspect-[287/160]'} relative w-full rounded-md overflow-hidden`}>
        {solution.animation && <Lottie animationData={solution.animation} loop />}
        {solution.img && 
          <div className='relative group-hover:scale-110 duration-300 ease-in-out w-full h-full'>
            <Image src={solution.img} alt='' layout='fill' placeholder='blur' />
          </div>
        }
      </div>
      <h5>{solution.title}</h5>
      <p className={`${isDarkMode? 'text-gray-300' : 'text-gray-500'} text-sm`}>{solution.desc}</p>
      <div className='min-h-[40px] flex-grow' />
      <div className='flex justify-between justify-self-end items-center space-x-3'>
        <p className={`${isDarkMode? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'} whitespace-nowrap rounded-3xl py-2 px-3 text-xs`}>{solution.type}</p>
        {!solution.comingSoon &&
          <a href={solution.link || '#'} target="_blank" rel='noreferrer noopener'>
            <button className={`border-[1px] ${isDarkMode? 'border-white enabled:hover:bg-white enabled:hover:text-black' : 'border-black enabled:hover:bg-black enabled:hover:text-white'} disabled:opacity-30 duration-300 whitespace-nowrap`}>Visit &nbsp;&nbsp; &gt;</button>
          </a>
        }
      </div>
    </div>
  )
}
