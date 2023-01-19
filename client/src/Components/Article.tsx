import React from 'react'
import {IArticleProps} from '../types'

const Article = ({postInfo: {title, body}}: IArticleProps) => {
  return (
    <article className='Article'>
        <img src='https://picsum.photos/3000/2000' alt='random' className='Article-image'/>
        <h3 className='Article-title'>{title}</h3>
        <p>{body}</p>
    </article>
  )
}

export default Article