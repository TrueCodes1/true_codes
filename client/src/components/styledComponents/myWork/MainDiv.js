import styled, { keyframes } from "styled-components";

export default styled.div`
            
    @media only screen and (max-width: 576px) {
        position: absolute;
        min-width: 90vw; 
        max-width: 90vw;
        min-height: 70vh;
        max-height: 70vh;
        top: 10vh;
        left: 5vw;
        display: none;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        position: absolute;
        min-width: 90vw; 
        max-width: 90vw;
        min-height: 70vh;
        max-height: 70vh;
        top: 15vh;
        left: 5vw;
        display: none;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
    }
    @media only screen and (min-width: 992px) {
        position: absolute;
        min-width: 80vw;
        max-width: 80vw;
        min-height: 70vh;
        max-height: 70vh;
        left: 5vw;
        top: 15vh;
        display: flex;
        opacity: 0;
        visibility: hidden;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
    }
`