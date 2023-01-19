import React, {useState, useEffect} from 'react'
import { MainContext } from '../Context'
import Section from './Section'
// Replace the IPostList interface import with the post type
import { post } from '../types'
import Body from './Body'
import Nav from './Nav'

const Main = () => {
  const sections = ['classic','fiction','history','love','mystery']
  const [activeSection, setActiveSection] = useState('classic')
  
  // Replace the type of this useState with an array of post[] instead of IPostList
  const [postsList, setPostsList] = useState < post[] > ([]);

  // Make the fetch more compact. Notice that we only take p['posts'] since we're ignoring the total, skip and limit
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(p => p.json())
    .then(p => setPostsList(p['posts']))
  }, [])

  const contextValue = {
    postsList,
    setPostsList,
    sections,
    activeSection, 
    setActiveSection
  }

  return (
    <MainContext.Provider value={contextValue}>
      <main className='Main'>
          <h1 className='Main-title'>The Story Blog</h1>
          <Nav/>
          {/* Remove the body component since it only contained the Section*/}
          <div className='Body'>
            <Section/>
          </div>
      </main>
    </MainContext.Provider>
  )
}

export default Main