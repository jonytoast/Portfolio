import React from 'react';
import NavMenu from '../components/NavMenu';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <>
      <NavMenu />
      <HeroSection/>
      <AboutSection />
    </>
  )
}
