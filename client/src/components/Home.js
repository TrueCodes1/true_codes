import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';

import './styles/fonts.css';
import './styles/animations.css';
import SocialsHome from "./SocialsHome";
import PersonalPhoto from "./PersonalPhoto";
import ISpeakWhole from "./ISpeakWhole";
import OpeningTag from "./OpeningTag";

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const MainDiv = styled.div`
    position: absolute;
    min-width: 60vw;
    max-width: 60vw;
    min-height: 30vh;
    max-height: 30vh;
    top: 35vh;
    left: 20vw;/*
    border: 2px solid ${secondaryColor};
    border-radius: 2.5vh;
    box-shadow:  0 0 10px #e9f1f7bb;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
`

const Heading = styled.h1`
    color: ${secondaryColor};
    font-family: 'Signerica Thin';
    text-align: center;
    display: flex;
`

const P = styled.p`
    font-family: 'SVN-Gilroy';
    color: ${secondaryColor};
    opacity: .5;
    display: none;
`

const Leave = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1
    }
    100% {
        transform: translateX(-40px);
        opacity: 0
    }
`

const SideMainDiv = styled.div`
    position: absolute;
    min-width: 500px;
    max-width: 1000px;
    left: 200px;
    top: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: SVN-Gilroy;
    padding: 30px;
    border-radius: 30px;

    &.leave{
        animation: .35s 1 ${Leave}
    }
`

const Float = keyframes`
    0% {
        transform: translateX(-20px);
        opacity: 0
    }
    100% {
        transform: translateX(0);
        opacity: 1
    }
`

const FloatSub = keyframes`
    0% {
        transform: translateX(-20px);
        opacity: 0
    }
    100% {
        transform: translateX(0);
        opacity: .5
    }
`

const FloatSubSub = keyframes`
    0% {
        transform: translateX(-20px);
        opacity: 0
    }
    100% {
        transform: translateX(0);
        opacity: .75
    }
`

const FloatOut = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1
    }
    100% {
        transform: translateX(20px);
        opacity: 0
    }
`

const FloatSubOut = keyframes`
    0% {
        transform: translateX(0);
        opacity: .5
    }
    100% {
        transform: translateX(20px);
        opacity: 0
    }
`

const FloatSubSubOut = keyframes`
    0% {
        transform: translateX(0);
        opacity: .75
    }
    100% {
        transform: translateX(20px);
        opacity: 0
    }
`

const NameDiv = styled.div`
    min-width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${secondaryColor};
    font-size: 10vh;
    padding: 0 0 10px 0;
    opacity: 0;

    &.float {
        animation: .75s 1 ${Float}
    }

    &.float-out {
        animation .75s 1 ${FloatOut}
    }
    
    &.dark{
        color: ${secondaryColor};
        transition: all .25s ease
    }
    
    &.light{
        color: ${primaryColor};
        transition: all .25s ease
    }
`

const SubDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${secondaryColor};
    font-size: 5vh;
    opacity: .5;
    padding: 0 0 10px 0;
    opacity: 0;
    
    &.float {
        animation: .75s 1 ${FloatSub}
    }
    
    &.float-out {
        animation .75s 1 ${FloatSubOut}
    }
    
    &.dark{
        color: ${secondaryColor};
        transition: all .25s ease
    }
    
    &.light{
        color: ${primaryColor};
        transition: all .25s ease
    }
`

const SubSubDiv = styled.div`
    min-width: 400px;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${secondaryColor};
    font-size: 2.5vh;
    opacity: .75;
    padding: 10px 0;
    opacity: 0;
    
    &.float {
        animation: .75s 1 ${FloatSubSub}
    }
    
    &.float-out {
        animation .75s 1 ${FloatSubSubOut}
    }

    &.dark{
        color: ${secondaryColor};
        transition: all .25s ease
    }
    
    &.light{
        color: ${primaryColor};
        transition: all .25s ease
    }
`

export default (props) => {
    
    useEffect(() => {

        const mainDiv = document.getElementById('main-div');
        const nameDiv = document.getElementById('name');
        const subNameDiv = document.getElementById('sub-name');
        const subSubNameDiv = document.getElementById('sub-sub-name');

        if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
            nameDiv.style.opacity = '1';
            subNameDiv.style.opacity = '.5';
            subSubNameDiv.style.opacity = '.75';
        } else {

            sessionStorage.setItem('init-anim', '1');
            
            mainDiv.style.background = 'transparent';
            mainDiv.style.border = '1px solid transparent';
            mainDiv.style.boxShadow = '0 0 0';

            setTimeout(() => {
                nameDiv.classList.add('float');
            }, 27500);

            setTimeout(() => {
                subNameDiv.classList.add('float');
            }, 27700);
            
            setTimeout(() => {
                subSubNameDiv.classList.add('float');
            }, 27900);
            
            setTimeout(() => {
                nameDiv.style.opacity = '1';
            }, 28250);
            
            setTimeout(() => {
                subNameDiv.style.opacity = '.5';
            }, 28450);
            
            setTimeout(() => {
                subSubNameDiv.style.opacity = '.75';
            }, 28650);
        }
    })

    return(
        <>
            
            <OpeningTag />
        
            <SideMainDiv id="main-div">
                <NameDiv id="name" className={props.theme}>
                    Norbert Sviatko
                </NameDiv>
                <SubDiv id="sub-name" className={props.theme}>
                    full-stack web developer
                </SubDiv>
                <SubSubDiv id="sub-sub-name" className={props.theme}>
                    Guy passionate about coding, having his laptop always in backpack.
                    I'm 19 and I've been in game for almost 2 years now, with some both 
                    client and personal projects out there!  
                </SubSubDiv>
            </SideMainDiv>

        </>
    )
}