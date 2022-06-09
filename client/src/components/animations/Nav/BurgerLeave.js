import styled, { keyframes } from 'styled-components';

export default keyframes`

    0% {

        transform: translateX(0) translateY(0) scaleY(1)

    }

    50% {

        transform: scaleY(.25) translateY(-60px)

    }

    70%, 100% {

        transform: scaleY(1) translateY(100vh) translateX(5vw)

    }
    
`