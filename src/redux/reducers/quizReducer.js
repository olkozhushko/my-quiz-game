import {QUESTIONS_FETCHED, NEXT_QUESTION, PREVIOUS_QUESTION, INCREASE_SCORE, FINISH_GAME, DECREASE_SCORE, RESET_GAME} from "../types"


const initialState = {
    questions: null,
    score: localStorage.getItem('score') || 0,
    currentQuestion: localStorage.getItem('score') || 0,
    gameIsFinished: localStorage.getItem('gameIsFinished') || false
}

export default (state = initialState, action) => {
    const {type, questions, answer} = action

    if(type === QUESTIONS_FETCHED) {
        return {...state, questions}
    }
    if(type === NEXT_QUESTION) {
        localStorage.setItem('currentQuestion', state.currentQuestion + 1)
        return {...state, currentQuestion: +state.currentQuestion + 1}
    }
    if(type === PREVIOUS_QUESTION) {
        localStorage.setItem('currentQuestion', +state.currentQuestion - 1)
        return {...state, currentQuestion: +state.currentQuestion - 1}
    }
    if(type === INCREASE_SCORE) {
        let calcScore = +state.score + 1

        localStorage.setItem('score', calcScore)

        return {...state, score: calcScore}
    }
    if(type === DECREASE_SCORE) {
        let calcScore = +state.score - 1

        calcScore = calcScore < 0 ? 0 : calcScore

        localStorage.setItem('score', calcScore)

        return {...state, score: calcScore}
    }
    if(type === RESET_GAME) {
        localStorage.removeItem('currentQuestion', 0)
        localStorage.removeItem('score')
        localStorage.removeItem('quizHistory')
        localStorage.removeItem('gameIsFinished')

        return {...state, score: 0, currentQuestion: 0, gameIsFinished: false}
    }
    if(type === FINISH_GAME) {
        localStorage.setItem('gameIsFinished', true)
        return {...state, gameIsFinished: true}
    }
    return state
}