import styled, { keyframes } from "styled-components";

//IMPORTING ANIMATIONS
import BurgerLeave from "../../animations/Nav/BurgerLeave";

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

        position: absolute;
        min-width: 50px;
        max-width: 50px;
        min-height: 50px;
        max-height: 50px;
        left: 20px;
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.fall {

            animation: 1 1.5s ${BurgerLeave};
            -webkit-animation: 1 1.25s ${BurgerLeave};

        }

        &.above {

            top: -120px;

        }

        &.come-back {

            top: 10px;
            transition: all .5s ease

        }

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        position: absolute;
        min-width: 100px;
        max-width: 100px;
        min-height: 100px;
        max-height: 100px;
        left: 40px;
        top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.fall {

            animation: 1 1.5s ${BurgerLeave};
            -webkit-animation: 1 1.25s ${BurgerLeave};

        }

        &.above {

            top: -120px;

        }

        &.come-back {

            top: 10px;
            transition: all .5s ease

        }

    }

    @media only screen and (min-width: 992px) {

        display: none;

    }

`