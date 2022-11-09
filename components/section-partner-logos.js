import Image from 'next/image'
import { Logos } from '../config/cfg-partner-logos'

export default function PartnerLogos() {
  return (
    <section className='w-full overflow-hidden'>
      <div className='animate-scrollLeft px-6 xl:px-[10%] py-6 flex justify-around items-center space-x-3 md:space-x-12 bg-gray-50 relative z-10 overflow-auto w-fit hover:[animation-play-state:paused]'>
        <div className='flex justify-around w-1/2 gap-12'>
          {
            Logos.map((logo, index) => (
              <div key={index}>
                <Image
                  src={logo}
                  alt='Partner Logo'
                  height={96}
                  layout='fixed'
                  objectFit='contain'
                />
              </div>
            ))
          }
        </div>
        <div className='flex justify-around w-1/2 gap-12'>
          {
            Logos.map((logo, index) => (
              <div key={index}>
                <Image
                  src={logo}
                  alt='Partner Logo'
                  height={96}
                  layout='fixed'
                  objectFit='contain'
                />
              </div>
            ))
          }
        </div>
        
      </div>
    </section>
  )
}