import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="uppercase font-bold text-4xl tracking-wind mb-5 md:text-6xl lg:text-8xl">Imtiaj Blog</h1>

        <Link to="/blog" className="py-2 px-6 bg-gray-600 rounded shadow text-white hover:bg-transparent-border-2 border-black transition-all-duration-500 hover:text-black font-bold hover:bg-gray-300 hover:border-gray-900 transition-colors duration-400">Read my Blog Posts</Link>

      </section>
    </div>
  )
}

export default HomePage
