import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.form`

    @media only screen and (max-width: 576px) {

        position: absolute;
        min-width: 90vw;
        max-width: 90vw;
        min-height: 60vh;
        max-height: 60vh;
        left: 5vw;
        top: 15vh;
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        position: absolute;
        min-width: 80vw;
        max-width: 80vw;
        min-height: 60vh;
        max-height: 60vh;
        left: 5vw;
        top: 15vh;
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;

    }

    @media only screen and (min-width: 992px) {

        position: absolute;
        min-width: 60vw;
        max-width: 60vw;
        min-height: 50vh;
        max-height: 50vh;
        top: 25vh;
        left: 5vw;/*
        border: 2px solid red;*/
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-family: 'SVN-Gilroy';
        visibility: hidden;

    }
    
`