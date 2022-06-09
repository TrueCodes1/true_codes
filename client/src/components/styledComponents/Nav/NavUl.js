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

export default styled.ul`

    @media only screen and (max-width: 576px) {

        display: flex;
        font-family: SVN-Gilroy;
        color: ${secondaryColor};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        font-size: 4vh;

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        display: flex;
        font-family: SVN-Gilroy;
        color: ${secondaryColor};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        font-size: 7vh;

    }

    @media only screen and (min-width: 992px) {

        padding: 20px 0;
        min-width: 30vw;
        max-width: 30vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        font-family: SVN-Gilroy;

        &.dark {

            color: red

        }

        &.light {

            color: green

        }

    }

`