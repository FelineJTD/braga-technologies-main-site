export default function GetInTouch({number}) {
  const copyrightText = '© Braga Technologies 2022';
  return (
    <section className='whiteBG bg-gradient-to-b from-gray-100 to-gray-100 bg-[0_100%] [background-size:100%_50%] bg-no-repeat'>
      <p className='bold mb-4 text-gray-800'>{number}</p>
      <div className='col-span-4'>
        <p className='mb-4 bold text-gray-800'>Get in Touch</p>
        <h2 className='mb-4'>Start Mapping Your Future, Today.</h2>
      </div>
      <p className='col-span-3 col-start-7 lg:self-end mb-4 text-gray-600'>Find out how you can maximize the value from data and strengthen your decision making.</p>
      <button className='col-span-2 lg:self-end mb-4 border-black'>Contact Us</button>

      <div className='col-start-2 col-span-10 h-96 w-full bg-gray-200 my-6 rounded-xl' />
    </section>
  )
}
