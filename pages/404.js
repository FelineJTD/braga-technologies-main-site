import Link from "next/link";
import Script from "next/script";

export default function NotFound() {
  return (
    <div className='whiteBG'>
      <Script
        async
        defer
        data-website-id='af8d7125-94a4-4649-90c9-a4ff1fb6b3a3'
        src='https://stats.braga.co.id/umami.js'
        strategy='worker'
      ></Script>
      <div className='col-span-12 min-h-[60vh]'></div>
      <h1 className='col-span-3 self-end'>404.</h1>
      <h1 className='col-span-6 self-end'>Not Found.</h1>
      <p className='col-span-3 text-sm self-end mb-4'>
        What you’re looking for is out of the map. Please return to{" "}
        <Link href='/'>
          <a className='text-primary unPrimary text-sm'>home</a>
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
