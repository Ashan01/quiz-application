import React, { useState } from "react";
import "../App.css";
import { QuestionPropsType } from "../Types/types";

export const QuestionCard: React.FC<QuestionPropsType> = ({ question, option, callBack }) => {
   let [selectedAns, setSelectedAns] = useState("");

   let handleChange = (ev: any) => {
      setSelectedAns(ev.target.value);
   };
   return (
      <div className="QuestionContainer">
         <div className="question">{question}</div>

         <form onSubmit={(e: React.FormEvent<EventTarget>) => callBack(e, selectedAns)}>
            {option.map((opt: string, ind: number) => {
               return (
                  <div key={ind}>
                     <label>
                        <input
                           type="radio"
                           name="opt"
                           className="radio"
                           value={opt}
                           required
                           checked={selectedAns === opt}
                           onChange={handleChange}
                        />
                        {opt}
                     </label>
                  </div>
               );
            })}
            <input type="submit" className="btn" />
         </form>
      </div>
   );
};
