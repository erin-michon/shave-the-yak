import React from 'react';
import QuizQuestion from "../components/QuizQuestion";

function Quiz() {
    return (
        <div className="flex justify-center h-screen items-center text-center text-white ">
            <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-center">
                <QuizQuestion></QuizQuestion>
            </div>
        </div>
    );
  }
  
  export default Quiz;