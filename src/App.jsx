import React, { useState } from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage'
import Blog from './pages/Blog'
import SinglePost from './pages/SinglePost'
import Error from './pages/Error'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleAuthor from './pages/SingleAuthor';


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:slug" element={<SinglePost/>}/>
        <Route path="/author/:slug" element={<SingleAuthor/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
