import React, { useEffect, useState } from "react";
import { FetchData } from "./Services/fetchData";
import { QuizTypes } from "./Types/types";
import { QuestionCard } from "./Components/QuestionCard";
import "./App.css";

const App = () => {
   let [data, setData] = useState<QuizTypes[]>([]);
   let [currentStep, setCurrentSteps] = useState(0);

   useEffect(() => {
      const getData = async () => {
         let question: QuizTypes[] = await FetchData();
         setData(question);
      };
      getData();
   }, []);

   function handleSubmit() {}
   if (!data.length) {
      return <h3>Loading...</h3>;
   }

   return (
      <div className="container">
         <h1>Quiz App</h1>
         <QuestionCard
            question={data[currentStep].question}
            option={data[currentStep].option}
            callBack={handleSubmit}
         />
      </div>
   );
};

export default App;
