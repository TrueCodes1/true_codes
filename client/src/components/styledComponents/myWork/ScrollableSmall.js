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

    opacity: .5;
    padding: 0;
    min-height: 30px;
    max-height: 30px;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-bottom: 30px;
    overflow: hidden;
    scrollbar-width: none;

`