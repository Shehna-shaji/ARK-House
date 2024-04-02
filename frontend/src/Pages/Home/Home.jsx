import React from 'react'
import Hero from '../../Components/Hero/Hero';
import './Home.css'
import About from '../../Section/AboutSection/About';
import RecentProjects from '../../Section/ProjectsSection/RecentProjects';

const Home = () => {
  return (
    <header className='parent'>
      <Hero/>
      <About/>
      <RecentProjects/>
    </header>
  )
}

export default Home
