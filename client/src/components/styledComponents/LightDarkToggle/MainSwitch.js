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

    @media only screen and (min-width: 10px) and (max-width: 370px) {

        display: none;

    }

    @media only screen and (min-width: 371px) and (max-width: 576px) {

        position: absolute;
        min-width: 80px;
        max-width: 80px;
        min-height: 48px;
        max-height: 48px;
        top: 10px;
        right: 10px;
        border: 1px solid ${secondaryColor};
        border-radius: 23px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 3.5px;
        transition: .25s ease;
        z-index: 999;
        opacity: 0;

        &.dark {

            background: ${primaryColor}

        }

        &.light {

            background: ${secondaryColor}

        }

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        position: absolute;
        min-width: 80px;
        max-width: 80px;
        min-height: 48px;
        max-height: 48px;
        top: 40px;
        right: 20px;
        border: 1px solid ${secondaryColor};
        border-radius: 23px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 3.5px;
        transition: .25s ease;
        z-index: 999;
        opacity: 0;

        &.dark {

            background: ${primaryColor}

        }

        &.light {

            background: ${secondaryColor}

        }

    }

    @media only screen and (min-width: 992px) {

        position: absolute;
        min-width: 80px;
        max-width: 80px;
        min-height: 48px;
        max-height: 48px;
        top: 10px;
        right: 10px;
        border: 1px solid ${secondaryColor};
        border-radius: 23px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 3.5px;
        transition: .25s ease;
        z-index: 999;
        opacity: 0;

        &.dark {

            background: ${primaryColor}

        }

        &.light {

            background: ${secondaryColor}
            
        }
    }
`