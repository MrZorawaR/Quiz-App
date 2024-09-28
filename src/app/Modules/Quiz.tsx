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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {currentQuestionIndex < questions.length ? (
        <Card className="bg-white shadow-lg rounded-lg p-6 w-96 lg:w-[90%]">
          <Question
            question={questions[currentQuestionIndex]}
            selectedAnswer={selectedAnswers[currentQuestionIndex]} // Pass the selected answer for the current question
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
          <div className="flex justify-between mt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 disabled:bg-gray-200 "
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </Card>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default Quiz;
