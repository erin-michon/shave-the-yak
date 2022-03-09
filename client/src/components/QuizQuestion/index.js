//updated file name from Quiz to Quiz question to distinguish between "Quiz" page and component

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
            </div>
            <button>Next Question</button>
        </div>
    );
  }
  
  export default QuizQuestion;