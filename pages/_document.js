import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-gray-50 text-gray-700'>
        <div className='absolute h-screen w-full'>Loading...</div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
