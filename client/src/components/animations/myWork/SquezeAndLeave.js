import styled, { keyframes } from 'styled-components';

export default keyframes`

    0% {
    min-width: 300px;
    min-height: 70vh;
    max-height: 70vh;
    opacity: 1
    }
    
    33%{  
    min-width: 1px;
    max-width: 1px;
    overflow: hidden;
    min-height: 70vh;
    max-height: 70vh;
    opacity: 1
    }

    66% {  
    min-height: 1px;
    max-height: 1px;
    min-width: 1px;
    max-width: 1px;
    overflow: hidden;
    opacity: 1
    }

    100% {
    min-height: 1px;
    max-height: 1px;
    min-width: 1px;
    max-width: 1px;
    overflow: hidden;
    opacity: 0
    }

`