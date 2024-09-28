'use client';
import React, { useEffect, useState } from 'react';

const Result = () => {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Your Result</h1>
        {score !== null ? (
          <div>
            <p className="text-xl font-semibold text-gray-700">Your score: <span className="text-blue-500">{score}</span></p>
            <p className="mt-2 text-gray-600">Thank you for participating!</p>
          </div>
        ) : (
          <p className="text-gray-600">No score available. Please take the quiz.</p>
        )}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => {
            // Optional: Redirect to home or quiz page
            window.location.href = '/quiz'; // Change to your quiz page path
          }}
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};

export default Result;
