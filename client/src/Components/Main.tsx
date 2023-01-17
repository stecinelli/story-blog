import React, {useState} from 'react'
import { MainContext } from '../Context'
import { IPostList } from '../types'
import Body from './Body'
import Nav from './Nav'

const Main = () => {
  const sections = ['classic','fiction','history','love','mystery']
  const [activeSection, setActiveSection] = useState('classic')
  const [postsList, setPostsList] = useState < IPostList > ({
    posts:[
        {
            id:1,
            title:'His mother had always taught him',
            body:'His mother had always taught him not to ever think of himself as better than others.',
            userId:9,
            tags:['history','american','classic'],
            reactions:3
        },
        {
            id:2,
            title:'He was an expert but not in a discipline',
            body:'He was an expert but not in a discipline that anyone could fully appreciate.',
            userId:13,
            tags:['french','fiction','english','mystery','american','crime','love','classic','history'],
            reactions:2
        }
    ],
    total:150,
    skip:0,
    limit:30
});

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
          <Body/>
      </main>
    </MainContext.Provider>
  )
}

export default Main