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
        {postsList && postsToList.map(p=> <Article postInfo={p}/> )}
    </section>
  )
}

export default Section