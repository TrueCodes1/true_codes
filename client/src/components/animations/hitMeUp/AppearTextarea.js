//IMPORTING MODULES
import styled, { keyframes } from 'styled-components';

//IMPORTING OTHER NECCESSARY FILES
import colors from '../../jsons/colors';

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;


export default keyframes`

    0% {

        color: ${primaryColor};
        box-shadow: none

    }

    50% {

        color: ${primaryColor};
        box-shadow:  13px 13px 26px #0d1318,
                    -13px -13px 26px #19232e;

    }

    100% {

        color: ${secondaryColor};
        box-shadow:  13px 13px 26px #0d1318,
                    -13px -13px 26px #19232e;

    }

`