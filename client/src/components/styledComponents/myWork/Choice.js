import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS
import ComeInChoice from "../../animations/myWork/ComeInChoice";
import Disappear from "../../animations/myWork/Disappear";

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.div`

    min-width: 100%;
    max-width: 100%;
    color: ${secondaryColor};
    font-family: 'SVN-Gilroy';
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transition: all .25s ease;

    &:hover{
    transition: all .25s ease;
    opacity: 1;
    padding-left: 20px
    }

    &.come{
    animation: 1 1s ${ComeInChoice};
    }

    &.leave{
    animation: 1.2s 1 ${Disappear}
    }

    &.dark{
    color: ${secondaryColor};
    transition: all .25s ease
    } 

    &.light{
    color: ${primaryColor};
    transition: all .25s ease
    }

    @media only screen and (max-width: 576px) {
        opacity: 1;
    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {
        opacity: 1;
        font-size: 5vw;
    }
    
    @media only screen and (min-width: 992px) {

    }
`