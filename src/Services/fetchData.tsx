import QuizData from "./quiz.json";
import { QuizTypes, QuestionTypes } from "../Types/types";

// const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const FetchData = async (totalQuestions: number, level: string): Promise<QuizTypes[]> => {
   let data = await fetch("https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple");
   let { results } = await data.json();

   let QuestionData: QuizTypes[] = results.map((obj: QuestionTypes) => {
      return {
         question: obj.question,
         correct_answer: obj.correct_answer,
         incorrect_answers: obj.incorrect_answers,
         option: obj.incorrect_answers.concat(obj.correct_answer),
      };
   });

   return QuestionData;
};
