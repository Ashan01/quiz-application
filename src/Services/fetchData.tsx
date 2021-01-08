// import QuizData from "./quiz.json";  // for json use
import { QuizTypes, QuestionTypes } from "../Types/types";

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const FetchData = async (): Promise<QuizTypes[]> => {
   let data = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple");
   let { results } = await data.json();

   // let { results } = QuizData; // for json use

   let QuestionData: QuizTypes[] = results.map((obj: QuestionTypes) => {
      return {
         question: obj.question,
         correct_answer: obj.correct_answer,
         incorrect_answers: obj.incorrect_answers,
         option: shuffleArray(obj.incorrect_answers.concat(obj.correct_answer)),
      };
   });

   return QuestionData;
};
