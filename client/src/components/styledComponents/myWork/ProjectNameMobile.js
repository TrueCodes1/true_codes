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

    line-height: 1.15em;
    font-size: 7vh;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    margin: 1.5vh 0;

    @media only screen and (min-width: 576px) and (max-width: 991px) {
        
        font-size: 9vh;

    }

` 