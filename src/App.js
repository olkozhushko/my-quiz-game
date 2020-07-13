import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import PrivateRoute from './components/common/PrivateRoute'

import LoginView from './pages/LoginView/LoginView.jsx'
import GameView from './pages/GameView/GameView.jsx'
import ResultsView from './pages/ResultsView/ResultsView'
import NotFoundPage from './pages/NotFoundPage'

import AppLoader from './components/common/AppLoader'

import { getQuestions } from './redux/actions/quizActions'

import './App.css'

function App() {
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.root.isLoading)
    const gameIsFinished = useSelector(state => state.quiz.gameIsFinished)

    console.log(isLoading, 'isLoading')

    useEffect(() => {
        dispatch(getQuestions())
    }, [])

    return (
        <>
            {isLoading && <AppLoader />}
            <Router>
                <Switch>
                    <Route exact path='/login'>
                        <LoginView />
                    </Route>
                    <PrivateRoute
                        exact
                        path='/'
                        component={GameView}
                        shouldBeRedirected={gameIsFinished}
                        redirectTo='/results'
                    />
                    <PrivateRoute
                        exact
                        path='/results'
                        component={ResultsView}
                        shouldBeRedirected={!gameIsFinished}
                        redirectTo='/'
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </>
    )
}

export default App
