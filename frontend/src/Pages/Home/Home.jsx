import React from 'react'
import Hero from '../../Components/Hero/Hero';
import './Home.css'
import About from '../../Section/AboutSection/About';
import RecentProjects from '../../Section/ProjectsSection/RecentProjects';
import Service from '../../Section/ServiceSection/Service';
import Team from '../../Section/Team/Team';
import Blog from '../../Section/Blog/Blog';

const Home = () => {
  return (
    <header className='parent'>
      <Hero/>
      <About/>
      <Service/>
      <RecentProjects/>
      <Team/>
      <Blog/>
    </header>
  )
}

export default Home
