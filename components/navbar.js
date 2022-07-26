/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between w-full px-6 py-3 bg-white text-gray-600 bg-opacity-80 backdrop-blur sticky top-0 z-40'>
      <img src='/logo-braga-full.svg' alt='Braga Technologies Logo' className='h-6' />
      <div className='justify-self-center space-x-6'>
        <a href='/' className='un text-sm'><p>Home</p></a>
        <a href='https://geodashboard.braga.co.id/' rel='noreferrer noopener' className='un text-sm'><p>GeoDashboard</p></a>
        <a href='/' className='un text-sm'><p>Works</p></a>
        <a href='/' className='un text-sm'><p>Company</p></a>
        <a href='/' className='un text-sm'><p>Contact</p></a>
      </div>
      <button className='buttonLight text-gray-900 bg-white bg-opacity-50'>Map Demo</button>
    </nav>
  )
}
