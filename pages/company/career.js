/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Career() {
  const Departments = [{
      title: 'Management', 
      image: 'https://picsum.photos/200/300',
      desc: 'A team of Front End, Back End, Data Scientists, and Engineers alike. We implement and facilitate the flow of information and handle product developments and technical issues.',
    }, {
      title: 'Design', 
      image: 'https://picsum.photos/200/400',
      desc: 'A team of Designers, Developers, and Product Managers alike. We work together to create beautiful, functional, and user-friendly products.',
    }, {
      title:'Development',
      image: 'https://picsum.photos/200/200',
      desc: 'A team of Developers at work. We ensure that our products are functional and user-friendly.',
    }, {
      title: 'Technology',
      image: 'https://picsum.photos/200/500',
      desc: 'A team of Front End, Back End, Data Scientists, and Engineers alike. We implement and facilitate the flow of information and handle product developments and technical issues.',
    }, {
      title: 'Operation',
      image: 'https://picsum.photos/400/300',
      desc: 'A team of Front End, Back End, Data Scientists, and Engineers alike. We implement and facilitate the flow of information and handle product developments and technical issues.',
    }, {
      title: 'General Affairs',
      image: 'https://picsum.photos/200/600',
      desc: 'A team of Front End, Back End, Data Scientists, and Engineers alike. We implement and facilitate the flow of information and handle product developments and technical issues.',
    }, {
      title: 'Others',
      image: 'https://picsum.photos/200/100',
      desc: 'A team of Front End, Back End, Data Scientists, and Engineers alike. We implement and facilitate the flow of information and handle product developments and technical issues.',
    }];

  const Benefits = [
    {
      title: 'Paid Leaves',
      description: 'Take the benefit of taking day off regardless of your needs.',
    },
    {
      title: 'Stuctured Flexible Hours',
      description: 'Set your prefered working hours while keeping your work-life boundaries with building-blocks system!',
    },
    {
      title: 'Healthcare',
      description: 'We look after your physical and mental health through uur self-managed health insurance system.',
    },
    {
      title: 'Office Lunch',
      description: 'Hungry tummy won’t distract you, buddy, while you work in-office on working days!',
    },
    {
      title: 'Financial Security',
      description: 'Our Soft Loan with, no interest, 0% fee and adjustable installment migh help you in times of needs.',
    },
    {
      title: 'Self Development',
      description: 'Embark in career paths, learning materials, and our self-development activities.',
    },
    {
      title: 'Family Frendly',
      description: 'For the newlyweds to moms and dads, enjoy our familial allowance, benefits and support!',
    },
    {
      title: 'Have Fun!',
      description: 'Recreational activities like games and trips across the beautiful city-of-flowers, what’s not to love?!',
    },
  ];

  const Jobs = [
    {
      title: 'Graphic Designer',
      type: 'Full Time',
      workplace: 'Remote',
      location: 'SEA',
      description: 'If you are looking the opportunity to make an impact by sharing your passion and make a better life for others, this one is match for you!',
      img: 'https://picsum.photos/112/112',
    },
    {
      title: 'Software Engineer',
      type: 'Full Time',
      workplace: 'Hybrid',
      location: 'Indonesia',
      description: 'If you are looking the opportunity to make an impact by sharing your passion and make a better life for others, this one is match for you!',
      img: 'https://picsum.photos/200/200',
    },
    {
      title: 'Software Engineer',
      type: 'Part Time',
      workplace: 'On Site',
      location: 'Indonesia',
      description: 'If you are looking the opportunity to make an impact by sharing your passion and make a better life for others, this one is match for you!',
      img: 'https://picsum.photos/200/200',
    },
  ];

  const lastSectionImage = "https://picsum.photos/1080/1920";

  const [selectedDepartmentIdx, setSelectedDepartmentIdx] = useState(0);
  const [departmentLength, _setDepartmentLength] = useState(Departments.length);

  const deptRef = useRef([]);
  const deptContainer = useRef(null);
  
  useEffect(() => {
    deptRef.current = deptRef.current.slice(0, departmentLength);
  }, [departmentLength]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDepartmentIdx((selectedDepartmentIdx + 1)%departmentLength);
    }, 5000);
    return () => clearInterval(interval);
  }, [departmentLength, selectedDepartmentIdx]);

  useEffect(() => {
    const position = deptRef.current[selectedDepartmentIdx].offsetLeft;
    console.log(deptContainer.current.offsetWidth);
    deptContainer.current.scrollTo({
      left: position - deptContainer.current.clientWidth/2,
      behavior: 'smooth',
    });
  }, [selectedDepartmentIdx]);

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBGFullGrid'>
          <p className='bold mb-4'>00.</p>
          <p className='col-start-2 col-span-4 mb-4'>Company / <b>Career</b></p>
          <h1 className='row-start-2 lg:col-start-4 col-span-6 mb-6'>Together, Creating an Enormous <u>Impact.</u></h1>
          <p className='row-start-3 lg:col-start-2 col-span-2'>Work with Us</p>
          <p className='row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-4 col-span-4 lg:col-span-3 mb-6'>Be a creator. Own what you create, and help others to solve their problems. Interested in doing so? Find which team that suits you well.</p>
          <p className='row-start-4 lg:row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-7 col-span-4 lg:col-span-3'>Be a creator. Own what you create, and help others to solve their problems. Interested in doing so? Find which team that suits you well.</p>

          {/* Team Overview */}
          <div className='col-start-4 col-span-6 w-full dividerBlack' />
          <div ref={deptContainer} className='col-start-4 col-span-6 w-full flex space-x-3 justify-between overflow-y-auto pb-3 relative no-scrollbar'>
            { Departments.map((department, index) => (
              <button 
                ref={el => deptRef.current[index] = el} key={index} 
                className={`${selectedDepartmentIdx === index ? 'buttonSelectionSelected animate-timeout' : 'buttonSelection'} font-normal relative min-w-[8rem]`} 
                // style={{
                //   backgroundSize: selectedDepartmentIdx === index ? '100% 2px, 100% 1px' : '0% 2px, 100% 1px',
                // }}
                onClick={() => setSelectedDepartmentIdx(index)}
              >{department.title}</button>
            )) }
          </div>

          <div className='col-start-4 col-span-6 w-ful relative mb-8'>
            { Departments.map((department, index) => (
              <img key={index} src={department.image} alt={department.title} className={` 
                ${index === selectedDepartmentIdx ? 'opacity-100 z-20' : 'opacity-50 z-10'} 
                w-full aspect-[600/260] mt-4 rounded-lg object-cover animate-fade-in absolute duration-500`} />
            )) }
            <div className='w-full relative aspect-[600/260] z-0 mt-8' />
            <p className='text-xs text-gray-600'>{Departments[selectedDepartmentIdx].desc}</p>
          </div>

          <div className='divider col-span-6 lg:col-start-2 lg:col-span-10' />
        </section>

        <section className='whiteBG'>
          <p className='col-start-2 col-span-2'>Perks & Amenities</p>
          <h2 className='col-span-3 mb-3'>We&apos;ve got your back, always.</h2>
          <p className='col-span-3 text-gray-600 mb-10'>We&apos;re creating an environment to keep everyone stand out with their talents and be able to cherish each and every unique qualities that we have.</p>
          <div className='col-start-4 col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6'>
            {Benefits.map((benefit, index) => (
              <div key={index}>
                <div className='h-12 w-12 rounded-lg bg-gray-200 mb-2'/>
                <h5 className='mb-2'>{benefit.title}</h5>
                <p className='text-sm text-gray-700'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='whiteBG'>
          <div className='col-start-2 col-span-4'>
            <p className='mb-4'>Work at Braga</p>
            <h2>Explore the career paths.</h2>
          </div>
          <p className='col-start-7 col-span-4 self-end'>Help us to solve the world’s problems through maps, and You. Interested? Find your forte below!</p>
          <button className='self-end border-gray-600 hover:bg-gray-200 duration-200 w-12 h-10 p-0 justify-self-end'>
            <Image src='/navbar/ic-arrow-left.svg' alt='drop down icon' width={20} height={20} />
          </button>
          <div className='flex space-x-3 py-3 col-start-2 col-span-10 w-full border-y-[1px] border-gray-600 my-10'>
            <button className='buttonFilter font-normal fontVarNormal'>Type</button>
            <button className='buttonFilter font-normal fontVarNormal'>Location</button>
            <div className='border-r-[1px] border-gray-600 h-full' />
          </div>
          <div className='col-start-2 col-span-10'>
            {Jobs.map((job, index) => (
              <div key={index} className='flex space-x-4 w-full mb-6 p-3 rounded-lg border-[1px] border-gray-300 hover:border-gray-500 hover:shadow-md hover:bg-white duration-200 cursor-pointer'>
                <img src={job.img} alt='' className='h-full w-28 rounded-lg object-cover' />
                <div className='flex flex-col space-y-1'>
                  <h4>{job.title}</h4>
                  <p>{job.type} - {job.workplace} - {job.location}</p>
                  <div className='border-t-[1px] border-gray-300'/>
                  <p>{job.description}</p>
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
                <h3>You&apos;re the accumulation of the people that you collaborate with.</h3>
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
              <Link href='/company/culture'><a>
                <button className='buttonLight w-2/3 lg:w-auto whitespace-nowrap'>Our Culture &gt;</button>
              </a></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
