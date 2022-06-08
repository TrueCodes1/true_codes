import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS
import FloatSubSub from "../../animations/Home/FloatSubSub";
import FloatSubSubOut from "../../animations/Home/FloatSubSubOut";

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.div`

    @media only screen and (min-width: 10px) and (max-width: 370px) {

        font-size: .75rem;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;
        margin-top: 20px;
        min-width: 78vw;
        max-width: 78vw;

    }

    @media only screen and (min-width: 371px) and (max-width: 576px) {

        font-size: 3.75vw;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;
        margin-top: 20px;
        min-width: 78vw;
        max-width: 78vw;

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        font-size: 3.5vw;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;
        margin-top: 20px;
        min-width: 78vw;
        max-width: 78vw;

    }

    @media only screen and (min-width: 992px) {

        min-width: 400px;
        max-width: 400px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        color: ${secondaryColor};
        font-size: 2.5vh;
        opacity: .75;
        padding: 10px 0;
        opacity: 0;
        
        &.float {

            animation: .75s 1 ${FloatSubSub}

        }
        
        &.float-out {

            animation .75s 1 ${FloatSubSubOut}

        }

        &.dark{

            color: ${secondaryColor};
            transition: all .25s ease

        }
        
        &.light{

            color: ${primaryColor};
            transition: all .25s ease

        }

    }

`