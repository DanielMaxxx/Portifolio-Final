import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubjectPage from './pages/SubjectPage';
import TrimestrePage from './pages/TrimestrePage';
import RecoveryPage from './pages/RecoveryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materia/:subject" element={<SubjectPage />} />
        <Route path="/materia/:subject/:trimestre" element={<TrimestrePage />} />
        <Route path="/materia/:subject/recuperacao" element={<RecoveryPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
