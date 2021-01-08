import React, { useEffect, useState } from "react";
import { FetchData } from "./Services/fetchData";
import { QuizTypes } from "./Types/types";
import { QuestionCard } from "./Components/QuestionCard";
import "./App.css";

const App = () => {
   let [data, setData] = useState<QuizTypes[]>([]);

   useEffect(() => {
      const getData = async () => {
         let question: QuizTypes[] = await FetchData();
         setData(question);
         <h1>They Run</h1>;
      };
      getData();
   }, []);

   if (!data.length) {
      return <h3>Loading...</h3>;
   }

   return (
      <div className="container">
         <h1>Quiz App</h1>
         <QuestionCard question={data[0].question} option={data[0].option} />
      </div>
   );
};

export default App;
