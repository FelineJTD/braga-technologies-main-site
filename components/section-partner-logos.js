import Image from 'next/image'
import { Logos } from '../config/cfg-partner-logos'

export default function PartnerLogos() {
  return (
    <section className='px-6 xl:px-[10%] py-6 flex justify-center items-center w-full space-x-3 md:space-x-12'>
      {
        Logos.map((logo, index) => (
          <div key={index}>
            <Image
              src={logo}
              alt='Partner Logo'
              className='mx-auto'
            />
          </div>
        ))
      }
    </section>
  )
}
