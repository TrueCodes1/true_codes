import styled, { keyframes } from 'styled-components';

export default keyframes`
    0% {
    min-width: 300px;
    max-width: 300px;
    min-height: 0;
    max-height: 0;
    }
    100% {
    min-width: 300px;
    max-width: 300px;
    min-height: 70vh;
    max-height: 70vh;
    }
`