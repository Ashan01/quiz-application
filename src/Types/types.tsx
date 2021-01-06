import React from "react";

export type Quiz = {
   category: string;
   correct_answer: string;
   difficulty: string;
   incorrect_answers: string[];
   question: string;
   type: string;
};

export type Question_Type = {
   question: string;
   answer: string;
   option: string[];
   correct_answer: string;
};

export type QuestionPropsType = {
   question: string;
   option: string[];
   callBack: (e: React.FormEvent<EventTarget>, ans: string) => void;
};
