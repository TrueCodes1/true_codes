import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.div`

    @media only screen and (max-width: 576px) {

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

    }

    @media only screen and (min-width: 992px) {

        position: absolute;
        min-width: 60vw;
        max-width: 60vw;
        min-height: 30vh;
        max-height: 30vh;
        top: 35vh;
        left: 20vw;/*
        border: 2px solid ${secondaryColor};
        border-radius: 2.5vh;
        box-shadow:  0 0 10px #e9f1f7bb;*/
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        display: none;

    }
    
`
