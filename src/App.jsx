import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
   
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle = 'Our Programs' title = 'What We Offer'/>
        <Programs />
        <About setIsPlaying={setIsPlaying}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subtitle='Testimonials' title='What our Students Says'/>
        <Testimonials />
        <Title subtitle='Contact us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}
