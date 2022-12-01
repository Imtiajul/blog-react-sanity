import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <header className="flex justify-between bg-black items-center p-3 text-white">
      <p className="text-lg md:text-2xl lg:text-3xl text-white font-bold"><Link to="/">Imtiaj's Blog</Link></p>
      <nav>
         <ul className="flex lg:text-lg">
            <li className='mr-5'><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
         </ul>
      </nav>
     </header> 
    </>
  )
}

export default Header
