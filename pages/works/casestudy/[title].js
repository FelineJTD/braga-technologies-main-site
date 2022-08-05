import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import GetInTouch from '../../../components/get-in-touch-section';

export default function Works() {
  const router = useRouter();
  const { title } = router.query;
  
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
          <p className='col-span-4 mb-4 bold'>Works / Case Study</p>
          <h1 className='row-start-2 col-start-4 col-span-6 text-center mb-6'>Accelerating Agricultural Sustainability</h1>
          <p className='col-start-5 col-span-4 text-center text-sm'>{title}</p>

          
        </section>

        <GetInTouch number='04.' />
      </main>
    </div>
  )
}
