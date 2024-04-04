import React from 'react'
import Hero from '../../Components/Hero/Hero';
import './Home.css'
import About from '../../Section/AboutSection/About';
import RecentProjects from '../../Section/ProjectsSection/RecentProjects';
import Service from '../../Section/ServiceSection/Service';

const Home = () => {
  return (
    <header className='parent'>
      <Hero/>
      <About/>
      <Service/>
      <RecentProjects/>
    </header>
  )
}

export default Home
