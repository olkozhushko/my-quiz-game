import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
    increaseScore,
    decreaseScore,
    finishGame,
    nextQuestion,
    previousQuestion
} from '../../redux/actions/quizActions'

import StyledGameView from './StyledGameView'

const GameView = () => {
    const user = useSelector(state => state.auth.user)
    const { questions, currentQuestion, score, questionsLoading } = useSelector(
        state => state.quiz
    )

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const quizHistory = localStorage.getItem('quizHistory')
            ? JSON.parse(localStorage.getItem('quizHistory'))
            : []

        setQuizHistory(quizHistory)
    }, [])

    const getCurrentQuestion = () => {
        if (!questions) return
        return questions[currentQuestion].question
    }

    const checkIfQuizFinished = () => {
        return questions && questions.length < +currentQuestion + 2
    }

    const [quizHistory, setQuizHistory] = useState([])

    const updateHistory = answer => {
        const newHistory = [...quizHistory]
        newHistory.splice(currentQuestion, 1, {
            choice: answer,
            correctAnswerGiven: isCorrectAnswerGiven
        })

        setQuizHistory(newHistory)

        localStorage.setItem('quizHistory', JSON.stringify(quizHistory))
    }

    const [isCorrectAnswerGiven, setIsCorrectAnswerGiven] = useState(false)
    const [buttonPressedName, setButtonPressedName] = useState(null)

    const handleAnswer = answer => {
        if (!questions) return
        if (buttonPressedName === answer) return

        setButtonPressedName(answer)
        const checkIfCorrect =
            questions[currentQuestion].correct_answer === answer

        if (isCorrectAnswerGiven && !checkIfCorrect) {
            dispatch(decreaseScore())
        }

        setIsCorrectAnswerGiven(checkIfCorrect)

        checkIfCorrect && dispatch(increaseScore())
    }

    const handleNextQuestionNavigation = () => {
        updateHistory(buttonPressedName)
        setButtonPressedName(null)
        setIsCorrectAnswerGiven(false)
        dispatch(nextQuestion())
    }

    const handlePreviousQuestionNavigation = () => {
        dispatch(previousQuestion())

        //when navigating to previous page we need to set current question state

        const currentQuestionContent =
            quizHistory[currentQuestion] || quizHistory[currentQuestion - 1]

        setButtonPressedName(currentQuestionContent.choice)
        setIsCorrectAnswerGiven(currentQuestionContent.correctAnswerGiven)
    }

    const goToResultPage = () => {
        dispatch(finishGame())
        history.push('/results')
    }

    console.log(questionsLoading, 'questionsLoading')

    return (
        <StyledGameView>
            {!questionsLoading && questions ? (
                <div className='game-wrapper'>
                    <h1>Quiz Game</h1>
                    <section className='general-info'>
                        <div>
                            <span>Player:</span>
                            <span>{user}</span>
                        </div>
                        <div>
                            <span>Score</span>
                            <span>{score}</span>
                        </div>
                    </section>
                    <section className='questions-block'>
                        <h3>
                            <div
                                style={{
                                    display: 'inline-block',
                                    marginRight: '1rem'
                                }}
                                className='question-count'
                            >
                                <span>{+currentQuestion + 1}/</span>
                                <span>{questions.length}</span>
                            </div>
                            {getCurrentQuestion()}
                        </h3>
                        <div className='choices'>
                            <button
                                type='button'
                                style={{
                                    boxShadow:
                                        buttonPressedName === 'True'
                                            ? '0 0 10px rgba(0, 0, 0, 0.7)'
                                            : 'none'
                                }}
                                onClick={() => handleAnswer('True')}
                            >
                                True
                            </button>
                            <button
                                type='button'
                                style={{
                                    boxShadow:
                                        buttonPressedName === 'False'
                                            ? '0 0 10px rgba(0, 0, 0, 0.7)'
                                            : 'none'
                                }}
                                onClick={() => handleAnswer('False')}
                            >
                                False
                            </button>
                        </div>
                    </section>
                    <section className='game-controls'>
                        <button
                            className='btn-step btn-prev'
                            type='button'
                            disabled={!+currentQuestion}
                            onClick={handlePreviousQuestionNavigation}
                        >
                            Previous
                        </button>
                        {!checkIfQuizFinished() ? (
                            <button
                                className='btn-step btn-next'
                                type='button'
                                disabled={!buttonPressedName}
                                onClick={handleNextQuestionNavigation}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                className='btn-step btn-finish'
                                type='button'
                                onClick={goToResultPage}
                                disabled={!buttonPressedName}
                            >
                                Finish
                            </button>
                        )}
                    </section>
                </div>
            ) : (
                <div className='spinner-wrapper'>
                    <div className='lds-circle'>
                        <div></div>
                    </div>
                </div>
            )}
        </StyledGameView>
    )
}

export default GameView
