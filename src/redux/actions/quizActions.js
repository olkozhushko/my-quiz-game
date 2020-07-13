import {
    QUESTIONS_FETCHED,
    NEXT_QUESTION,
    PREVIOUS_QUESTION,
    INCREASE_SCORE,
    DECREASE_SCORE,
    RESET_GAME,
    FINISH_GAME
} from '../types'
import fetchQuestions from '../../services/apiCalls/fetchQuestions'

export const getQuestions = () => async dispatch => {
    try {
        const data = await fetchQuestions()
        dispatch({ type: QUESTIONS_FETCHED, questions: data.results })
    } catch (err) {
        console.log(err)
    }
}

export const nextQuestion = () => ({
    type: NEXT_QUESTION
})

export const previousQuestion = () => ({
    type: PREVIOUS_QUESTION
})

export const increaseScore = () => ({
    type: INCREASE_SCORE
})

export const decreaseScore = () => ({
    type: DECREASE_SCORE
})

export const resetGame = () => ({
    type: RESET_GAME
})

export const finishGame = () => ({
    type: FINISH_GAME
})
