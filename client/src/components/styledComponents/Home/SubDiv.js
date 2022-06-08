import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS
import FloatSub from "../../animations/Home/FloatSub";
import FloatSubOut from "../../animations/Home/FloatSubOut";

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

        font-size: 1.75rem;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 20px;
        line-height: 1.15em;

    }

    @media only screen and (min-width: 371px) and (max-width: 576px) {

        font-size: 7.5vw;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 20px;
        line-height: 1.15em;

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        font-size: 6vw;
        color: ${secondaryColor};
        min-width: 100%;
        max-width: 100%;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 20px;
        line-height: 1.15em;

    }

    @media only screen and (min-width: 992px) {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        color: ${secondaryColor};
        font-size: 5vh;
        opacity: .5;
        padding: 0 0 10px 0;
        opacity: 0;
        
        &.float {

            animation: .75s 1 ${FloatSub}

        }
        
        &.float-out {

            animation .75s 1 ${FloatSubOut}

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
