import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import MainPreviewDivMobileComeIn from "../../animations/myWork/MainPreviewDivMobileComeIn";
import MainPreviewDivMobileLeave from "../../animations/myWork/MainPreviewDivMobileLeave";

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.div`

    opacity: .75;
    padding: 0;
    min-height: 140px;
    max-height: 140px;
    min-width: 550px;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    overflow: hidden;
    scrollbar-width: none;
    
`