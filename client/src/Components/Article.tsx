import React from 'react'
import {IArticleProps} from '../types'

const Article = ({postInfo: {title, body, reactions}}: IArticleProps) => {
  return (
    <article className='Article'>
        <h5 className='Article-title'>{title}</h5>
        <image className='Article-image'/>
        <p>{body}</p>
        <button>React</button>
        <span>{reactions}</span>
    </article>
  )
}

export default Article