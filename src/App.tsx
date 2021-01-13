import React from "react";
import "./App.css";
import { initNotification } from "./Services/worker";

// import React, { useEffect, useState } from 'react';

// import { QuestionCard } from './Components/QuestionCard';
// import { FetchData } from './Services/fetchData';
// import { QuizTypes } from './Types/types';

const App = () => {
   // let [data, setData] = useState<QuizTypes[]>([]);
   // let [currentStep, setCurrentSteps] = useState(0);
   // let [score, setScore] = useState(0);
   // let [showResult, setShowResult] = useState(false);

   // useEffect(() => {
   //    const getData = async () => {
   //       let question: QuizTypes[] = await FetchData();
   //       setData(question);
   //    };
   //    getData();
   // }, []);

   // function handleSubmit(e: React.FormEvent<EventTarget>, userAns: string) {
   //    e.preventDefault();
   //    console.log(`user Ans ${userAns} correctAns ${data[currentStep].correct_answer}`);

   //    const Question = data[currentStep];

   //    if (userAns === Question.correct_answer) {
   //       setScore(++score);
   //    }

   //    if (currentStep !== data.length - 1) {
   //       setCurrentSteps(++currentStep);
   //    } else {
   //       setShowResult(true);
   //    }
   // }

   // if (!data.length) {
   //    return <h3>Loading...</h3>;
   // }

   // if (showResult) {
   //    return (
   //       <div className="container_1">
   //          <h1>Results</h1>

   //          <h1>{`${score} out of ${data.length}`}</h1>
   //       </div>
   //    );
   // }
   return (
      // <div className="container">
      //    <h1>Quiz App</h1>
      //    <QuestionCard
      //       question={data[currentStep].question}
      //       option={data[currentStep].option}
      //       callBack={handleSubmit}
      //    />
      // </div>
      <div>
         <h1>Helllo World</h1>
         <button onClick={initNotification}>Configure</button>
      </div>
   );
};

export default App;
