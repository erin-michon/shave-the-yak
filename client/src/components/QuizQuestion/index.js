import React, {Component} from 'react';
import {quizQuestions} from './QuizData';

export class QuizQuestion extends Component {

    constructor(props) {
        super(props)

        this.state = {

            userAnswer:null, //current users answer
            currentIndex:0,  //current questions index
            options: [opt1, opt2, opt3, opt4],     //the four options
            quizEnd: false,  //determines if it's the last question
            score: 0,        //holds the score
            disabled: true   // determines the status of the buttons - cannot click next without answering?

        }
    }

    //Component that holds the current quiz
    loadQuiz = () => {
        const {currentIndex} = this.state //get the current question index
        this.setState(() => {
            return {
                question: quizQuestions[currentIndex].question,
                options : quizQuestions[currentIndex].options,
                answer: quizQuestions[currentIndex].answer          
            }
        }
        )
    }

    //Obtains user's answer, correct answer and score.  Then increments current index (next question).
    //Then checks to see if the userAnswer is equal to the correct answer, if so it increments the score.
    nextQuestionHander = () => {
        const {userAnswer, answer, score} = this.state

        //Check if correct answer and increment score
        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null
        })

    }

    componentDidMount() {
        this.loadQuiz();
    }

    // Check the answer; sets the userAnswer state and enables the next button (disabled = false)
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled:false
        })
    }

    componentDidUpdate(prevProps, prevState){
        const{currentIndex} = this.state;
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    diabled: true,

                }
            })
        }
    }

    //Determines if the quiz has ended, if so - sets the quizEnd state to true
    //ADD FUNCTIONALITY TO DETERMINE IF X AMOUNT OF QUESTIONS HAVE BEEN LOST, REFER TO ONENOTE PROJ3 FOR LOGIC
    finishHandler =() => {
        if(this.state.currentIndex === quizQuestions.length -1){
            this.setState(() => {
                return {
                    question: quizQuestions[currentIndex].question,
                    options : quizQuestions[currentIndex].options,
                    answer: quizQuestions[currentIndex].answer          
                }
            });
        }
    };


    render() {

        const{question, options, opt1, opt2, opt3, opt4, currentIndex, userAnswer,  quizEnd} = this.state;

        return (
            <div>
                <h2> {question} </h2>
            </div>
        )
    }
}
  
export default QuizQuestion;



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