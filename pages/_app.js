import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [hasTimeElapsed, setHasTimeElapsed] = useState(true);
  const [loadingCopy, setLoadingCopy] = useState('Navigating the world, one map at a time.');

  useEffect(() => {
    if (loading) {
      setHasTimeElapsed(false);
      setTimeout(() => {
        setHasTimeElapsed(true);
      }, 1500);
    }
  }, [loading]);

  useEffect(() => {
    const handleStart = () => { setLoading(true); };
    const handleComplete = () => { setLoading(false); };
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  useEffect(() => {
    const alt_copies = [
      'Navigating the world, one map at a time.',
      'GIS is waking up the world to the power of geography.',
      'Geographers never get lost. We just do accidental field work.',
      '“I am the earth in the palm of your hands” – A Map',
    ]
    if (!loading && hasTimeElapsed) {
      setTimeout(() => {
        setLoadingCopy(alt_copies[Math.floor(Math.random() * alt_copies.length)]);
      }, 700);
    }
  }, [loading, hasTimeElapsed]);

  return (
    <>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
        {/* thumbnail */}
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="680" />
        <meta property="og:image:alt" content="Braga Technologies" />
        <link rel="icon" href="/logo-braga-sm.svg" />
      </Head>

      {/* LOADING */}
      <div className={`${loading || !hasTimeElapsed? 'translate-y-0 duration-500' : '-translate-y-[100vh] duration-700'} fixed h-screen w-full bg-gray-50 z-[70] flex flex-col items-center justify-center text-center`}>
        <p className='text-xs text-gray-700 mb-3'>{loadingCopy}</p>
        <div className='relative h-0.5 w-full bg-gray-100'>
          <div className={`${loading || !hasTimeElapsed? 'animate-progress-bar' : 'w-full'} absolute top-0 h-0.5 bg-gray-300 duration-100`} />
        </div>
      </div>

      <main className='w-full min-h-screen bg-gray-50 selection:bg-primary selection:text-gray-50 accent-primary'>
        <div className={`${loading || !hasTimeElapsed? 'min-h-[16vh]' : 'min-h-0'} duration-700 delay-100 w-full`} />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
