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

export default styled.div`

    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;/*
    border: 2px solid ${primaryColor};
    background: ${primaryColor};*/
    border-radius: 20px;
    cursor: pointer;

    &.dark {

        background: ${secondaryColor}

    }

    &.light {

        background: ${primaryColor}

    }
    
`