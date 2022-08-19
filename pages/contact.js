/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const lastSectionImage = "https://picsum.photos/1080/1920";
  const Forms = [
    {
      title: 'Business Inquiries',
      info: 'Expect our team to reach out to you in at least 2 business days.',
      form: [
        {
          label: 'First Name',
          type: 'text',
          name: 'first-name',
          size: 2,
        },
        {
          label: 'Last Name',
          type: 'text',
          name: 'last-name',
          size: 2,
        },
        {
          label: 'Email Address',
          type: 'text',
          name: 'email',
          size: 2,
        },
        {
          label: 'Country/Region',
          type: 'select',
          name: 'region',
          size: 2,
        },
        {
          label: 'Company Name',
          type: 'text',
          name: 'company-name',
          size: 2,
        },
        {
          label: 'Job Title',
          type: 'text',
          name: 'job-title',
          size: 2,
        },
        {
          label: 'Phone Number',
          type: 'text',
          name: 'phone-number',
          size: 4,
        },
        {
          label: 'Message',
          type: 'textarea',
          name: 'message',
          placeholder: 'Tell us about it',
          size: 4,
        },
        {
          label: 'I would like to receive updates and news from Braga Technologies by email.',
          type: 'checkbox',
          name: 'newsletter',
          checked: true,
          size: 4,
        }
      ],
      submitLabel: 'Send',
    },
    {
      title: 'Tech Support',
      info: 'Fill this form if you have technical issue to discuss or report to us.',
      form: [
        {
          label: 'First Name',
          type: 'text',
          name: 'first-name',
          size: 2,
        },
        {
          label: 'Last Name',
          type: 'text',
          name: 'last-name',
          size: 2,
        },
        {
          label: 'Email Address',
          type: 'text',
          name: 'email',
          size: 2,
        },
        {
          label: 'Country/Region',
          type: 'select',
          name: 'region',
          size: 2,
        },
        {
          label: 'Select Technical Support',
          type: 'select',
          name: 'phone-number',
          size: 4,
        },
        {
          label: 'Message',
          type: 'textarea',
          name: 'message',
          placeholder: 'Tell us about it',
          size: 4,
        },
      ],
      submitLabel: 'Send',
    },
    {
      title: 'General Affair',
      info: 'We\'d love to extend our knowledge to everyone beyond ourselves. We hold sharing sessions and discussions based on our expertise to advocate for Geospatial tech.',
      form: [
        {
          label: 'First Name',
          type: 'text',
          name: 'first-name',
          size: 2,
        },
        {
          label: 'Last Name',
          type: 'text',
          name: 'last-name',
          size: 2,
        },
        {
          label: 'Email Address',
          type: 'text',
          name: 'email',
          size: 2,
        },
        {
          label: 'Country/Region',
          type: 'select',
          name: 'region',
          size: 2,
        },
        {
          label: 'Company Name',
          type: 'text',
          name: 'company-name',
          size: 2,
        },
        {
          label: 'Job Title',
          type: 'text',
          name: 'job-title',
          size: 2,
        },
        {
          label: 'Phone Number',
          type: 'text',
          name: 'phone-number',
          size: 4,
        },
        {
          label: 'Message',
          type: 'textarea',
          name: 'message',
          placeholder: 'Tell us about it',
          size: 4,
        },
        {
          label: 'I would like to receive updates and news from Braga Technologies by email.',
          type: 'checkbox',
          name: 'newsletter',
          checked: true,
          size: 4,
        }
      ],
      submitLabel: 'Send',
    },
    {
      title: 'Appointment',
      info: 'Set an appointment and speak with our Representative of Partnership and Strategy for an in depth consultancy or schedule a live demo at your place.',
      form: [],
      submitLabel: 'Set a Schedule',
    },
  ]

  const [currForm, setCurrForm] = useState(Forms[0]);

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
          <p className='col-span-4 mb-4'>Contact</p>
          <h1 className='row-start-2 col-start-4 col-span-6 mb-6'>Get in touch with us.</h1>
          <p className='row-start-3 col-start-2 col-span-2 mb-3'>Contact Us</p>
          <h2 className='row-start-3 col-span-3'>How might we help you?</h2>
          <p className='row-start-3 text-sm text-gray-600 col-span-3 mt-3'>See how Braga Technologies could help solve your problem through our geospatial knowledge and approach. </p>

          <div className='dividerBlack col-start-4 col-span-6 w-full mt-8' />

          {/* TYPES */}
          <div className='md:col-start-4 md:col-span-6 md:grid md:grid-cols-4 md:gap-2 flex space-x-2 overflow-auto w-full pb-3 md:pb-0'>
            { Forms.map((form, index) => (
              <button key={index} className={`${currForm.title === form.title? 'buttonSelectionSelected' : 'buttonSelection'} text-sm whitespace-nowrap`} onClick={() => setCurrForm(form)}>{form.title}</button>
            ))}
          </div>

          <div className='md:col-start-4 md:col-span-6 md:grid md:grid-cols-4 md:gap-3 flex flex-col space-y-2 w-full'>
            {/* INFO */}
            <div className='col-start-1 col-span-4 mt-6 mb-4 rounded-lg border-[1px] border-gray-200 bg-gray-100 p-3'>
              <p className='text-sm'>{currForm.info}</p>
            </div>

            {/* FORM */}
            <form className='md:col-start-1 md:col-span-4 md:grid md:grid-cols-4 md:gap-3 flex flex-col space-y-2'>
              {currForm.form.map((field, index) => (
                <div key={index} className={`w-full col-span-${field.size}`} style={{columnSpan: field.size}}>
                  <label className='text-sm' htmlFor={field.name}>{field.label}<br/></label>
                  <input type={field.type} name={field.name} id={field.name} placeholder={field.placeholder} className='input' />
                </div>
              ))}
              <button className='bg-black hover:bg-primary duration-300 text-white border-0'>{currForm.submitLabel}</button>
            </form>
          </div>

          <div className='dividerBlack col-start-4 col-span-6 w-full mt-8 mb-10' />
        </section>

        {/* 01 */}
        <section className='px-6 py-14 lg:px-[10%] h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-end justify-end' style={{backgroundImage: `url(${lastSectionImage})`}}>
          <div className='w-full md:w-1/2 md:mb-4 flex flex-col items-end pl-[12%] md:pl-0'>
            <img src='/company/additional.svg' alt='' className='-mb-0.5 select-none mr-[12%] w-[20%]' />
            <div className='flex lg:flex-row flex-col lg:space-x-4 bg-gray-50 rounded-2xl p-6 w-full'>
              <p className='bold mb-4'>01.</p>
              <div>
                <p className='mb-4 bold'>Visit us at</p>
                <h3 className='mb-4 w-full md:w-2/3'>Braga Technologies Bandung Office</h3>
                <div className='flex flex-col md:flex-row w-full justify-between'>
                  <p className='text-sm mb-4 w-full'>Jl. Cilaki No. 23<br />Bandung, Indonesia.<br />40114</p>
                  <button className='buttonLight lg:w-auto whitespace-nowrap mr-3'>See on Map &gt;</button>
                </div>
              </div>
            </div>
            <img src='/company/additional.svg' alt='' className='-mt-0.5 select-none rotate-180 self-start ml-[20%] w-[40%]' />
          </div>
        </section>
      </main>
    </div>
  )
}
