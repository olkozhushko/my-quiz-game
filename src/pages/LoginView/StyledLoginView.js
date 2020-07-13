import styled from 'styled-components'

const StyledLoginView = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        width: 40%;
        min-height: 400px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
        padding: 2rem;
        border-radius: 0.5rem;
        @media screen and (max-width: 600px) {
            width: 100%;
        }
        @media screen and (max-width: 900px) {
            width: 60%;
        }
        @media screen and (min-width: 901px) {
            width: 40%;
        }
        h1 {
            margin: -2rem -2rem 0 -2rem;
            padding: 1.5rem 0 1.5rem 1rem;
            background: #7192b3;
            font-size: 2rem;
            color: #fff;
        }

        p {
            margin: 2rem 0;
            font-size: 1rem;
            color: grey;
        }
    }
    form {
        div {
            display: flex;
            flex-direction: column;
            label {
                font-size: 1rem;
                margin-bottom: 1rem;
            }
            input {
                padding: 0.5rem;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 0.25rem;
            }
        }
        p {
            margin: 0;
            color: tomato;
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }
        & .button-wrapper {
            margin-top: 1rem;
            padding: 1rem 0;
            display: flex;
            justify-content: center;
            button {
                background: #8a8aff;
                padding: 0.5rem 2rem;
                font-size: 1rem;
                border-radius: 0.2rem;
                color: #fff;
                border: none;
                cursor: pointer;
                text-transform: uppercase;
                font-weight: 600;
                font-size: 1rem;
            }
        }
    }
`
export default StyledLoginView
