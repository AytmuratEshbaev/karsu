import React from 'react';
import './App.scss';
import DeparturesSection from './Layouts/DeparturesSection';
import Footer from './Layouts/Footer';
import Graduate from './Layouts/Graduate';
import Header from './Layouts/Header';
import HeroSection from './Layouts/HeroSection';
import InformationSection from './Layouts/InformationSection';
import MapLocation from './Layouts/MapLocation';
import Partners from './Layouts/Partners';
import SubmitDocuments from './Layouts/SubmitDocuments';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Partners />
      <DeparturesSection />
      <Graduate />
      <InformationSection />
      <SubmitDocuments />
      <MapLocation />
      <Footer />
    </div>
  );
}

export default App;
