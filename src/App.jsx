import React from 'react';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechnicalProficiency from './sections/TechnicalProficiency';
import AboutMe from './sections/AboutMe';
import MyProjects from './components/MyProjects';

const App = () => {
  return (
    <div className="mb-80">
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
    </div>
  );
};

export default App;
