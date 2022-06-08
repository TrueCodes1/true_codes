import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS
import Float from "../../animations/Home/Float";
import FloatOut from "../../animations/Home/FloatOut";

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

        font-size: 2.5rem;
        font-weight: 600;
        line-height: 1.1em;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;

    }

    @media only screen and (min-width: 371px) and (max-width: 576px) {

        font-size: 12.5vw;
        font-weight: 600;
        line-height: 1.1em;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        font-size: 10vw;
        font-weight: 600;
        line-height: 1.1em;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;

    }

    @media only screen and (min-width: 992px) {

        min-width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        color: ${secondaryColor};
        font-size: 10vh;
        font-weight: 600;
        padding: 0 0 10px 0;
        opacity: 0;

        &.float {

            animation: .75s 1 ${Float}

        }

        &.float-out {

            animation .75s 1 ${FloatOut};
            opacity: 0

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