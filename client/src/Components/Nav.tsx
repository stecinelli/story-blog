import React from 'react'
import {useMainContext} from '../Context'
import SectionTitle from './SectionTitle'

const Nav = () => {
  const { sections } = useMainContext()
  return (
    <nav className='NavBar'>
        {sections.map(s=> <SectionTitle text={s}/> )}
    </nav>
  )
}

export default Nav