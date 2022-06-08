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

    @media only screen and (max-width: 576px) {

        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        min-height: 70vh;
        max-height: 70vh;
        bottom: 0;
        left: 0;
        background: ${primaryColor};
        border-radius: 10vw 10vw 0 0;
        box-shadow: 20px 20px 40px rgba(11, 16, 20, 0.351),
                    -20px -20px 40px rgba(11, 16, 20, 0.351),
                    inset -10px 10px 20px rgba(37, 53, 68, 0.121),
                    inset 10px 10px 20px rgba(37, 53, 68, 0.121);
        font-family: SVN-Gilroy;
        color: ${secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justifY-content: flex-start;
        padding: 30px;
        padding-top: calc(30px - 1vh);
        overflow: hidden;
        overflow-y: auto;
        visibility: hidden;
        opacity: 0;
        transform: translateY(70vh);
        padding-bottom: 60px;

        &.enter {

            animation: 1 .5s ${MainPreviewDivMobileComeIn};
            -webkit-animation: 1 .5s ${MainPreviewDivMobileComeIn};
            transform: translateY(0);
            opacity: 1;
            visibility: visible;

        }
        &.leave {

            animation: 1 .5s ${MainPreviewDivMobileLeave};
            -webkit-animation: 1 .5s ${MainPreviewDivMobileLeave};
            transform: translateY(70vh);
            opacity: 0; 
            visibility: hidden;

        }

    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {

        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        min-height: 70vh;
        max-height: 70vh;
        bottom: 0;
        left: 0;
        background: ${primaryColor};
        border-radius: 10vw 10vw 0 0;
        box-shadow: 20px 20px 40px rgba(11, 16, 20, 0.351),
                    -20px -20px 40px rgba(11, 16, 20, 0.351),
                    inset -10px 10px 20px rgba(37, 53, 68, 0.121),
                    inset 10px 10px 20px rgba(37, 53, 68, 0.121);
        font-family: SVN-Gilroy;
        color: ${secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justifY-content: flex-start;
        padding: 60px;
        padding-top: calc(60px - 1vh);
        overflow: hidden;
        overflow-y: auto;
        visibility: hidden;
        opacity: 0;
        transform: translateY(70vh);
        padding-bottom: 60px;

        &.enter {

            animation: 1 .5s ${MainPreviewDivMobileComeIn};
            -webkit-animation: 1 .5s ${MainPreviewDivMobileComeIn};
            transform: translateY(0);
            opacity: 1;
            visibility: visible;

        }

        &.leave {

            animation: 1 .5s ${MainPreviewDivMobileLeave};
            -webkit-animation: 1 .5s ${MainPreviewDivMobileLeave};
            transform: translateY(70vh);
            opacity: 0; 
            visibility: hidden;

        }

    }
    @media only screen and (min-width: 992px) {

        display: none;

    }
`