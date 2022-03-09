import React from 'react';
import QuizQuestion from "../components/QuizQuestion";
import Scorecard from "../components/Scorecard";

function Quiz() {
    return (
        <div>
            <div>
                <QuizQuestion></QuizQuestion>
            </div>
            <div>
                <Scorecard></Scorecard>
            </div>
        </div>
    );
  }
  
  export default Quiz;