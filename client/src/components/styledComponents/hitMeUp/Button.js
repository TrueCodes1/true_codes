import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import AppearButton from "../../animations/hitMeUp/AppearButton";
import LeaveButton from "../../animations/hitMeUp/LeaveButton";

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.div`

    @media only screen and (max-width: 576px) {

        min-width: fit-content;
        max-width: fit-content;
        font-family: SVN-Gilroy;    
        font-size: 20px;
        font-weight: 300;
        padding: .75em 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${primaryColor};
        background: ${secondaryColor};
        border-radius: 10px;
        opacity: 1;
        transition: all .25s ease;
        margin-left: 10px; 
        box-shadow:  10px 10px 20px #0d1318,
                    -10px -10px 20px #19232e;
        cursor: pointer;

        &:hover{

            opacity: 1;

        }

        &.come{

            animation: 1 .35s ${AppearButton}

        }

        &.leave{

            animation: 1 .35s ${LeaveButton}

        }

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        min-width: fit-content;
        max-width: fit-content;
        font-family: SVN-Gilroy;
        font-size: 25px;
        font-weight: 300;
        padding: .75em 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${primaryColor};
        background: ${secondaryColor};
        border-radius: 10px;
        opacity: 1;
        transition: all .25s ease;
        margin-left: 10px; 
        box-shadow:  10px 10px 20px #0d1318,
                    -10px -10px 20px #19232e;
        cursor: pointer;

        &:hover{

            opacity: 1;

        }

        &.come{

            animation: 1 .35s ${AppearButton}

        }

        &.leave{

            animation: 1 .35s ${LeaveButton}

        }

    }

    @media only screen and (min-width: 992px) {

        min-width: 50%;
        max-width: 50%;
        font-size: 20px;
        padding: .75em 0 .75em 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: ${primaryColor};
        opacity: .5;
        transition: all .25s ease;
        cursor: pointer;

        &:hover{

            padding: .75em 0 .75em 40px;
            opacity: 1;
            transition: all .25s ease;

        }

        &.come{

            animation: 1 .35s ${AppearButton}

        }

        &.leave{

            animation: 1 .35s ${LeaveButton}

        }

    }

`