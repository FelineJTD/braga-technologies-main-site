import Head from 'next/head'

export default function Culture() {
  const Departments = ['Management', 'Design', 'Development', 'Technology', 'Operation', 'General Affairs', 'Others'];
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
          </div>
        </section>
      </main>
    </div>
  )
}
