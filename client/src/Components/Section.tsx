import React from 'react'
import Article from './Article'
// import SectionTitle from './SectionTitle'
import {useMainContext} from '../Context'

const Section = () => {
  const { activeSection, postsList, setActiveSection } = useMainContext()
  const postsToList = postsList.filter(p=> p.tags.includes(activeSection))
  return (
    <section className='Section'>
        {/* <SectionTitle text={activeSection}/> */}
        {/* Remove the SectionTitle component and place it inside here */}
        <h3 className='Section-title' onClick={()=>setActiveSection(activeSection)}>{activeSection}</h3>
        <div className='Article-container'>
          {/* postsList && */ postsToList.map(p=> <Article key={p.id} /* Add key prop */ postInfo={p}/> )}
        </div>
    </section>
  )
}

export default Section