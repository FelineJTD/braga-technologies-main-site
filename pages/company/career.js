/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import Navbar from "../../components/navbar";
import JobsSection from "../../components/section-jobs";
// import Team from '../../components/section-team';

// Data
import {
  Benefits,
  Jobs,
  Testimonials,
  LastSectionImage,
} from "../../config/cfg-career";

export default function Career() {
  const [currTestimonialIdx, setCurrTestimonialIdx] = useState(0);

  return (
    <div>
      <Script
        async
        defer
        data-website-id='9a5ee667-ae45-49bd-bdef-07cd5ec8124d'
        src='https://stats.braga.co.id/umami.js'
        strategy='worker'
      ></Script>
      <Head>
        <title>BragaTechnologies</title>
        <meta
          name='description'
          content='Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more.'
          key='description'
        />
        <meta
          name='keywords'
          content='Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services'
          key='keywords'
        />
      </Head>

      <Navbar color='light' />
      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBGFullGridSmPadding'>
          <p className='bold mb-4'>00.</p>
          <p className='col-start-2 col-span-4 mb-4'>
            Company / <b>Career</b>
          </p>
          <h1 className='row-start-2 lg:col-start-4 col-span-6 mb-6'>
            Together, Creating an Enormous <u>Impact.</u>
          </h1>
          <p className='row-start-3 lg:col-start-2 col-span-2'>
            <b>Work with Us</b>
          </p>
          <p className='row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-4 col-span-4 lg:col-span-3'>
            Be a creator. Own what you create, and help others to solve their
            problems.
          </p>
          <p className='row-start-4 lg:row-start-3 text-xs md:text-sm text-gray-600 col-start-3 lg:col-start-7 col-span-4 lg:col-span-3'>
            Interested in doing so? Find which team that suits you well.
          </p>
          {/* <Team departments={Departments} page='career' /> */}

          <div className='divider col-start-1 lg:col-start-4 col-span-6' />

          {/* THOUGHTS ON BRAGA */}

          {/* Left */}
          <div className='relative w-full min-h-[20rem] col-start-1 col-span-6 lg:col-start-4 md:col-span-3 mt-4'>
            <div className='relative w-full h-full'>
              {Testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${
                    index === currTestimonialIdx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-6 motion-reduce:translate-y-0"
                  } z-10 text-gray-800 md:text-gray-50 duration-300 absolute`}
                >
                  <div className='flex justify-between mb-4'>
                    <p className='md:text-xs text-gray-600'>
                      <b>{testimonial.title}</b>
                    </p>
                    {/* <p className='md:text-xs text-gray-400'><i>{testimonial.title}</i></p> */}
                  </div>
                  <h2 className='text-primary text-3xl'>
                    {testimonial.headline}
                  </h2>
                  <p className='mt-4 flex-grow text-gray-600 duration-500 ease-in mb-4 text-sm'>
                    {testimonial.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className='col-start-1 col-span-6 lg:col-start-7 md:col-start-4 md:col-span-3 relative w-full aspect-[380/460] mt-4'>
            {Testimonials.map((testimonial, index) => {
              console.log(testimonial);
              return (
                <div
                  key={index}
                  className={`${
                    index === currTestimonialIdx
                      ? "opacity-100 z-10"
                      : "opacity-0 motion-reduce:opacity-100 delay-300 z-0"
                  } w-full z-0 duration-300 overflow-hidden absolute col-start-3 lg:col-start-7 col-span-3`}
                >
                  <div className='relative aspect-[380/460] mr-4 rounded-xl'>
                    <img
                      src={testimonial.img}
                      alt={`Photo of ${testimonial.name}`}
                      className='object-cover object-center w-full h-full rounded-xl'
                    />
                  </div>
                  <div
                    className='absolute bottom-8 right-0 text-white rounded-md py-1 px-2 text-xs flex gap-2'
                    style={{ backgroundColor: testimonial.color }}
                  >
                    <img src={testimonial.icon} alt='' width={12} height={12} />
                    <p>{testimonial.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TODO: change to icon */}
          <div className='mt-2 -ml-4 col-start-1 lg:col-start-4 col-span-3 relative z-30'>
            <button
              className='border-0 hover:text-primary duration-200'
              onClick={() =>
                setCurrTestimonialIdx(
                  (currTestimonialIdx - 1 + Testimonials.length) %
                    Testimonials.length
                )
              }
            >
              &lt;
            </button>
            <button
              className='border-0 hover:text-primary duration-200'
              onClick={() =>
                setCurrTestimonialIdx(
                  (currTestimonialIdx + 1) % Testimonials.length
                )
              }
            >
              &gt;
            </button>
          </div>
        </section>

        <section className='whiteBGSmPadding'>
          <p className='col-start-2 col-span-2'>
            <b>Perks & Amenities</b>
          </p>
          <h2 className='col-span-3 mb-3'>We&apos;ve got your back, always.</h2>
          <p className='col-span-3 text-gray-600 mb-10'>
            We&apos;re creating an environment to keep everyone stand out with
            their talents and be able to cherish each and every unique qualities
            that we have.
          </p>
          <div className='col-start-4 col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6'>
            {Benefits.map((benefit, index) => (
              <div key={index}>
                <div className='h-16 w-16 rounded-lg bg-gray-100/30 mb-2'>
                  <img src={benefit.img} alt='' height={64} width={64} />
                </div>
                <h5 className='mb-2'>{benefit.title}</h5>
                <p className='text-sm text-gray-700'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <JobsSection jobs={Jobs} />

        <section
          className='px-6 py-14 lg:px-[10%] h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-end justify-end'
          style={{ backgroundImage: `url(${LastSectionImage})` }}
        >
          <div className='w-full md:w-1/2 md:mb-4 flex md:flex-col items-end'>
            <div className='flex lg:flex-row flex-col lg:space-x-4 bg-gray-50 rounded-t-2xl rounded-bl-2xl p-6'>
              <p className='bold mb-4'>01.</p>
              <div>
                <p className='mb-4 bold'>Work at Braga</p>
                <h3>
                  You&apos;re the accumulation of the people that you
                  collaborate with.
                </h3>
              </div>
            </div>
            <img
              src='/company/corner.svg'
              alt=''
              className='md:-mt-0.5 md:-mr-0.5 select-none rotate-180 md:rotate-0 mr-4 -mb-0.5'
            />
          </div>
          <div className='w-full md:w-1/2 flex md:flex-col'>
            <div className='flex items-start md:items-end md:space-x-10'>
              <img
                src='/company/corner.svg'
                alt=''
                className='md:-mb-0.5 md:-ml-0.5 select-none md:rotate-180 rotate-0 min-w-[24px] ml-4 -mt-0.5'
              />
              <img
                src='/company/additional.svg'
                alt=''
                className='-mb-0.5 -ml-0.5 select-none hidden md:block'
              />
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-4 bg-gray-50 rounded-b-2xl rounded-tr-2xl p-6 lg:items-center justify-between'>
              <p className='text-sm mb-3 lg:mb-0'>
                Being part of Braga means finding yourself in a unique position.
                Seize the possibility to work on challanges that impacts all
                over the world.
              </p>
              <Link href='/company/culture'>
                <a>
                  <button className='buttonLight w-2/3 lg:w-auto whitespace-nowrap'>
                    Our Culture &gt;
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
