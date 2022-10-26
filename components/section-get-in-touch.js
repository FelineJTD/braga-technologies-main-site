/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Chip from './cmp-chip'
import Image from 'next/image'
import Link from 'next/link';
import { Img } from '../config/cfg-get-in-touch';

export default function GetInTouch({number}) {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  useEffect(() => {
    if (!isVisible1 && !isVisible2) {
      setTimeout(() => {
        setIsVisible1(true);
        setIsVisible2(true);
      }, 1000);
    }
  }, [isVisible1, isVisible2]);

  return (
    <section className='whiteBG bg-gradient-to-b from-gray-100 to-gray-100 bg-[0_100%] [background-size:100%_96px] md:[background-size:100%_50%] bg-no-repeat'>
      <p className='bold mb-4 text-gray-800'>{number}</p>
      <div className='col-span-4'>
        <p className='mb-4 bold text-gray-800'>Get in Touch</p>
        <h2 className='mb-4'>Start Mapping Your Future, Today.</h2>
      </div>
      <p className='col-span-3 col-start-7 lg:self-end mb-4 text-gray-600'>Find out how you can maximize the value from data and strengthen your decision making.</p>
      <Link href='/contact'><a className='flex justify-end col-span-2 lg:self-end mb-4'>
        <button className='buttonLight'>Contact Us &nbsp; &gt;</button>
      </a></Link>


      <div className='relative col-start-2 col-span-10 aspect-[312/156] w-full my-6'>
        <Image src={Img} alt='' layout='fill' objectFit='cover' objectPosition='center' placeholder='blur' style={{ borderRadius: '0.75rem' }}/>
        <Chip
          isVisible={isVisible1}
          setIsVisible={setIsVisible1}
          icon={require('../public/homepage/chip-icons/icon-location.svg')}
          text='Sensor_G01'
          color='primary'
          className='fleet1'
        />
        <Chip
          isVisible={isVisible2}
          setIsVisible={setIsVisible2}
          icon={require('../public/homepage/chip-icons/icon-location.svg')}
          text='Sensor_A12'
          color='primary'
          className='fleet2'
        />

      </div>
    </section>
  )
}
