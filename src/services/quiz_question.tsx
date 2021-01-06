import { Question_Type, Quiz } from "../Types/types";

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const QuestionQuiz = async (totalQuestions: number, level: string): Promise<Question_Type[]> => {
   const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
   let { results } = await res.json();

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
