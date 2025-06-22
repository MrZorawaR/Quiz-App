"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface QuestionProps {
  question: {
    question: string;
    answers: string[];
  };
  selectedAnswer: string | undefined;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  isLastQuestion: boolean;
}

// ✅ Robust HTML entity decoder for numeric & named entities
export function decodeHTMLEntities(str: string) {
  if (typeof window === "undefined") return str; // SSR safety
  const doc = new DOMParser().parseFromString(str, "text/html");
  return doc.documentElement.textContent || "";
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAnswer(e.target.value);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">
        {decodeHTMLEntities(question.question)}
      </h2>
      <div className="flex flex-col space-y-4">
        {question.answers.map((answer, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-lg border cursor-pointer transition ${
              selectedAnswer === answer
                ? "border-indigo-600 bg-indigo-50"
                : "border-gray-300 hover:border-indigo-400"
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerChange}
              className="mr-3"
            />
            <span>{decodeHTMLEntities(answer)}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
