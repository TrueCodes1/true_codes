import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import FloatIn from "../../animations/Nav/FloatIn";
import Bubble from "../../animations/Nav/Bubble";

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.p`

    @media only screen and (max-width: 576px) {

        text-decoration: none;
        color: ${secondaryColor};
        opacity: 0;
        margin: 2vh 0;

        &.float{

            animation: .75s 1 ${FloatIn};

        }

        &.bubble {

            animation: infinite 3s ${Bubble}

        }

        &.dark{

            color: ${secondaryColor};

        }
        
        &.light{

            color: ${primaryColor};

        }

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        text-decoration: none;
        color: ${secondaryColor};
        opacity: 0;
        margin: 3vh 0;

        &.float{

            animation: .75s 1 ${FloatIn};

        }

        &.bubble {

            animation: infinite 3s ${Bubble}

        }

        &.dark{

            color: ${secondaryColor};

        }
        
        &.light{

            color: ${primaryColor};

        }

    }

    @media only screen and (min-width: 992px) {

        text-decoration: none;
        color: ${secondaryColor};
        opacity: 0;

        &.float{

            animation: .75s 1 ${FloatIn};

        }

        &.bubble {

            animation: infinite 3s ${Bubble}

        }

        &.dark{

            color: ${secondaryColor};

        }
        
        &.light{

            color: ${primaryColor};

        }

    }

`