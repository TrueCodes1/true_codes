import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import LeaveCrossComing from "../../animations/Nav/LeaveCrossComing";
import LeaveCrossLeaving from "../../animations/Nav/LeaveCrossLeaving";

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

        min-width: 15vw;
        max-width: 15vw;
        min-height: 15vw;
        max-height: 15vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 20px;
        left: calc(50vw - 30px);
        margin: 0 auto;

        &.enter {

            animation: 1 2.5s ${LeaveCrossComing};
            -webkit-animation: 1 2.5s ${LeaveCrossComing};

        }

        &.leave{

            animation: 1 2.5s ${LeaveCrossLeaving};
            -webkit-animation: 1 2.5s ${LeaveCrossLeaving};

        }

        &.after-leave {

            left: 10px;
            top: -120px;
            transform: rotateZ(-540deg)

        }

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        min-width: 14vw;
        max-width: 14vw;
        min-height: 14vw;
        max-height: 14vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 40px;
        left: calc(50vw - 60px);
        margin: 0 auto;

        &.enter {

            animation: 1 2.5s ${LeaveCrossComing};
            -webkit-animation: 1 2.5s ${LeaveCrossComing};

        }

        &.leave{

            animation: 1 2.5s ${LeaveCrossLeaving};
            -webkit-animation: 1 2.5s ${LeaveCrossLeaving};

        }

        &.after-leave {

            left: 10px;
            top: -120px;
            transform: rotateZ(-540deg)

        }

    }

    @media only screen and (min-width: 992px) {

        display: none;

    }

`