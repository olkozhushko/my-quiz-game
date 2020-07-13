import React from "react"
import styled from "styled-components"
import {useHistory} from "react-router-dom"

const StyledNotFoundPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.1);
    h1 {
        font-size: 5rem;
        text-align: center;
    }
    button {
        padding: 0.4rem 2rem;
        border: 1px solid #000;
        text-transform: uppercase;
        font-size: 1rem;
        border-radius: 0.25rem;
        font-weight: 600;
        cursor: pointer;
    }
`

const NotFoundPage = () => {
   
    const history = useHistory()

    return (
        <StyledNotFoundPage>
            <h1>Page Not Found</h1>
            <button type="button" onClick={() => history.push('/')}>Navigate to main page</button>
        </StyledNotFoundPage>
    )
}

export default NotFoundPage