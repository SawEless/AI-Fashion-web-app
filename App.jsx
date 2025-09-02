// src/App.jsx
import React, { useEffect } from 'react';
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
import { useUIStore } from './src/store';

function App() {
  const { theme } = useUIStore();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-slate-900 text-white'
          : 'bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-50 text-slate-800'
      }`}>
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