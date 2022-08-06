import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BragaTechnologies</title>
        <meta name="description" content="Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more." key="description"/>
        <meta name="keywords" content="Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services" key="keywords"/>
        <link rel="icon" href="/logo-braga-sm.svg" />
      </Head>

      <Navbar />
      <main className='w-full min-h-screen bg-gray-50 selection:bg-primary selection:text-gray-50'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
