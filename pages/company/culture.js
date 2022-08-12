import Head from 'next/head'

export default function Culture() {

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
      </main>
    </div>
  )
}
