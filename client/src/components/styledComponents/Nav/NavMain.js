import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import EntranceMobileNav from "../../animations/Nav/EntranceMobileNav";
import LeavingMobileNav from "../../animations/Nav/LeavingMobileNav";

//IMPORTING OTHER FILES
import './../../styles/all.css';
import './../../styles/animations.css';
import './../../styles/fonts.css';

//IMPORTING COLORS
import colors from "../../jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default styled.div`

    @media only screen and (max-width: 576px) {

        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        max-height: 100vh;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        display: flex;
        visibility: hidden;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        background: ${primaryColor};
        z-index: 99999;

        &.enter {

            animation: 1 .15s ${EntranceMobileNav};
            -webkit-animation: 1 .15s ${EntranceMobileNav}

        }

        &.leave {

            animation: 1 .35s ${LeavingMobileNav};
            -webkit-animation: 1 .35s ${LeavingMobileNav};

        }

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        max-height: 100vh;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        display: flex;
        visibility: hidden;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        background: ${primaryColor};
        z-index: 99999;

        &.enter {

            animation: 1 .15s ${EntranceMobileNav};
            -webkit-animation: 1 .15s ${EntranceMobileNav}

        }

        &.leave {

            animation: 1 .35s ${LeavingMobileNav};
            -webkit-animation: 1 .35s ${LeavingMobileNav};

        }

    }

    @media only screen and (min-width: 992px) {

        color: ${secondaryColor};
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100vw;
        max-width: 100vw;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        visibility: visible

    }
`