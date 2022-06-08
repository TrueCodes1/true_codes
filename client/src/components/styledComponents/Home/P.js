import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.p`

    font-family: 'SVN-Gilroy';
    color: ${secondaryColor};
    opacity: .5;
    display: none;

`