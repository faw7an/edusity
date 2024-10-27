import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle = 'Our Programs' title = ' What We Offer'/>
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subtitle='Testimonials' title='What our Students Says'/>
        <Testimonials />

      </div>
    </div>
  )
}
