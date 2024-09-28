// state/quizState.ts
import { atom } from 'recoil';

export type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

export const questionsState = atom<Question[]>({
  key: 'questionsState', // Unique ID for the atom
  default: [], // Default value
});

export const selectedAnswersState = atom<string[]>({
  key: 'selectedAnswersState',
  default: [], // This will store the user's selected answers
});
