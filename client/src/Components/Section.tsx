import React from 'react'
import Article from './Article'
import SectionTitle from './SectionTitle'

const Section = () => {
  return (
    <section className='Section'>
        <SectionTitle/>
        Loop:
        <Article/>
    </section>
  )
}

export default Section