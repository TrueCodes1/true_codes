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

    position: fixed;
    font-family: SVN-Gilroy;
    width: fit-content;
    height: fit-content;
    text-align: center;
    display: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 2vh;
    background: ${secondaryColor};
    color: ${primaryColor};
    font-weight: 600;
    border-radius: 10px;

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        font-size: 3vh;

    }
    @media only screen and (min-width: 992px) {

        display: none;

    }

`