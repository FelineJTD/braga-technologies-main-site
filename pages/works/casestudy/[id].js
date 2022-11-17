/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script';
import Navbar from '../../../components/navbar';

// Components
import GetInTouch from '../../../components/section-get-in-touch';

export default function Works() {
  const router = useRouter();
  const { id } = router.query;

  const data = {
    id: '1',
    title: 'Land Aptitude Agriculture Map',
    headline: 'Accelerating Agricultural Sustainability',
    img: 'https://picsum.photos/1920/1080',
    logo_url: '/static/images/logos/logo-1.png',
    logo_alt: 'Pertamina',
    date: 'Month, 2021',
    solution_type: 'GeoDashboard',
    solution_desc: '“Geodashboard, allows us to create, update & publish maps faster, saving our valuable time, and giving better service.”',
    key_expertise: [
      'Project Management',
      'Data Collection',
      'Software Engineering',
      'Design and Research'
    ],
    overview: 'This section is where we wrote down the hook of the article as an attention grabber for the overall article. It can be a quote, review, summary, or anything interesting.',
    details: 'This section explain about the case’s background, what are the problems, and existing situation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    about: 'Following a pilot period beginning in 2019, T-Mobile launched its 5G home internet service in early 2021, with 30 million homes across the US eligible. Wireless internet for a fixed address requires a significantly different qualification process than a traditional internet service provider (ISP). Making informed decisions about candidacy requires a large amount of spatial data. There are 185 million unique addresses in the US, each with untold variables associated with them, creating the challenge of how to make sweeping determinations of who is qualified for service. This also includes determining at an aggregate level which zip codes, MSAs, or states have the greatest potential.',
    contentA: {
      title: 'Content A',
      text: 'T-Mobile built an internal analytics platform that leverages CARTO for processing and visualization to help them translate spatial data into actionable intelligence and provide services to allow enterprise channel sales and marketing partners to sell their products more effectively.',
    },
    contentB: {
      title: 'Content B',
      text: 'Geospatial and network teams are able to calculate the capacity for delivering a consistent internet experience by analyzing the propagation of radio frequency to households within the cell site’s coverage footprint.',
    },
    contentC: {
      title: 'Content C',
      text: 'Geospatial and network teams are able to calculate the capacity for delivering a consistent internet experience by analyzing the propagation of radio frequency to households within the cell site’s coverage footprint.',
    },
  }
  
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
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
      </Head>

      <Navbar color='light' />
      <main className='text-gray-900 bg-gray-50 w-full -mt-[4.2rem]'>
        {/* 00 */}
        <section className='text-white rounded-b-2xl px-6 pb-10 pt-[7rem] xl:px-[10%] flex flex-col lg:grid lg:grid-cols-12 items-start gap-x-6 bg-cover bg-center bg-no-repeat'>

          {/* Image Background */}
          <div className='w-full h-screen absolute top-0 left-0 rounded-b-2xl z-0' style={{backgroundImage: `url(${data.img})`}}/> 
          {/* Gradient Background */}
          <div className='[background-image:linear-gradient(to_bottom,rgba(35,34,33,0.12),rgba(35,34,33,0.8))] w-full h-screen absolute top-0 left-0 rounded-b-2xl z-0'/>

          <p className='bold mb-4 relative z-10'>00.</p>
          <p className='col-span-11 mb-4 bold relative z-10'>Works / Case Study</p>
          <div className='col-start-2 col-span-4 relative z-10'>
            <p className='mb-3'>{data.title}</p>
            <h1 className='font-inter font-semibold text-[36px] md:text-[48px] [line-height:46px] md:[line-height:58px] mb-[5vh] lg:mb-0'>{data.headline}</h1>
          </div>
          <div className='col-start-7 col-span-4 relative z-10 flex flex-col justify-between mb-14'>
            <img src={data.logo_url} alt={data.logo_alt} className='h-14 object-contain'/>
            <div>
              <div className='grid grid-cols-2'>
                <div>
                  <p>Date</p>
                  <p><b>{data.date}</b></p>
                </div>
                <div>
                  <p>Solution</p>
                  <p><b>{data.solution_type}</b></p>
                </div>
              </div>

              <div className='border-t-[1px] border-gray-100 my-4' />
              <p>{data.solution_desc}</p>
            </div>
          </div>

          {/* VISIT PROJECT */}
          <section className='col-start-2 col-span-10 relative w-full'>
              <div className='rounded-xl w-full h-[67vh] bg-gray-100 border-[1px] border-black relative z-10' />
              <div className='flex items-center justify-center w-full h-full absolute top-0 left-0 z-20'>
                <button className='buttonDark bg-white shadow-md'>Visit Project</button>
              </div>
            </section>
        </section>

        {/* 01 */}
        <section className='whiteBG'>
          <p className='bold mb-4'>01.</p>
          <div className='col-span-3'>
            <p className='mb-4 bold'>Key Expertise</p>
            <div className='mb-8'>
              {data.key_expertise.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className='col-span-4 mb-10'>
            <p className='mb-4 bold'>Overview</p>
            <p className='text-2xl mb-6'><b>{data.overview}</b></p>
            <p>{data.details}</p>
          </div>
        </section>


        {/* IMAGE */}
        <section className='md:px-6 xl:px-[10%] flex flex-col lg:grid lg:grid-cols-12 items-start gap-x-6 relative pb-10 -mt-6'>
          <div className='col-start-2 col-span-10 rounded-xl w-full h-[67vh] bg-gray-100 relative z-10'>
            {/* image */}
          </div>
        </section>

        {/* 02 */}
        <section className='whiteBG'>
          <p className='bold mb-4'>02.</p>
          <p className='mb-4 bold col-span-3'>Context</p>
          <div className='col-span-4 mb-10'>
            <p className='mb-4 bold'>About The Client</p>
            <p>{data.about}</p>
          </div>
          <div className='col-start-2 col-span-10 w-full dividerBlack'/>
        </section>

        {/* 03 */}
        <section className='whiteBG -mt-12'>
          <p className='bold mb-4'>03.</p>
          <p className='mb-4 bold col-span-3'>Stories</p>
          <div className='col-span-4 mb-10'>
            <p className='mb-4 bold'>{data.contentA.title}</p>
            <p>{data.contentA.text}</p>
          </div>
          <h6 className='text-xl col-span-4 mb-10'>We believe Geospatial Approach could solve various issues for everyone, <u>everywhere.</u></h6>
          <div className='col-start-5 col-span-4 mb-10'>
            <p className='mb-4 bold'>{data.contentB.title}</p>
            <p>{data.contentB.text}</p>
          </div>
          <div className='border-[1px] border-black col-start-2 col-span-10 w-full h-[50vh] bg-gray-100 rounded-2xl mb-10'>
            {/* image */}
          </div>
          <div className='col-start-5 col-span-4'>
            <p className='mb-4 bold'>{data.contentC.title}</p>
            <p>{data.contentC.text}</p>
          </div>
        </section>

        <GetInTouch number='04.' />
      </main>
    </div>
  )
}
