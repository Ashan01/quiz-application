import React, { useState } from "react";
import { QuestionPropsTpes } from "../Types/types";
import "../App.css";

export const QuestionCard: React.FC<QuestionPropsTpes> = ({ question, option, callBack }) => {
   let [selectedAns, setSelectedAns] = useState("");

   let handleSelection = (e: any) => {
      setSelectedAns(e.target.value);
   };

   return (
      <div>
         <h3 className="question">Q: {question}</h3>

         <form onSubmit={(e: React.FormEvent<EventTarget>) => callBack(e, selectedAns)}>
            {option.map((opt, ind) => {
               return (
                  <label key={ind} className="radio">
                     <input type="radio" value={opt} onChange={handleSelection} checked={selectedAns === opt} />
                     {opt}
                  </label>
               );
            })}
            <button className="btn">Submit</button>
         </form>
      </div>
   );
};
