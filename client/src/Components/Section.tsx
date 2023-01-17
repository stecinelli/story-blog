import React from 'react'
import Article from './Article'
import SectionTitle from './SectionTitle'
import {useMainContext} from '../Context'

const Section = () => {
  const { activeSection, postsList } = useMainContext()
  const postsToList = postsList.posts.filter(p=> p.tags.includes(activeSection))
  return (
    <section className='Section'>
        <SectionTitle text={activeSection}/>
        <div className='Article-container'>
          {postsList && postsToList.map(p=> <Article postInfo={p}/> )}
        </div>
    </section>
  )
}

export default Section