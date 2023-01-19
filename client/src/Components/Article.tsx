import React from 'react'
import {post} from '../types'

// Change the prop type from IArticleProps to post since IArticleProps only contains a post

const Article = ({postInfo}: {postInfo: post}) => {
  return (
    <article className='Article'>
        {/* Add an id to the picsum photo so each post will have a unique picture */}
        <img src={`https://picsum.photos/id/${postInfo.id}/3000/2000`} alt='random' className='Article-image'/>
        <h3 className='Article-title'>{postInfo.title}</h3>
        <p>{postInfo.body}</p>
    </article>
  )
}

export default Article