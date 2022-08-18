/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import CardTeam from '../../components/card-team';

export default function Culture() {
  const Departments = ['Management', 'Design', 'Development', 'Technology', 'Operation', 'General Affairs', 'Others'];
  const lastSectionImage = "https://picsum.photos/1080/1920";

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

  const [selectedDepartment, setSelectedDepartment] = useState(Departments[0]);

  const [fullTeam, setFullTeam] = useState(Team);
  const [currTeam, setCurrTeam] = useState(Team);

  useEffect(() => {
    setCurrTeam(fullTeam.filter(team => team.dept === selectedDepartment));
  }, [fullTeam, selectedDepartment]);

  const [isScrollArea, setIsScrollArea] = useState(false);
  const scrollAreaRef = useRef();
  useEffect(() => {
    const onScroll = () => {
      const top = scrollAreaRef.current.getBoundingClientRect().top;
      if (top < 50) {
        setIsScrollArea(true);
      } else {
        setIsScrollArea(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

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

        <section ref={scrollAreaRef} className={`defaultGrid py-14 text-gray-50 bg-gray-900 ${isScrollArea? 'mt-0 mx-0 px-6 xl:px-[calc(10%+1.5rem)]' : 'mt-12 mx-6 rounded-2xl px-0 xl:px-[10%]'} duration-500`}>
          <div className='col-start-2 col-span-3 sticky top-14'>
            <p className='bold mb-4'>Culture Manifesto</p>
            <h2>Only good <u>well-being</u> leads to <i>well-working.</i></h2>
          </div>
          <p className='col-start-9 col-span-3 text-gray-200 mt-8 mb-[44vh] text-sm'>More than our work, we are valuable as a person. As much as you do your best at work, We are committed at prioritizing and improving your well-being.</p>
          <p className='col-start-9 col-span-3 text-gray-200 mt-8 bold mb-[44vh]'>With Braga Technologies, navigate your passion and expertise here together.</p>
          <p className='col-start-9 col-span-3 text-gray-200 mt-8 bold'>Braga’s living systems, and playbook are designed to ensure you have a wholly impeccable experience here.</p>
          <button className='col-start-9 col-span-2 text-gray-200 mt-8 bold buttonDark'>Grow With Us &gt;</button>
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
              <button key={index} className='buttonPlain font-normal' onClick={() => setSelectedDepartment(department)}>{department}</button>
            )) }
          </div>

          <div className='col-start-2 col-span-10 grid grid-cols-4 gap-4 my-6'>          
            { currTeam.map((staff, index) => (
              <CardTeam key={index} staff={staff} />
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
