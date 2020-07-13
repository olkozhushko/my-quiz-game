import React, {useState} from "react"
import {Redirect} from "react-router-dom"
import {logIn} from "../../redux/actions/authActions"
import {useDispatch, useSelector} from "react-redux"

import StyledLoginView from "./StyledLoginView"

const LoginView = () => {

    // const history = useHistory()

    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    console.log(user, 'user')

    const [player, setPlayer] = useState('')
    const [playerError, setPlayerError] = useState(false)

    const handleStartGame = (e) => {
        e.preventDefault()
        if(!player) {
            setPlayerError(true)
            return
        }
        console.log('login')
        dispatch(logIn(player))
    }

    const handlePlayerChange = (e) => {
        setPlayer(e.target.value)
        e.target.value ? setPlayerError(false) : setPlayerError(true)
    }

    return (
        <>{!user ? <StyledLoginView>
            <div>
                <h1>Welcome/Login</h1>
                <p>To proceed you need to enter your player name and press start button</p>
                <form>
                    <div>
                        <label htmlFor="player">Player</label>
                        <input name="player" value={player} onChange={handlePlayerChange}/>
                    </div>
                    <p style={{visibility: playerError ? 'visible' : 'hidden'}}>You must enter player name first</p>
                    <div className="button-wrapper">
                       <button type="button" onClick={handleStartGame}>
                          Start
                       </button>
                    </div>
                </form>
            </div>
        </StyledLoginView> : <Redirect to="/"/>}
        </>
    )
}

export default LoginView