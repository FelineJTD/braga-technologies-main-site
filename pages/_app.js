import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => { setLoading(true); };
    const handleComplete = () => {
             setLoading(false);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
        <link rel="icon" href="/logo-braga-sm.svg" />
      </Head>

      {/* LOADING */}
      <div className={`${loading? 'translate-y-0' : '-translate-y-[100vh]'} absolute h-screen w-full bg-gray-50 z-50 duration-500 delay-[50ms]`}>
        <div>This is Loading</div>
      </div>

      <Navbar />
      <main className='w-full min-h-screen bg-gray-50 selection:bg-primary selection:text-gray-50 accent-primary'>
        <div className={`${loading? 'min-h-[16vh]' : 'min-h-0'} duration-500 delay-100 w-full`} />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
