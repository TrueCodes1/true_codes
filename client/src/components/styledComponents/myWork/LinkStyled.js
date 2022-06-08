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

export default styled.a`

    text-decoration: none;
    border-bottom: 1px solid ${secondaryColor};
    padding-bottom: 2px;
    color: ${secondaryColor};

    &.disabled {

        opacity: .25;

    }

    &.dark{

        color: ${secondaryColor};
        transition: all .25s ease

    } 

    &.light{

        color: ${primaryColor};
        transition: all .25s ease

    }

`