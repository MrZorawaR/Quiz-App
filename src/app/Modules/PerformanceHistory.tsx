import React, { useEffect, useState } from 'react';

const PerformanceHistory = () => {
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    // Fetch performance history from localStorage
    const savedHistory = localStorage.getItem('performanceHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Performance History</h1>
      {history.length > 0 ? (
        <ul className="list-disc list-inside">
          {history.map((score, index) => (
            <li key={index} className="mb-2">
              Attempt {index + 1}: {score} / 12
            </li>
          ))}
        </ul>
      ) : (
        <p>No quiz history available.</p>
      )}
    </div>
  );
};

export default PerformanceHistory;
