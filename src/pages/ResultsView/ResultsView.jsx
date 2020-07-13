import React, { useMemo } from 'react'
// import {useHistory} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/actions/authActions'
import { resetGame } from '../../redux/actions/quizActions'

import { useHistory } from 'react-router-dom'

import StyledResultsView from './StyledResultsView'

const ResultsView = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const { score, questions } = useSelector(state => state.quiz)

    const definePlayerStatus = useMemo(() => {
        if (!questions) return
        if (score > questions.length / 2) {
            return { text: 'You are a Winner', color: 'green' }
        } else if (score == questions.length / 2) {
            return { text: 'It is the draw dude', color: 'grey' }
        } else {
            return { text: 'You are a Loser', color: 'red' }
        }
    })

    const handleNewGame = async () => {
        await dispatch(logOut())
        dispatch(resetGame())
    }

    return (
        <StyledResultsView>
            <div>
                <h1>Results</h1>
                <div className='score'>
                    <span>Score</span>
                    <span>{score}</span>
                </div>
                <div className='player-result'>
                    {definePlayerStatus && (
                        <p style={{ color: definePlayerStatus.color }}>
                            {definePlayerStatus.text}
                        </p>
                    )}
                </div>
                <section className='controls'>
                    <button
                        type='button'
                        onClick={() => {
                            history.push('/')
                            dispatch(resetGame())
                        }}
                    >
                        Play Again
                    </button>
                    <button type='button' onClick={handleNewGame}>
                        New game
                    </button>
                </section>
            </div>
        </StyledResultsView>
    )
}

export default ResultsView
