export type QuestionTypes = {
   category: string;
   correct_answer: string;
   difficulty: string;
   incorrect_answers: string[];
   question: string;
   type: string;
};

export type QuizTypes = {
   question: string;
   correct_answer: string;
   incorrect_answers: string[];
   option: string[];
};

export type QuestionPropsTpes = {
   question: string;
   option: string[];
};
