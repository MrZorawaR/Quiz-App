'use client';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { questionsState, selectedAnswersState, Question as QuestionType } from '../../state/quizState';
import Question from './Question';
import Result from './Result';
import questionsData from '../../../questions.json'; // Import your JSON file here
import { useRouter } from 'next/navigation';
import { Card } from '../components/ui/card'; // Importing Card component
import { Button } from '../components/ui/button'; // Importing Button component
import Link from 'next/link';
// import { Link } from 'lucide-react';

const Quiz = () => {
  const router = useRouter();
  const [questions, setQuestions] = useRecoilState<QuestionType[]>(questionsState);
  const [selectedAnswers, setSelectedAnswers] = useRecoilState<string[]>(selectedAnswersState);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  // Utility function to shuffle an array
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Shuffle the questions and select the first 12
    const shuffledQuestions = shuffleArray(questionsData).slice(0, 12);

    // Transform the data to match your expected format
    const formattedQuestions = shuffledQuestions.map((item: any) => ({
      question: item.question,
      answers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5), // Randomize answers
      correctAnswer: item.correct_answer,
    }));

    setQuestions(formattedQuestions);
  }, [setQuestions]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer; // Store selected answer for the current question
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      handleSubmit(); // Submit if it's the last question
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    // Calculate the score based on selected answers
    const score = selectedAnswers.reduce((acc, answer, index) => {
      if (answer === questions[index]?.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    // Store the score in local storage
    localStorage.setItem('quizScore', JSON.stringify(score));

    // Redirect to the results page
    router.push('/result');
  };

  if (questions.length === 0) {
    return <div className="flex items-center justify-center h-screen bg-gray-100">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4">
      
      {currentQuestionIndex < questions.length ? (
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl">
          {/* Progress */}
          <div className="text-center text-xl font-bold text-indigo-800 mb-6">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>

          <Question
            question={questions[currentQuestionIndex]}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />

          <div className="flex justify-between mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 text-base disabled:bg-gray-300  hover:bg-indigo-800/80 hover:text-white hover:shadow-xl hover:scale-105 transition-all ease-in-out bg-white shadow-md"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="px-6 py-3 text-base  hover:bg-indigo-800/80 hover:text-white hover:shadow-xl hover:scale-105 transition-all ease-in-out bg-white shadow-md"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      ) : (
        <Result />
      )}
    </div>

  );
};

export default Quiz;
