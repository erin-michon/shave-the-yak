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
        console.log(score + " is score")

        //Check for correct answer and increment score
        if(userAnswer === answer){

            this.setState({

                score: score + 1
            })

            console.log("correct answer selected")
            console.log(score + " is the current score")
          
        } else {
            console.log ("wrong answer selected")
            console.log(score + " is the current score")
        }

        this.setState({
            currentIndex: currentIndex + 1,
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
        
        if(currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options : QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].correctOpt          
                }
            })

            this.setState(() => {
                return {
                    disabled: true,
                }
            })
        }
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
                <h2 className='m-5'> {question} </h2>
                {
                    options.map((option) => 

                        <ul key = {option} className={`options ${userAnswer === option? "selected" : null}`} 
                        onClick = {() => this.checkAnswer(option)}>
                        
                            <li>{option}</li>
                                                
                        </ul>
                    )
                }

                {currentIndex < QuizData.length -1 && 
                    <button className='mt-5 border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2' disabled = {this.state.disabled} onClick = {this.nextQuestionHandler}>
                        Next Question
                    </button>
                }
                {currentIndex === QuizData.length-1 && 
                    <button onClick = {this.finishHandler} disabled = {this.state.disabled} className='mt-5 border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2'>
                        Finish
                    </button>
                }

            </div>
        )
    }
}

export default QuizQuestion