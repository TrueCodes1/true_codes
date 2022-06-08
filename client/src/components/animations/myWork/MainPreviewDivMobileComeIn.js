import styled, { keyframes } from 'styled-components';

export default keyframes`

    0% {
    transform: translateY(70vh);
    opacity: 0; 
    visibility: hidden;
    }
    
    100% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    }
    
`
