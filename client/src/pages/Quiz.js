import React from 'react';
import QuizQuestion from "../components/QuizQuestion";
import Scorecard from "../components/Scorecard";

function Quiz() {
    return (
        <div className="px-32 flex justify-center text-center text-white ">
            <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-center">
                <QuizQuestion></QuizQuestion>
            </div>
            {/* <div className='ml-3 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-end'>
                <Scorecard></Scorecard>
            </div> */}
        </div>
    );
  }
  
  export default Quiz;