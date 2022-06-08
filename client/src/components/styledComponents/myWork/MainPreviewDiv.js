import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;


export default styled.div`

    @media only screen and (max-width: 576px) {
        display: none;
    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {
    display: none;
    }

    @media only screen and (min-width: 992px) {

        min-width: 60%;
        max-width: 60%;
        min-height: 70vh;
        max-height: 70vh;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
        font-family: SVN-Gilroy;
        color: ${secondaryColor};

        &.dark{
            color: ${secondaryColor};
            transition: all .25s ease
        } 

        &.light{
            color: ${primaryColor};
            transition: all .25s ease
        }

    }
`