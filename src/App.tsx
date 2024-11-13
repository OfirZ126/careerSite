import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import Login from './components/Login';
import Quiz from './components/Quiz';
import { GraduationCap } from 'lucide-react';

function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (showQuiz) return <Quiz />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
        <GraduationCap className="mx-auto h-16 w-16 text-purple-600 mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Your Path
        </h1>
        <p className="text-gray-600 mb-8">
          Take our comprehensive assessment to find the perfect field of study that matches your interests and strengths.
        </p>
        <button
          onClick={() => setShowQuiz(true)}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          What should I study?
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;