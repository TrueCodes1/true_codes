import React from 'react';
import styled, { keyframes } from 'styled-components';

import './styles/all.css';
import './styles/animations.css';
import './styles/fonts.css';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';
const terciaryColor = '#816C61';

const Form = styled.form`
  position: absolute;
  min-width: 60vw;
  max-width: 60vw;
  min-height: 50vh;
  max-height: 50vh;
  top: 25vh;
  left: 5vw;/*
  border: 2px solid red;*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: 'SVN-Gilroy';
  visibility: hidden
`

const AppearInput = keyframes`
  0% {
    color: ${primaryColor};
    box-shadow: none
  }
  50% {
    color: ${primaryColor};
    box-shadow:  13px 13px 26px #0d1318,
                 -13px -13px 26px #19232e;
    box-shadow: 0
  }
  100% {
    color: ${secondaryColor};
    box-shadow:  13px 13px 26px #0d1318,
                 -13px -13px 26px #19232e;
    box-shadow: 0
  }
`

const LeaveInput = keyframes`
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

const Input = styled.input`
  min-width: 50%;
  max-width: 50%;
  margin: 10px 0;
  font-size: 20px;
  font-family: SVN-Gilroy;
  border-radius: 15px;
  background: #e0e0e0;
  outline: none;
  border: none;
  padding: 1em;/*
  WebkitBorderRadius: 15px;*/
  border-radius: 10px;
  background: ${primaryColor};/*
  WebkitBoxShadow: 5px 5px 20px #0e141a, -5px -5px 20px #18222c;*/
  box-shadow:  13px 13px 26px #0d1318,
               -13px -13px 26px #19232e;
  color: ${primaryColor};
  box-shadow: none;

  &::placeholder{
    font-weight: 100;
  }

  &.come{
    animation: 1 1.5s ${AppearInput}
  }
  
  &.leave{
    animation: 1 1.5s ${LeaveInput}
  }
`

const AppearTextarea = keyframes`
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

const LeaveTextarea = keyframes`
  0% {
    color: ${secondaryColor};
    box-shadow:  13px 13px 26px #0d1318,
                -13px -13px 26px #19232e;
  }
  50% {
    color: ${primaryColor};
    box-shadow:  13px 13px 26px #0d1318,
                -13px -13px 26px #19232e;
  }
  100% {
    color: ${primaryColor};
    box-shadow: none
  }
`

const Textarea = styled.textarea`
  min-width: 50%;
  max-width: 50%;
  min-height:200px;
  max-height: 300px;
  margin: 10px 0;
  font-size: 20px;
  border-radius: 15px;
  background: #e0e0e0;
  outline: none;
  border: none;
  padding: 1em;/*
  WebkitBorderRadius: 15px;*/
  border-radius: 10px;
  background: ${primaryColor};/*
  WebkitBoxShadow: 5px 5px 20px #0e141a, -5px -5px 20px #18222c;*/
  box-shadow:  13px 13px 26px #0d1318,
              -13px -13px 26px #19232e;
  color: ${secondaryColor};
  font-family: 'SVN-Gilroy';
  resize: none;
  scrollbar-width: none;
  color: ${primaryColor};
  box-shadow: none;

  &.come{
    animation: 1 1.5s ${AppearInput}
  }
  
  &.leave{
    animation: 1 1.5s ${LeaveTextarea}
  }
`

const AppearButton = keyframes`
  0% {
    padding: .75em 0;
    padding-left: 70vw;
  }
  100% {
    padding: .75em 0 .75em 15px;
  }
`

const LeaveButton = keyframes`
  0% {
    opacity: .5
  }
  100% {
    opacity: 0
  }
`

const Button = styled.div`
    min-width: 50%;
    max-width: 50%;
    font-size: 20px;
    padding: .75em 0 .75em 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${primaryColor};
    opacity: .5;
    transition: all .25s ease;
    cursor: pointer;

    &:hover{
      padding: .75em 0 .75em 40px;
      opacity: 1;
      transition: all .25s ease;
    }

    &.come{
      animation: 1 .35s ${AppearButton}
    }

    &.leave{
      animation: 1 .35s ${LeaveButton}
    }
`

export default () => {
  return (
      <div>
          <Form id='contact-form'>
            <Input placeholder='Name' className='contact-input'></Input>
            <Input placeholder='Email' className='contact-input'></Input>
            <Textarea placeholder='Message' spellCheck='false' id='contact-textarea'></Textarea>
            <Button id='contact-button'>send</Button>
          </Form>
      </div>
  );
}