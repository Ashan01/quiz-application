import { Question_Type, Quiz } from "../Types/types";
import QuizJson from "../quiz.json";

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const QuestionQuiz = async (): Promise<Question_Type[]> => {
   // const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
   // let { results } = await res.json();
   // return results;
   let { results } = QuizJson;

   let quizMap: Question_Type[] = results.map((obj: Quiz) => {
      return {
         question: obj.question,
         answer: obj.correct_answer,
         correct_answer: obj.correct_answer,
         option: shuffleArray(obj.incorrect_answers.concat(obj.correct_answer)),
      };
   });
   return quizMap;
};
