/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { Logos } from "../config/cfg-partner-logos";

export default function PartnerLogos() {
  return (
    <section className='w-full overflow-hidden'>
      <div className='animate-scrollLeft py-6 flex justify-around items-center space-x-3 md:space-x-12 bg-gray-50 relative overflow-auto z-10 min-w-fit hover:[animation-play-state:paused]'>
        <div className='flex justify-around w-1/2 gap-12'>
          {Logos.map((logo, index) => (
            <div key={index}>
              <img
                src={logo}
                alt='Partner Logo'
                className='h-10 object-contain max-w-none'
              />
            </div>
          ))}
        </div>
        <div className='flex justify-around w-1/2 gap-12'>
          {Logos.map((logo, index) => (
            <div key={index}>
              <img
                src={logo}
                alt='Partner Logo'
                className='h-10 object-contain max-w-none'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
