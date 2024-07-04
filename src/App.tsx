import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import HomePage from './pages/HebrewPages/HomePage';
import ParksPage from './pages/HebrewPages/ParksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/he" element={<HomePage />} />
          <Route path="" element={<HomePage />} />
          <Route path="/he/skateparks" element={<ParksPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
