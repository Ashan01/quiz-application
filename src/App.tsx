import React, { useEffect, useState } from "react";
import "./App.css";
import { QuestionQuiz } from "./services/quiz_question";
import { Question_Type } from "./Types/types";
import { QuestionCard } from "./Component/QuestionCard";

function App() {
   let [quiz, setQuiz] = useState<Question_Type[]>([]);
   let [currentSteps, setcurrentSteps] = useState(0);
   let [score, setScore] = useState(0);
   let [showResults, setShowResults] = useState(false);

   useEffect(() => {
      async function fetchData() {
         let question: Question_Type[] = await QuestionQuiz(5, "easy");
         setQuiz(question);
      }
      fetchData();
   }, []);

   function handleSubmit(e: React.FormEvent<EventTarget>, userAns: any) {
      e.preventDefault();

      let currentQuestion: Question_Type = quiz[currentSteps];

      console.log(`correct Ans ${currentQuestion.correct_answer} userAns ${userAns}`);

      if (userAns === currentQuestion.correct_answer) {
         setScore(++score);
      }

      if (currentSteps !== quiz.length - 1) {
         setcurrentSteps(++currentSteps);
      } else {
         setShowResults(true);
      }
   }
   if (!quiz.length) {
      return <h3>Loading.......</h3>;
   }

   if (showResults) {
      return (
         <div className="container_1">
            <h3>Results</h3>
            <p>{`The total score is ${score} out of ${quiz.length}`}</p>
         </div>
      );
   }
   return (
      <div className="container">
         <QuestionCard
            option={quiz[currentSteps].option}
            question={quiz[currentSteps].question}
            callBack={handleSubmit}
         />
      </div>
   );
}

export default App;
