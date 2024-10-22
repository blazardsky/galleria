import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <h2>What you were looking for is probably on my new website</h2>
      <p>Try to visit <a href="https://nicc-olo.com">nicc-olo.com</a> instead or write to me on LinkedIn, otherwise return to the homepage</p>
      <Link href="/">Go to the gallery</Link>
    </div>
  )
}