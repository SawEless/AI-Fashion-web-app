// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './src/components/Navigation';
import Footer from './src/components/Footer';
import Home from './src/pages/Home';
import AIStylist from './src/pages/AIStylist';
import ARTryOn from './src/pages/ARTryOn';
import AvatarStudio from './src/pages/AvatarStudio';
import CoDesign from './src/pages/CoDesign';
import VisualSearch from './src/pages/VisualSearch';
import VRShowroom from './src/pages/VRShowroom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-stylist" element={<AIStylist />} />
            <Route path="/ar-try-on" element={<ARTryOn />} />
            <Route path="/avatar-studio" element={<AvatarStudio />} />
            <Route path="/co-design" element={<CoDesign />} />
            <Route path="/visual-search" element={<VisualSearch />} />
            <Route path="/vr-showroom" element={<VRShowroom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;