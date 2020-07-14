import styled from 'styled-components'

const StyledGameView = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    .game-wrapper {
        width: 80%;
        min-height: 400px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
        padding: 2rem;
        border-radius: 0.5rem;
        h1 {
            background: #7192b3;
            color: #fff;
            margin: -2rem -2rem 0 -2rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
        }
        @media screen and (min-width: 600px) and (max-width: 900px) {
            width: 100%;
        }
        @media screen and (min-width: 601px) {
            width: 60%;
        }
        @media screen and (min-width: 1201px) {
            width: 60%;
        }
    }
    .btn-active {
        background: #d2614d !important;
    }
    .general-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        & > div {
            margin-top: 1rem;
            &:first-child {
                span {
                    &:first-child {
                        background: #8f2cfb;
                    }
                }
            }
            span {
                &:first-child {
                    display: inline-block;
                    background: #e07878;
                    padding: 0.6rem 1rem;
                    font-size: 1rem;
                    border-radius: 0.3rem;
                    color: #fff;
                    text-transform: uppercase;
                    font-weight: 600;
                }
                &:last-child {
                    margin-left: 1rem;
                    font-size: 1.4rem;
                }
            }
        }
    }
    .questions-block {
        h3 {
            padding: 2rem 1rem;
            background: #f3f3f3;
            margin: 0;
            /* color: #fff; */
            font-size: 1.5rem;
            height: 150px;
            .question-count {
                background: #5368b3;
                padding: 0.3rem;
                border-radius: 0.2rem;
                span {
                    color: #fff;
                }
            }
        }
        .choices {
            margin-top: 2rem;
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            button {
                cursor: pointer;
                transition: 0.2s;
                &:hover {
                    opacity: 0.8;
                }
                border-radius: 0.2rem;
                font-size: 1.1rem;
                color: #fff;
                border: none;
                padding: 1rem 0;
                &:first-child {
                    margin-bottom: 2rem;
                    background: #558fa5;
                }
                &:last-child {
                    margin-bottom: 2rem;
                    background: #558fa5;
                }
            }
        }
    }
    .btn-step {
        background: none;
        border-radius: 0.3rem;
        padding: 0.45rem 1rem;
        text-transform: uppercase;
        border: 2px solid darkblue;
        cursor: pointer;
        font-weight: 500;
        &.btn-prev {
            border-color: #e07878;
        }
        &.btn-next {
            border-color: dodgerblue;
        }
        &.btn-finish {
            border-color: violet;
        }
    }
    .game-controls {
        display: flex;
        justify-content: space-between;
        padding: 2rem 1rem;
    }
    .lds-circle {
        display: inline-block;
        transform: translateZ(1px);
        margin-top: 200px;
    }
    .spinner-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lds-circle > div {
        display: inline-block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        background: #c86b97;
        animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    @keyframes lds-circle {
        0%,
        100% {
            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
        }
        0% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(1800deg);
            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
        }
        100% {
            transform: rotateY(3600deg);
        }
    }
`

export default StyledGameView
