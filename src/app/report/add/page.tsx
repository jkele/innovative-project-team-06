import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className='  p-2'>
        <Link href={"/report"} className=' hover:bg-indigo-500 bg-indigo-600 rounded-lg p-2 '>
        Back
        </Link>
        <p className=' mt-2 h-full p-2 bg-gray-900 rounded-lg'>A form for a report will appear here</p>
    </div>
  )
}

export default Home