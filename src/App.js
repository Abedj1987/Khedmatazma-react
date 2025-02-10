import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Categories from './components/Categories/Categories';
import PopularServices from './components/PopularServics/popularServices';
import AppDownload from './components/AppDonload/AppDownload';
import ServiceSteps from './components/ServiceSteps/ServiceSteps';
import ServicePrices from './components/ServicePrices/ServicePrices';
import './App.css';
import Provinces from './components/Provinces/Provinces';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Footer  from './components/Footer/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('customer');

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
        <Categories />
        <Features />
        <PopularServices />
        <div className="w-full border-t border-gray-200 my-8" />
        <AppDownload />
        <ServiceSteps />
        <ServicePrices />
        <Provinces/>
        <CustomerReviews/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;