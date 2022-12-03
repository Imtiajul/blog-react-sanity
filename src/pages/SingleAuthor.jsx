import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import client from '../client'

function SingleAuthor() {
   const [posts, setPosts] = useState([])
   const [isloading, setIsLoading] = useState(true)
   const { slug } = useParams()

   useEffect(() => {
      client.fetch(
         `*[_type == "post" && 
         author->slug.current == "${slug}"] {
            title, 
            slug, 
            body,
            author -> {name},
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            }
         }`
      ).then((data) => { setPosts(data) })
         .catch(console.error);
      setIsLoading(false)
   }, [])
   return (
      <>
         {isloading ? <h1 className="text-center text-5xl font-bold mt-5 mb-10 tracking-widest md:text-6xl lg:text-7xl flex h-screen justify-center items-center">Loading...</h1> :
            <section className="p-5 2xl:max-w-7xl 2xl:mx-auto">
               <h1 className=" text-5xl font-bold mt-5 mb-10 tracking-widest md:text-6xl">Author {posts[0] && posts[0].author && posts[0].author.name}</h1>
               <div className="grid gap-5 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                     <article className="mb-5" key={post.slug.current}>
                        <div className="xl:h-4/6 md:h-3/6 overflow-hidden">
                           <Link to={`/blog/${post.slug.current}`}><img src={post.mainImage.asset.url} alt={post.title} /></Link>
                        </div>
                        <h2 className="text-2xl my-4 mb-5 font-medium"><Link to={`/blog/${post.slug.current}`}>{post.title}</Link></h2>
                        <Link to={`/blog/${post.slug.current}`} className="py-2 px-6 bg-gray-600 rounded shadow text-white hover:bg-transparent-border-2 border-black transition-all-duration-500 hover:text-black font-bold hover:bg-gray-300 hover:border-gray-900 transition-colors duration-400 border-1">Read Full Article</Link>
                     </article>
                  ))}
               </div>
            </section>
         }
      </>
   )
}

export default SingleAuthor
