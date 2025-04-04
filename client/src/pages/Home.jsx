import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🚀 Welcome to Startup Wizard</h1>
      <p className="mb-6 text-lg">Let's turn your idea into a company. Step by step.</p>
      <Link to="/step1" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Start the Journey
      </Link>
    </div>
  );
}
