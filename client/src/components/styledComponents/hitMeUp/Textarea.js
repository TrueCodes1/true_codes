import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import AppearInput from "../../animations/hitMeUp/AppearInput";
import LeaveTextarea from "../../animations/hitMeUp/LeaveTextarea";

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.textarea`

    @media only screen and (max-width: 576px) {

        min-width: 80%;
        max-width: 80%;
        min-height: 150px;
        max-height: 250px;
        margin: 5px 0;
        font-size: 20px;
        border-radius: 15px;
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
        font-family: 'SVN-Gilroy';
        resize: none;
        scrollbar-width: none;
        color: ${secondaryColor};

        &.come{

            animation: 1 1.5s ${AppearInput}

        }
        
        &.leave{

            animation: 1 1.5s ${LeaveTextarea}

        }
    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        min-width: 80%;
        max-width: 80%;
        min-height: 150px;
        max-height: 250px;
        margin: 5px 0;
        font-size: 25px;
        border-radius: 15px;
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
        font-family: 'SVN-Gilroy';
        resize: none;
        scrollbar-width: none;
        color: ${secondaryColor};

        &.come{

            animation: 1 1.5s ${AppearInput}

        }
        
        &.leave{

            animation: 1 1.5s ${LeaveTextarea}

        }

    }

    @media only screen and (min-width: 992px) {

        min-width: 50%;
        max-width: 50%;
        min-height:200px;
        max-height: 300px;
        margin: 10px 0;
        font-size: 20px;
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
        color: ${secondaryColor};
        font-family: 'SVN-Gilroy';
        resize: none;
        scrollbar-width: none;
        color: ${primaryColor};
        box-shadow: none;

        &.come{

            animation: 1 1.5s ${AppearInput}

        }
        
        &.leave{

            animation: 1 1.5s ${LeaveTextarea}

        }

    }

`