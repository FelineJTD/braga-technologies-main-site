/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/navbar';
import JobsSection from '../../components/section-jobs';
// import Team from '../../components/section-team';

// Data
import { 
  Benefits, 
  Jobs, 
  Testimonials, 
  LastSectionImage 
} from '../../config/cfg-career';

export default function Career() {
  const [currTestimonialIdx, setCurrTestimonialIdx] = useState(0);

  return (
    <div>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <Navbar color='light' />
      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBGFullGridSmPadding'>
          <p className='bold mb-4'>00.</p>
          <p className='col-start-2 col-span-4 mb-4'>Company / <b>Career</b></p>
          <h1 className='row-start-2 lg:col-start-4 col-span-6 mb-6'>Together, Creating an Enormous <u>Impact.</u></h1>
          <p className='row-start-3 lg:col-start-2 col-span-2'><b>Work with Us</b></p>
          <p className='row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-4 col-span-4 lg:col-span-3 mb-6'>Be a creator. Own what you create, and help others to solve their problems.</p>
          <p className='row-start-4 lg:row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-7 col-span-4 lg:col-span-3 mb-6'>Interested in doing so? Find which team that suits you well.</p>
          {/* <Team departments={Departments} page='career' /> */}
        </section>

        {/* THOUGHTS ON BRAGA */}
        <section className='whiteBGFullGridSmPadding mb-12'>
            <p className='lg:col-start-2 lg:col-span-3 col-span-6 mb-4'><b>Thoughts on Braga</b></p>
            <div className='dividerBlack lg:col-start-2 lg:col-span-10 col-span-6 w-full mb-10' />

            {/* Left */}
            { Testimonials.map((testimonial, index) => (
              <div key={index} className={`${index === currTestimonialIdx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12 motion-reduce:translate-y-0'} row-start-3 col-start-1 lg:col-start-2 col-span-4 relative z-10 mt-8 text-gray-800 md:text-gray-50 duration-200 ease-in w-3/4`}>
                <p className='bg-[url("/company/quote_bg_top.svg")] bg-cover bg-no-repeat italicw-full aspect-[278/30] pt-4 px-6 text-sm hidden md:block'>Quote</p>
                <h2 className='bg-transparent md:bg-primary text-2xl md:text-4xl pt-0 md:pt-6 px-0 md:px-6'>{testimonial.headline}</h2>
                <div className='bg-[url("/company/quote_bg_bottom.svg")] bg-no-repeat w-full aspect-[278/60] hidden md:block' />
              </div>
            )) }
            { Testimonials.map((testimonial, index) => (
              <div key= {index} className={`${index === currTestimonialIdx ? 'max-h-full z-10' : 'max-h-0 motion-reduce:max-h-full delay-300 z-0'} row-start-3 col-start-3 lg:col-start-4 col-span-4 aspect-[380/460] w-full bg-gray-500 relative z-0 rounded-xl duration-300 overflow-hidden`}>
                <Image src={testimonial.img} alt={`Photo of ${testimonial.name}`} layout='fill' objectFit='cover' objectPosition='center' placeholder='blur' />
              </div>
            )) }

            {/* Right */}
            <div className='lg:col-start-8 lg:col-span-4 col-span-6 flex flex-col justify-between items-start lg:h-full h-[24rem] relative mt-4 lg:mt-0'>
              <Image src='/company/quotation.svg' alt='"' width={26} height={20} />
              { Testimonials.map((testimonial, index) => (
                <p key={index} className={`${index === currTestimonialIdx ? 'relative opacity-100 translate-y-0' : 'absolute opacity-0 translate-y-6 motion-reduce:translate-y-0'} mt-4 flex-grow lg:w-3/4 text-gray-800 duration-500 ease-in mb-4`}>
                  {testimonial.desc}
                </p>
              )) }
              <div className='flex-grow w-full' />
              { Testimonials.map((testimonial, index) => (
                <div key={index} className={`${index === currTestimonialIdx ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-6 motion-reduce:translate-y-0 absolute bottom-16 '} duration-500 ease-in`}>
                  <p className='md:text-lg text-gray-800'><b>{testimonial.name}</b></p>
                  <p className='text-xs md:text-sm text-gray-600'><i>{testimonial.title}</i></p>
                </div>
              )) }
              <div className='dividerBlack w-full mt-6' />
              {/* TODO: change to icon */}
              <div className='col-start-2 col-span-11 -ml-4 mt-2 relative z-30'>
                <button 
                  className='border-0 hover:text-primary duration-200' 
                  onClick={() => setCurrTestimonialIdx((currTestimonialIdx - 1 + Testimonials.length)%Testimonials.length)}
                >
                  &lt;
                </button>
                <button 
                  className='border-0 hover:text-primary duration-200'
                  onClick={() => setCurrTestimonialIdx((currTestimonialIdx + 1)%Testimonials.length)}
                >
                  &gt;
                </button>
              </div>
            </div>
          </section>

        <section className='whiteBGSmPadding'>
          <p className='col-start-2 col-span-2'><b>Perks & Amenities</b></p>
          <h2 className='col-span-3 mb-3'>We&apos;ve got your back, always.</h2>
          <p className='col-span-3 text-gray-600 mb-10'>We&apos;re creating an environment to keep everyone stand out with their talents and be able to cherish each and every unique qualities that we have.</p>
          <div className='col-start-4 col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6'>
            {Benefits.map((benefit, index) => (
              <div key={index}>
                <div className='h-16 w-16 rounded-lg bg-gray-100/30 mb-2'>
                  <Image src={benefit.img} alt='' height={64} width={64}/>
                </div>
                <h5 className='mb-2'>{benefit.title}</h5>
                <p className='text-sm text-gray-700'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

       <JobsSection jobs={Jobs} />

        <section className='px-6 py-14 lg:px-[10%] h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-end justify-end' style={{backgroundImage: `url(${LastSectionImage})`}}>
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
