import Image from 'next/image'
// Partner Logos
import LogoA from '../assets/images/partner-logos/logo-a.png'
import LogoB from '../assets/images/partner-logos/logo-b.png'
import LogoC from '../assets/images/partner-logos/logo-c.png'
import LogoD from '../assets/images/partner-logos/logo-d.png'
import LogoE from '../assets/images/partner-logos/logo-e.png'
import LogoF from '../assets/images/partner-logos/logo-f.png'

export default function PartnerLogos() {
  const partnerLogos = [LogoA, LogoB, LogoC, LogoD, LogoE, LogoF]

  return (
    <section className='px-6 xl:px-[10%] py-6 flex justify-center items-center w-full space-x-3 md:space-x-12'>
      {
        partnerLogos.map((logo, index) => (
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
