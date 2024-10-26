import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle = 'Our Programs' title = ' What We Offer'/>
        <Programs />
      </div>
    </div>
  )
}
