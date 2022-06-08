import styled, { keyframes } from "styled-components";

// IMPORTIN ANIMATIONS
import Leave from "../../animations/Home/Leave";

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
        min-width: 95vw;
        max-width: 95vw;
        left: 15px;
        font-family: SVN-Gilroy;
        min-height: 300px;
        max-height: 300px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center; 
        transform: translateY(-30px)  

    }

    @media only screen and (min-width: 576px) and (max-width: 991px) {

        position: absolute;
        min-width: 95vw;
        max-width: 95vw;
        left: 30px;
        font-family: SVN-Gilroy;
        min-height: 300px;
        max-height: 300px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center; 
        transform: translateY(-30px)  

    }

    @media only screen and (min-width: 992px) {

        position: absolute;
        min-width: 500px;
        max-width: 1000px;
        left: 10vw;
        top: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-family: SVN-Gilroy;
        padding: 30px;
        border-radius: 30px;

        &.leave{

            animation: .35s 1 ${Leave}

        }

    }
    
`