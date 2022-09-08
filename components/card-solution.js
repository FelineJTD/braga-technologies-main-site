import Lottie from 'lottie-react'
import Image from 'next/image'

export default function CardSolution({solution, isDarkMode=false}) {
  return (
    <div className={`snap-start flex flex-col space-y-2 w-full rounded-lg p-3 border-2 ${isDarkMode? 'border-gray-600' : 'border-gray-200'}`}>
      <div className='relative bg-gray-100 w-full rounded-lg'>
        {solution.animation && <Lottie animationData={solution.animation} loop />}
        {solution.img && <Image src={solution.img} alt='' layout='fill' />}
      </div>
      <h5>{solution.title}</h5>
      <p className='text-sm'>{solution.desc}</p>
      <div className='min-h-[40px] flex-grow' />
      <div className='flex justify-between justify-self-end items-center space-x-3'>
        <a href={solution.link || '#'} target="_blank" rel='noreferrer noopener'>
          <button className={`border-[1px] ${isDarkMode? 'border-white enabled:hover:bg-white enabled:hover:text-black' : 'border-black enabled:hover:bg-black enabled:hover:text-white'} disabled:opacity-30 duration-300 whitespace-nowrap`} disabled={solution.comingSoon || false}>{solution.comingSoon? 'Coming Soon' : 'See Solution'}</button>
        </a>
        <p className='whitespace-nowrap'>{solution.type}</p>
      </div>
    </div>
  )
}
