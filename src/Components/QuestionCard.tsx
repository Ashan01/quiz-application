import React, { useState } from "react";
import { QuestionPropsTpes } from "../Types/types";
import "../App.css";

export const QuestionCard: React.FC<QuestionPropsTpes> = ({ question, option }) => {
   let [val, setVal] = useState("");

   let handleSubmit = (e: any) => {
      e.preventDefault();
      console.log(val);
   };
   return (
      <div>
         <h3 className="question">Q: {question}</h3>

         <form onSubmit={handleSubmit}>
            {option.map((opt, ind) => {
               return (
                  <label key={ind} className="radio">
                     <input type="radio" required value={opt} onChange={(e) => setVal(e.target.value)} />
                     {opt}
                  </label>
               );
            })}
            <button className="btn">Submit</button>
         </form>
      </div>
   );
};
