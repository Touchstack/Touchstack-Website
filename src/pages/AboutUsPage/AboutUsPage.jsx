import React from 'react'
import NavBar from '../../components/Homepage/NavBar';
import FoundersStory from '../../components/AboutUs/FoundersStory';
import GreenBoxComponent from '../../components/Homepage/ProjectIdea';
import Footer from '../../components/Homepage/Footer';

const AboutUsPage = () => {
  return (
    <div>
      <NavBar/>
    <FoundersStory />
    <GreenBoxComponent/>
    <Footer/>
    </div>
  )
}

export default AboutUsPage;
