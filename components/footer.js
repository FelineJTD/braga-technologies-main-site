export default function Footer() {
  return (
    <footer className='p-6 pt-0 xl:px-[10%] flex flex-col lg:grid lg:grid-cols-12'>
        <div className='col-span-3'>
          <p>Indonesia&apos;s Leading Geospatial Technology that optimize analytics and performance, moving the world one map at a time.</p>
        </div>
        <div className='col-start-5 col-span-2 pr-6'>
          <h6>Product</h6>
          <a href='#'><p>GeoDashboard</p></a>
          <a href='#'><p>Braga Enterprise</p></a>
          <a href='#'><p>Braga AI</p></a>
        </div>
        <div className='col-span-2 pr-6'>
          <h6>Works</h6>
          <a href='#'><p>Works</p></a>
          <a href='#'><p>Case Study</p></a>
          <a href='#'><p>Portfolio</p></a>
        </div>
        <div className='col-span-2 pr-6'>
          <h6>Office</h6>
          <a href='#'><p>About</p></a>
          <a href='#'><p>Team</p></a>
          <a href='#'><p>Career</p></a>
          <a href='#'><p>Contact Us</p></a>
        </div>

        <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200 mt-10 mb-4' />
        <a href='#' className='col-start-5 col-span-2'>Privacy</a>
        <a href='#' className='col-span-2'>Terms of Use</a>
        <p className='text-right col-span-4'>© Braga Technologies 2022</p>
        <div className='col-start-1 col-span-12 border-t-[1px] border-gray-200 mt-4' />
      </footer>
  )
}
