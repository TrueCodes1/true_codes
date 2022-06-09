import styled, { keyframes } from 'styled-components';

export default keyframes`

    0% {

        margin-left: 20px;
        margin-bottom: -50vh;
        transform: rotateZ(-2000deg)

    }

    40% {

        margin-left: 70px;
        margin-bottom: 50vh;

    }

    70%, 85% {

        transform: rotateZ(0);
        margin-bottom: 0;
        margin-left: 70px;

    }

    100% {

        margin: 0;
        transform: rotateZ(-90deg)

    }
    
`