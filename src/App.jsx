import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CandidateDetails from './components/CandidateDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/applications/:jobId" element={<CandidateDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;