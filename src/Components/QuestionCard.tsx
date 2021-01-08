import React from "react";
import { QuestionPropsTpes } from "../Types/types";
import "../App.css";

export const QuestionCard: React.FC<QuestionPropsTpes> = ({ question, option }) => {
   return (
      <div>
         <h3 className="question">{question}</h3>
         <form>
            {option.map((opt, ind) => {
               return (
                  <label key={ind} className="radio">
                     <input type="radio" required value={opt} />
                     {opt}
                  </label>
               );
            })}
            <button className="btn">Submit</button>
         </form>
      </div>
   );
};
