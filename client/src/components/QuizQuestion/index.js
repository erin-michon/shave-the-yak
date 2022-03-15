import React, {Component} from 'react';
import {QuizData} from './QuizData';
import './style.css';

class QuizQuestion extends Component {

    state = {
        userAnswer: null,    //current users answer
        currentIndex: 0,  //current questions index
        options: [],       //the four options
        quizEnd: false,
        score: 0,
        disabled: true
    }
    
    

    //Component that holds the current quiz
    loadQuiz = () => {

        const {currentIndex} = this.state //get the current question index
               
        console.log(this.state)
        
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options : QuizData[currentIndex].options,
                answer: QuizData[currentIndex].correctOpt          
            }
        })
    }

    //Obtains user's answer, correct answer and score.  Then increments current index (next question).
    //Then checks to see if the userAnswer is equal to the correct answer, if so it increments the score.
    nextQuestionHandler = () => {
        const {userAnswer, answer, score, currentIndex} = this.state

        console.log("next question button clicked")
        console.log(answer)
        console.log(currentIndex)

        //Check if correct answer and increment score
        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            currentIndex: currentIndex + 1,
            userAnswer: null
        })

        console.log(currentIndex + "is the current index")


    }

    componentDidMount() {
        this.loadQuiz();
    }

    componentDidUpdate(prevProps, prevState){

        const{currentIndex} = this.state;
        
        if(currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    disabled: true,

                }
            })
        }
    }

    // Check the answer; sets the userAnswer state and enables the next button (disabled = false)
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled:false
        })
    }

    //Determines if the quiz has ended, if so - sets the quizEnd state to true
    //ADD FUNCTIONALITY TO DETERMINE IF X AMOUNT OF QUESTIONS HAVE BEEN LOST, REFER TO ONENOTE PROJ3 FOR LOGIC
    finishHandler =() => {

        const{currentIndex} = this.state;

        if(currentIndex === QuizData.length -1){
            
            this.setState(() => {

                return {
                    question: QuizData[currentIndex].question,
                    options : QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer          
                }
            });
        }
    };

    render() {

        const{question, options, currentIndex, userAnswer, quizEnd, score} = this.state;

        if(quizEnd) {
            return (
                <div>
                    <h1>Game Over. Final score is {score} points</h1>
                </div>
            )
        }

        return (
            <div>
                <h2> {question} </h2>
                {
                    options.map(option => 
                        <p key = {options.id} className={`options ${userAnswer === option? "selected" : null}`} 
                        onClick = {() => this.checkAnswer(option)}
                        >
                            {option}
                        </p>
                    )
                }

                {currentIndex < QuizData.length -1 && 
                    <button disabled = {this.state.disabled} onClick = {this.nextQuestionHandler}>
                        Next Question
                    </button>
                }
                {currentIndex === QuizData.length-1 && 
                    <button onClick = {this.finishHandler} disabled = {this.state.disabled}>
                        Finish
                    </button>
                }

            </div>
        )
    }
}

export default QuizQuestion
  



//   return (
//     <div>
//         <div>
//             <h2>QUESTION</h2>
//             <ul>
//                 <li>Choice 1</li>
//                 <li>Choice 2</li>
//                 <li>Choice 3</li>
//                 <li>Choice 4</li>
//             </ul>
//             <button>Next Question</button>
//         </div>
//         <div>
//             <h2> Your Score</h2>
//             <h3> Current Score Shown Here</h3>
//             <button>Submit Score</button>
//         </div>
        
//     </div>
// )


//   render() {
//     const {
//         question, options, currentIndex, userAnswer, quizEnd} = this.state //get the current state
    
    
//     if(quizEnd) {
//         return (
//             <div>
//                 <h1>Game Over. Final score is {this.state.score} points</h1>
//                 <p>The correct Answers for the quiz are</p>
//                 <ul>
//                     {QuizData.map((item, index) => (
//                         <li className='ui floating message options'
//                             key={index}>
//                                 {item.answer}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
            
//     return (
//         <div>
//             <h2>{question}</h2>
//             <span>{`Question ${currentIndex} of ${QuizData.length -1}`}</span>
//             {options.map(option => (  //for each option, new paragraph
//                 <p key={option.id} 
//                 className={`ui floating message options
//                 ${userAnswer === option ? "selected" : null}
//                 `}
//                 onClick= {() => this.checkAnswer(option)}

//                 >
//                     {option}
//                 </p>
//             ))}
//             {currentIndex < QuizData.length -1 &&
//             <button 
//             className="ui inverted button"
//             disabled = {this.state.disabled}
//             onClick = {this.nextQuestionHander}
//                 >Next Question</button>
//             }
//                 {currentIndex === QuizData.length -1 &&
//                 <button
//                 className="ui inverted button"
//                 disabled = {this.state.disabled}
//                 onClick = {this.finishHandler}
//                 >Finish</button>
//                 }
//         </div>
//     )
// }