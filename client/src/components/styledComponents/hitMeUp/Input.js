import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import AppearInput from "../../animations/hitMeUp/AppearInput";
import LeaveInput from "../../animations/hitMeUp/LeaveInput";

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.input`

    @media only screen and (max-width: 576px) {

        min-width: 100%;
        max-width: 100%;
        margin: 5px 0;
        font-size: 20px;
        font-family: SVN-Gilroy;
        font-weight: 500;
        border-radius: 10px;
        background: #e0e0e0;
        outline: none;
        border: none;
        padding: 1em;/*
        WebkitBorderRadius: 15px;*/
        border-radius: 10px;
        background: ${primaryColor};/*
        WebkitBoxShadow: 5px 5px 20px #0e141a, -5px -5px 20px #18222c;*/
        box-shadow:  10px 10px 20px #0d1318,
                    -10px -10px 20px #19232e;
        color: ${secondaryColor};

        &::placeholder{

            font-weight: 500;

        }

        &.come{

            animation: 1 1.5s ${AppearInput}

        }
        
        &.leave{

            animation: 1 1.5s ${LeaveInput}

        }

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        min-width: 100%;
        max-width: 100%;
        margin: 5px 0;
        font-size: 25px;
        font-family: SVN-Gilroy;
        font-weight: 500;
        border-radius: 10px;
        background: #e0e0e0;
        outline: none;
        border: none;
        padding: .75em;/*
        WebkitBorderRadius: 15px;*/
        border-radius: 10px;
        background: ${primaryColor};/*
        WebkitBoxShadow: 5px 5px 20px #0e141a, -5px -5px 20px #18222c;*/
        box-shadow:  10px 10px 20px #0d1318,
                    -10px -10px 20px #19232e;
        color: ${secondaryColor};

        &::placeholder{

            font-weight: 500;

        }

        &.come{

            animation: 1 1.5s ${AppearInput}

        }
        
        &.leave{

            animation: 1 1.5s ${LeaveInput}

        }

    }

    @media only screen and (min-width: 992px) {

        min-width: 50%;
        max-width: 50%;
        margin: 10px 0;
        font-size: 20px;
        font-family: SVN-Gilroy;
        border-radius: 15px;
        background: #e0e0e0;
        outline: none;
        border: none;
        padding: 1em;/*
        WebkitBorderRadius: 15px;*/
        border-radius: 10px;
        background: ${primaryColor};/*
        WebkitBoxShadow: 5px 5px 20px #0e141a, -5px -5px 20px #18222c;*/
        box-shadow:  13px 13px 26px #0d1318,
                    -13px -13px 26px #19232e;
        color: ${primaryColor};
        box-shadow: none;

        &::placeholder{

            font-weight: 400;

        }

        &.come{

            animation: 1 1.5s ${AppearInput}

        }
        
        &.leave{

            animation: 1 1.5s ${LeaveInput}

        }

    }

`