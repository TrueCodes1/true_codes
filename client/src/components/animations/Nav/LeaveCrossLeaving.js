import styled, { keyframes } from 'styled-components';

export default keyframes`

    0% {

        left: calc(50vw - 30px);
        bottom: 20px;

    }

    10% {

        left: calc(50vw - 30px);
        top: calc(100vh - 80px);

    }

    30% {

        left: 10px;
        top: calc(100vh - 70px);
        transform: rotateZ(0)

    }

    80%, 100% {

        left: 10px;
        top: -60px;
        transform: rotateZ(-540deg)

    }
    
`