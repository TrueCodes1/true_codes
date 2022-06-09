//IMPORTING MODULES
import styled, { keyframes } from 'styled-components';

//IMPORTING OTHER NECCESARY FILES
import colors from '../../jsons/colors';

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;


export default keyframes`

    0% {

        color: ${secondaryColor};
        box-shadow:  13px 13px 26px #0d1318,
                    -13px -13px 26px #19232e;
        box-shadow: 0

    }

    50% {

        color: ${primaryColor};
        box-shadow:  13px 13px 26px #0d1318,
                    -13px -13px 26px #19232e;
        box-shadow: 0

    }

    100% {

        color: ${primaryColor};
        box-shadow: none

    }

`