import React from 'react';
import styled, { keyframes } from 'styled-components';

import './styles/all.css';
import './styles/animations.css';
import './styles/fonts.css';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const MainDiv = styled.div`
    position: absolute;
    min-width: 200px;
    max-width: 200px;
    min-height: 90vh;
    max-height: 90vh;
    left: 5vh;
    top: 5vh;/*
    background: #e9f1f734;*/
    backdrop-filter: blur(20px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: SVN-Gilroy;
    background: linear-gradient(145deg, #10171E, #161F28);
    box-shadow: 9.91px 9.91px 15px #111920, -9.91px -9.91px 15px #151D26;
`

const UpAndDown = keyframes`
    0%, 100% {
        transform: translateY(-10px)
    }
    50% {
        transform: translateY(10px)
    }
`

const SingleLine = styled.div`
    min-width: calc(200px - 25px);
    max-width: calc(200px - 25px);
    min-height: 75px;
    max-height: 75px;
    margin: 12.5px 0 0 0;/*
    border: 2px solid ${secondaryColor};*/
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${primaryColor};
    box-shadow: inset 9.91px 9.91px 15px #111920, inset -9.91px -9.91px 15px #151D26;
    color: #e9f1f796;
    transition: all .5s ease;
    animation: 5s infinite ${UpAndDown};
    cursor: pointer;

    &:hover{
        transition: all .5s ease;
        background: linear-gradient(145deg, #17202A, #0F161C);
        box-shadow: inset 9.91px 9.91px 15px #11181F, inset -9.91px -9.91px 15px #151E27;
    }

`

export default () => {
  return (
      <>
        <MainDiv>
            <SingleLine>
                HTML, CSS
            </SingleLine>
            <SingleLine>
                JavaScript
            </SingleLine>
            <SingleLine>
                React.js
            </SingleLine>
            <SingleLine>
                Node.js
            </SingleLine>
            <SingleLine>
                Express.js
            </SingleLine>
            <SingleLine>
                Figma
            </SingleLine>
            <SingleLine>
                . . .
            </SingleLine>
        </MainDiv>
      </>
  );
}
