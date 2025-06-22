"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Result = () => {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-indigo-800">
          Your Result
        </h1>

        {score !== null ? (
          <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Your score:{" "}
              <span className="text-green-600 font-bold">{score}</span>
            </p>
            <p className="text-gray-600">Thank you for participating!</p>
          </div>
        ) : (
          <p className="text-gray-600">
            No score available. Please take the quiz.
          </p>
        )}

        <Button
          className="mt-6 px-6 py-3 text-base  hover:bg-indigo-800/80 hover:text-white hover:shadow-xl hover:scale-105 transition-all ease-in-out bg-white shadow-md"
          onClick={() => {
            window.location.href = "/quiz"; // 🔑 adjust this to your quiz path
          }}
        >
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
};

export default Result;
