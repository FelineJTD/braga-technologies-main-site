/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between w-full px-6 py-3 bg-white text-gray-600 bg-opacity-80 backdrop-blur sticky top-0 z-40'>
      <img src='/logo-braga-full.svg' alt='Braga Technologies Logo' className='h-6' />
      <div className='justify-self-center space-x-6'>
        <Link href='/'><a className='un text-sm'>Home</a></Link>
        <a href='https://geodashboard.braga.co.id/' rel='noreferrer noopener' className='un text-sm'>GeoDashboard</a>
        <Link href='/'><a className='un text-sm'>Works</a></Link>
        <Link href='/'><a className='un text-sm'>Company</a></Link>
        <Link href='/'><a className='un text-sm'>Contact</a></Link>
      </div>
      <button className='buttonLight text-gray-900 bg-white bg-opacity-50'>Map Demo</button>
    </nav>
  )
}
