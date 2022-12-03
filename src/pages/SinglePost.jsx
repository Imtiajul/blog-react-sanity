import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'


const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client.fetch(
      `*[_type == "post" && slug.current == "${slug}"] {
        title,
        body,
        author -> {slug, name},
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }, 
      }`
    ).then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])
  return (

    <>
      {isloading ? <h1 className="text-center text-5xl font-bold mt-5 mb-10 tracking-widest md:text-6xl lg:text-7xl flex h-screen justify-center items-center">Loading...</h1> :
        <article className="py-5 xl:max-w-6xl xl:mx-auto mb-10">
          <h1 className="text-5xl font-bold mt-5 mb-10 tracking-widest">{singlePost.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset &&
            <div className="blog-img mb-3" >
              <img className="rounded-t" src={singlePost.mainImage.asset.url} alt={singlePost.title} />
            </div>
          }
          {singlePost.author && singlePost.author.slug &&
            <p className="mb-5">By <Link to={`/author/${singlePost.author.slug.current}`} className="underline pb-5"> {singlePost.author.name}</Link></p>
          }
          <div className="mb-5 blog-content">
          {singlePost && singlePost.body &&  
            <BlockContent
              blocks={singlePost && singlePost.body}
              projectId="bwl4sj3p"
              dataset="production-youtubeblog"
            />
          }
           
          </div>
          <Link to="/blog" className="py-2 px-6 bg-gray-600 rounded shadow text-white hover:bg-transparent-border-2 border-black transition-all-duration-500 hover:text-black font-bold hover:bg-gray-300 hover:border-gray-900 transition-colors duration-400">Read more article</Link>
        </article>
      }
    </>
  )
}

export default SinglePost
