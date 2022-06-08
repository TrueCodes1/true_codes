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

    color: ${secondaryColor};
    font-size: 2.25vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    margin: 1vh 0;
    text-decoration: underline;

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        font-size: 3vh;

    }

`