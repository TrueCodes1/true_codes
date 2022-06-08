import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS
import ComeIn from "../../animations/myWork/ComeIn";
import SquezeAndLeave from "../../animations/myWork/SquezeAndLeave";

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;


export default styled.div`

    @media only screen and (max-width: 576px) {
        overflow: hidden;
        overflow-y: auto;
        min-width: 90vw;
        max-width: 90vw;
        min-height: 70vh;
        max-height: 70vh;
    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {
        overflow: hidden;
        overflow-y: auto;
        min-width: 90vw;
        max-width: 90vw;
        min-height: 70vh;
        max-height: 70vh;
    }

    @media only screen and (min-width: 992px) {
        min-height: 70vh;
        max-height: 70vh;
        min-width: 300px;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        jusitfy-content: flex-start;
        border: none;
        border-left: 2px solid ${secondaryColor};
        border-right: 2px solid ${secondaryColor};

        &.come{
            animation: 1 1s ${ComeIn};
        }

        &.leave{
            animation: 1.25s 1 ${SquezeAndLeave}
        }
        
        &.dark{
            border-left: 2px solid ${secondaryColor};
            border-right: 2px solid ${secondaryColor};
            transition: all .25s ease
        } 

        &.light {
            border-left: 2px solid ${primaryColor};
            border-right: 2px solid ${primaryColor};
            transition: all .25s ease
        }
    }

`