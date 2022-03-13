import React from 'react';

function QuizQuestion() {
    return (
        <div>
            <div>
                <h2>QUESTION</h2>
                <ul>
                    <li>Choice 1</li>
                    <li>Choice 2</li>
                    <li>Choice 3</li>
                    <li>Choice 4</li>
                </ul>
                <button>Next Question</button>
            </div>
            <div>
                <h2> Your Score</h2>
                <h3> Current Score Shown Here</h3>
                <button>Submit Score</button>
            </div>
            
        </div>
    );
  }
  
  export default QuizQuestion;