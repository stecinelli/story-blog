import React from 'react'
import {useMainContext} from '../Context'
// import SectionTitle from './SectionTitle'

const Nav = () => {
  const { sections, setActiveSection, activeSection } = useMainContext()
  return (
    <nav className='NavBar'>
        {sections.map((s, i) => <h3 key={i} className={`Section-title ${s == activeSection ? 'active-section' : ''}`} onClick={() => setActiveSection(s)}>{s}</h3> )}
    </nav>
  )
}

export default Nav