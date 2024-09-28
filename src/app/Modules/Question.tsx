'use client';
import React from 'react';

interface QuestionProps {
  question: {
    question: string;
    answers: string[];
  };
  selectedAnswer: string | undefined; // Allow undefined for unselected state
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  isLastQuestion: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  isLastQuestion,
}) => {
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAnswer(e.target.value); // Call the onAnswer function passed as a prop
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="flex flex-col">
        {question.answers.map((answer, index) => (
          <label key={index} className="mb-2">
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer} // Bind checked state to the selected answer
              onChange={handleAnswerChange}
              className="mr-2"
            />
            {answer}
          </label>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {/* <button
          onClick={onPrevious}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={false}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </button> */}
      </div>
    </div>
  );
};

export default Question;
