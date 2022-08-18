/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import TeamIcon from '../../assets/images/company/team-icon';
import { useState } from 'react';

export default function Culture() {
  const Departments = ['Management', 'Design', 'Development', 'Technology', 'Operation', 'General Affairs', 'Others'];
  const lastSectionImage = "https://picsum.photos/1080/1920";
  const [isHovered, setIsHovered] = useState(false);

  const Team = [
    {
      name: 'Gunawan Wibisono',
      position: 'IoT Engineer',
      dept: 'Management',
      desc: 'When she’s not thinking about taxes and quotations, she’s thinking about which Indonesia’s mountain peak or sunny beach to walk on next.',
      linkedin: 'https://www.linkedin.com/in/gunawan-wibisono-a9a8b917/',
      social: 'https://www.instagram.com/gunawan-wibisono-a9a8b917/',
      img: 'https://picsum.photos/112/112',
    },
    {
      name: 'Gunawan Wibisono',
      position: 'IoT Engineer',
      dept: 'Management',
      desc: 'When she’s not thinking about taxes and quotations, she’s thinking about which Indonesia’s mountain peak or sunny beach to walk on next.',
      linkedin: 'https://www.linkedin.com/in/gunawan-wibisono-a9a8b917/',
      social: 'https://www.instagram.com/gunawan-wibisono-a9a8b917/',
      img: 'https://picsum.photos/112/112',
    },
    {
      name: 'Gunawan Wibisono',
      position: 'IoT Engineer',
      dept: 'Management',
      desc: 'When she’s not thinking about taxes and quotations, she’s thinking about which Indonesia’s mountain peak or sunny beach to walk on next.',
      linkedin: 'https://www.linkedin.com/in/gunawan-wibisono-a9a8b917/',
      social: 'https://www.instagram.com/gunawan-wibisono-a9a8b917/',
      img: 'https://picsum.photos/112/112',
    },
    {
      name: 'Gunawan Wibisono',
      position: 'IoT Engineer',
      dept: 'Management',
      desc: 'When she’s not thinking about taxes and quotations, she’s thinking about which Indonesia’s mountain peak or sunny beach to walk on next.',
      linkedin: 'https://www.linkedin.com/in/gunawan-wibisono-a9a8b917/',
      social: 'https://www.instagram.com/gunawan-wibisono-a9a8b917/',
      img: 'https://picsum.photos/112/112',
    },
    {
      name: 'Gunawan Wibisono',
      position: 'IoT Engineer',
      dept: 'Management',
      desc: 'When she’s not thinking about taxes and quotations, she’s thinking about which Indonesia’s mountain peak or sunny beach to walk on next.',
      linkedin: 'https://www.linkedin.com/in/gunawan-wibisono-a9a8b917/',
      social: 'https://www.instagram.com/gunawan-wibisono-a9a8b917/',
      img: 'https://picsum.photos/112/112',
    },
    {
      name: 'Gunawan Wibisono',
      position: 'IoT Engineer',
      dept: 'Design',
      desc: 'When she’s not thinking about taxes and quotations, she’s thinking about which Indonesia’s mountain peak or sunny beach to walk on next.',
      linkedin: 'https://www.linkedin.com/in/gunawan-wibisono-a9a8b917/',
      social: 'https://www.instagram.com/gunawan-wibisono-a9a8b917/',
      img: 'https://picsum.photos/112/112',
    },
  ]

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBG'>
          <p className='bold mb-4'>00.</p>
          <p className='col-span-4 mb-4'>Company / <b>Culture</b></p>
          <h1 className='row-start-2 col-start-4 col-span-6 mb-6'>Locate your <u>uncharted</u> passion here.</h1>
          <p className='row-start-3 col-start-2 col-span-2'>Values</p>
          <p className='row-start-3 text-sm text-gray-600 col-span-3'>We&apos;re creating an environment to keep everyone standout with their talents and be able to cherish each and every unique qualities that we have.</p>
          <p className='row-start-3 text-sm text-gray-600 col-span-3'>Dare to act, own the work, be the truest you. Seizing opportunities daily, that’s how we do.</p>
        </section>

        {/* 01 */}
        <section className='whiteBG'>
          <p className='bold mb-4'>01.</p>
          <div className='col-span-4'>
            <p className='mb-4 bold'>Our Team</p>
            <h2>Here, our difference makes a difference.</h2>
          </div>
          <p className='col-start-7 col-span-5 self-end -translate-y-2'>We&apos;re creating an environment to keep everyone standout with their talents and be able to cherish each and every unique qualities that we have.</p>

          <div className='col-start-2 col-span-10 w-full dividerBlack mt-10 mb-3' />

          <div className='col-start-2 col-span-10 flex justify-between'>
            { Departments.map((department, index) => (
              <button key={index} className='buttonPlain font-normal'>{department}</button>
            )) }
          </div>

          <div className='col-start-2 col-span-10 grid grid-cols-4 gap-4'>
            <div className='rounded-lg border-2 border-gray-300'>
              <div className='bg-gray-500 w-full h-48'/>
              <p className='text-lg bold mb-1'>Gunawan Wibisono</p>
              <p className='text-xs text-gray-500'>IoT Engineer</p>
            </div>
          
          { Team.map((staff, index) => (
            <div key={index} className={`w-full rounded-lg border-[1px] border-gray-500 relative`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
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
              <div className='p-3 relative z-10 bottom-0'>
                <TeamIcon className={`${isHovered? 'fill-white' : 'fill-gray-500'} duration-500`} />
                <h6 className={`${isHovered? 'text-white':'text-gray-700'} my-1 duration-500`}>{staff.name}</h6>
                <p className={`${isHovered? 'text-white':'text-gray-500'} mb-1 text-xs duration-500`}>{staff.position}</p>
                { isHovered && (
                  <div className='flex justify-between'>
                    <a href={staff.linkedin} className='text-white text-xs'>Linkedin</a>
                    <a href={staff.social} className='text-white text-xs'>Social Link</a>
                  </div>
                ) }
              </div>
            </div>
          ))}
          </div>
        </section>

        <section className='px-6 py-14 lg:px-[10%] h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-end justify-end' style={{backgroundImage: `url(${lastSectionImage})`}}>
          <div className='w-full md:w-1/2 md:mb-4 flex md:flex-col items-end'>
            <div className='flex lg:flex-row flex-col lg:space-x-4 bg-gray-50 rounded-t-2xl rounded-bl-2xl p-6'>
              <p className='bold mb-4'>01.</p>
              <div>
                <p className='mb-4 bold'>Work at Braga</p>
                <h3>Location Intelligence meets <u>your</u> uniquity creates something new.</h3>
              </div>
            </div>
            <img src='/company/corner.svg' alt='' className='md:-mt-0.5 md:-mr-0.5 select-none rotate-180 md:rotate-0 mr-4 -mb-0.5' />
          </div>
          <div className='w-full md:w-1/2 flex md:flex-col'>
            <div className='flex items-start md:items-end md:space-x-10'>
              <img src='/company/corner.svg' alt='' className='md:-mb-0.5 md:-ml-0.5 select-none md:rotate-180 rotate-0 min-w-[24px] ml-4 -mt-0.5' />
              <img src='/company/additional.svg' alt='' className='-mb-0.5 -ml-0.5 select-none hidden md:block' />
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-4 bg-gray-50 rounded-b-2xl rounded-tr-2xl p-6 lg:items-center justify-between'>
              <p className='text-sm mb-3 lg:mb-0'>Being part of Braga means finding yourself in a unique position. Seize the possibility to work on challanges that impacts all over the world.</p>
              <Link href='/company/career'><a>
                <button className='buttonLight w-2/3 lg:w-auto whitespace-nowrap'>Grow With Us &gt;</button>
              </a></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
