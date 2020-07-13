import styled from "styled-components"

const StyledResultsView = styled.section`
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
        width: 90%;
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
    .score {
        margin: 1rem 0;
        span:first-child {
            display: inline-block;
        background: #e07878;
        padding: 0.6rem 1rem;
        font-size: 1rem;
        border-radius: 0.3rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin-right: 1rem;
        }
        span:last-child {
            font-size: 1.5rem;
        }
    }
    .player-result {
        padding: 4rem 0;
        background: #f3f3f3;
        p {
            margin: 0;
            font-size: 2rem;
            text-align: center;
        }
    }
    .controls {
        padding: 3rem 0 1rem 0;
        display: flex;
        justify-content: space-between;
        button {
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            color: #fff;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
            font-size: 1rem;
            border: none;
            text-transform: uppercase;
            &:first-child {
                background: dodgerblue;
            }
            &:last-child {
                background: #3e8869;
            }
            cursor: pointer;
            transition: 0.2s linear;
            &:hover {
                opacity: 0.8;
            }
        }
    }
}`

export default StyledResultsView