import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='whiteBG'>
      <div className='col-span-12 min-h-[60vh]'>
        
      </div>
      <h1 className='col-span-3 self-end'>404.</h1>
      <h1 className='col-span-6 self-end'>Not Found.</h1>
      <p className='col-span-3 text-sm self-end mb-4'>
        What you’re looking for is out of the map.
        Please return to <Link href="/"><a className='text-primary unPrimary text-sm'>home</a></Link> page.
      </p>
    </div>
  )
}
