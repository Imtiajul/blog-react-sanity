import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-5xl font-bold mt-5 mb-10 tracking-widest md:text-6xl">Error || 404 Page not found</h1>
      <Link to="/" className="py-2 px-6 bg-gray-600 rounded shadow text-white hover:bg-transparent-border-2 border-black transition-all-duration-500 hover:text-black font-bold hover:bg-gray-300 hover:border-gray-900 transition-colors duration-400">Back to Homepage</Link>
    </div>
  )
}

export default Error
