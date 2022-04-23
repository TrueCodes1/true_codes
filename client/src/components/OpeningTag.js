import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import './styles/all.css';
import './styles/animations.css';
import './styles/fonts.css';

import Logo from './images/opening_logo.svg';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const Rotating = keyframes`
    0%, 100% {
        transform: rotateY(0) rotateX(0);
    }
    33% {
        transform: rotateY(180deg) rotateX(0);
    }
    66% {
        transform: rotateY(0) rotateX(180deg);
    }
`

const OpeningTag = styled.div`
    position: absolute;
    min-width: 500px;
    max-width: 500px;
    min-height: 100px;
    max-height: 100px;
    top: calc(50vh - 50px);
    left: calc(50vw - 250px);
    font-family: SVN-Gilroy;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${secondaryColor};/*
    animation: 3s infinite ${Rotating};*/
    opacity: 0;
`

const Typing = keyframes`
    0% {
        padding: 0;
        padding-left: 250px;
    }
    90%, 100% {
        padding: 0;
    }
`

const Cursor = keyframes`
    0%, 50% {
        border-left: 2px solid ${secondaryColor}
    } 
    51%, 100% {
        border-left: 2px solid transparent
    }
`

const Rotate = keyframes`
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotateX(90deg)
    }
`

const RotateBack = keyframes`
    0% {
        transform: rotateX(-90deg)
    }
    100% {
        transform: rotate(0)
    }
`

const TypingSpanOuter = styled.span`
    position: absolute;
    display: inline-flex;
    justify-content: center;
    
    &.rotate {

        animation: 1 .45s ${Rotate}

    }

    &.rotate-back {

        animation: 1 .45s ${RotateBack}

    }

`

const Enwide = keyframes`
    0% {
        padding: 0;
    }
    100% {
        padding: 0 120px;
    }
`

const TypingSpanInner = styled.span`

    position: relative;

    &.enwide{
        animation: 1 .5s ${Enwide};
    }

    &.after {
        
        &::after{
            content: '';
            position: absolute;
            padding: 0;
            padding-left: 250px;
            height: 100%;
            right: 0;
            top: 0;
            background: ${primaryColor};
            border-left: 2px solid ${secondaryColor};
            animation: 1s 1 ${Typing} steps(10);
        }

    }

    &.typed {
        
        &::after{
            content: '';
            position: absolute;
            padding: 0;
            padding-left: 0;
            height: 100%;
            right: 0;
            top: 0;
            background: ${primaryColor};
            border-left: 2px solid ${secondaryColor};
            animation: 1s infinite ${Cursor};
        }

    }
    
`

const ImgSideShineAndDie = keyframes`
    0% {
        opacity: .1
    }
    50% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
`

const ImgMainShineAndDie = keyframes`
    0%, 50% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
`

const InvisibleImg = styled.img`/*
    position: absolute;*/
    transform: scale(0);
    overflow: hidden;
    max-width: 0;

    &.shine-and-die{
        animation: .75s 1 ${ImgMainShineAndDie}
    }
`

const ImgToLeft = keyframes`
    0% {
        transform: translateX(0);
        opacity: 0;
    }
    100% {
        transform: translateX(-400px);
        opacity: .1;
    }
`

const ImgToRight = keyframes`
    0% {
        transform: scale(1) translateX(0);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateX(400px);
        opacity: .1;
    }
`

/*

LEFT SIDE BRANDINGS GOING UP AND DOWN

*/

const ImgLeftUppest = keyframes`
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(-400px) translateY(-300px);
    }
`

const ImgLeftUpper = keyframes`
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(-400px) translateY(-200px);
    }
`

const ImgLeftUp = keyframes`
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(-400px) translateY(-100px);
    }
`

const ImgLeftDown = keyframes`
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(-400px) translateY(100px);
    }
`

const ImgLeftDowner = keyframes`
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(-400px) translateY(200px);
    }
`

const ImgLeftDownest = keyframes`
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(-400px) translateY(300px);
    }
`

/*

RIGHT SIDE BRANDINGS GOING UP AND DOWN

*/

const ImgRightUppest = keyframes`
    0% {
        transform: translateX(400px);
    }
    100% {
        transform: translateX(400px) translateY(-300px);
    }
`

const ImgRightUpper = keyframes`
    0% {
        transform: translateX(400px);
    }
    100% {
        transform: translateX(400px) translateY(-200px);
    }
`

const ImgRightUp = keyframes`
    0% {
        transform: translateX(400px);
    }
    100% {
        transform: translateX(400px) translateY(-100px);
    }
`

const ImgRightDown = keyframes`
    0% {
        transform: translateX(400px);
    }
    100% {
        transform: translateX(400px) translateY(100px);
    }
`

const ImgRightDowner = keyframes`
    0% {
        transform: translateX(400px);
    }
    100% {
        transform: translateX(400px) translateY(200px);
    }
`

const ImgRightDownest = keyframes`
    0% {
        transform: translateX(400px);
    }
    100% {
        transform: translateX(400px) translateY(300px);
    }
`

const InvisibleImg2 = styled.img`
    position: absolute;
    transform: scale(1);
    opacity: 0;

    &.img-float{
        animation: 1 1s ${ImgToLeft}
    }

    &.uppest{
        animation: .375s 1 ${ImgRightUppest}
    }
    
    &.upper{
        animation: .375s 1 ${ImgRightUpper}
    }
    
    &.up{
        animation: .375s 1 ${ImgRightUp}
    }
    
    &.down{
        animation: .375s 1 ${ImgRightDown}
    }
    
    &.downer{
        animation: .375s 1 ${ImgRightDowner}
    }
    
    &.downest{
        animation: .375s 1 ${ImgRightDownest}
    }
    
    &.shine-and-die{
        animation: .75s 1 ${ImgSideShineAndDie}
    }
`

const InvisibleImg3 = styled.img`
    position: absolute;
    transform: scale(1);
    opacity: 0;
    
    &.img-float{
        animation: 1 1s ${ImgToRight}
    }

    &.uppest{
        animation: .375s 1 ${ImgLeftUppest}
    }
    
    &.upper{
        animation: .375s 1 ${ImgLeftUpper}
    }
    
    &.up{
        animation: .375s 1 ${ImgLeftUp}
    }
    
    &.down{
        animation: .375s 1 ${ImgLeftDown}
    }
    
    &.downer{
        animation: .375s 1 ${ImgLeftDowner}
    }
    
    &.downest{
        animation: .375s 1 ${ImgLeftDownest}
    }
    
    &.shine-and-die{
        animation: .75s 1 ${ImgSideShineAndDie}
    }
`

const BottomQuestionWhole = styled.div`
    position: absolute;
    min-width: 600px;
    max-width: 600px;
    left: calc(50vw - 300px);
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: .75;
`

const FrontOrBack = styled.div`
    position: relative;
    max-height: calc(1em + 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: SVN-Gilroy;
    color: ${secondaryColor};
    font-size: 3rem;
    overflow: hidden;
`

const FrontBack =  styled.p`
    padding: 0 10px;
    color: ${primaryColor};
`

const Or = styled.p`
    opacity: .5;
`

const PushingDiv = styled.div`
    width: 100%;
    min-height: calc(1em + 20px);
    max-height: calc(1em + 20px);
    left: 0;
    top: 0;
`

const InnerDiv = styled.div`
    display: flex;
    flex-direction: row; 
    alig-item: center;
    justify-content: center;
`

const Img = () =>{
    return(
        <>
        
            <InvisibleImg src={Logo} id='abc'></InvisibleImg>

        </>
    )
}

const Img2 = () =>{
    return(
        <>
        
            <InvisibleImg2 src={Logo} className='img-2'></InvisibleImg2>

        </>
    )
}

const Img3 = () =>{
    return(
        <>
        
            <InvisibleImg3 src={Logo} className='img-3'></InvisibleImg3>

        </>
    )
}

const IWhole = styled.div`
    position: absolute;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    alig-items: center;
    justify-content: center;
    font-family: SVN-Gilroy;
    font-size: 7vh;
    color: ${secondaryColor};
    opacity: 0;
`

const Leaving = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        transform: translateX(-50px);
        opacity: 0
    }
`

const IPart = styled.div`
    min-width: 100vw;
    max-width: 100vw;
    min-height: 20vh;
    max-height: 20vh;
    display: flex;
    flex-direction: row;
    alig-items: center;
    justify-content: center;

    &.leaving{
        animation: .75s 1 ${Leaving}
    }
`

const TypingWhatIDo = keyframes`
    0% {
        left: 0
    }
    100% {
        left: 100%
    }
`

const I = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 15px;
    overflow: hidden;
`

const ISingle = styled.div`
    min-height: 20vh;
    max-height: 20vh;
    min-width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const WhatIDo = styled.div`
    position: relative;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${primaryColor};
    }

    &.typing{

        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: ${primaryColor};
            animation: 1 2s ${TypingWhatIDo} steps(40)
        }

    }
    
    &.typed{

        transition: all .5s ease;
        opacity: .4;

        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: transparent;
        }

    }
`

export default () => {

    useEffect(() => {

        const bottomBottom = document.getElementById('bottom-bottom');
        const bottomUp = document.getElementById('bottom-up');
        const fullStack = document.getElementById('full-stack');

        if ($(window).width() > 991) {
            if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
                document.getElementById('opening-tag').style.display = 'none';
                document.getElementById('bottom-q-whole').style.display = 'none';
                document.getElementById('i-part').style.display = 'none';
            } else {
    
                document.getElementById('opening-tag').style.opacity = '1';
            
                bottomBottom.scrollTo({
                    top: (bottomBottom.clientHeight),
                    behavior: 'smooth'
                })
                bottomUp.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                setTimeout(() => {
                    fullStack.style.color = `${secondaryColor}`;
                    bottomUp.style.color = `${secondaryColor}`;
                    document.getElementById('front-end').style.color = `${secondaryColor}`;
                    document.getElementById('back-end').style.color = `${secondaryColor}`;
                }, 1000)
    
                for (let item of document.getElementsByClassName('scrollable-i')){
                    item.scrollTo({
                        top: 10000,
                        behavior: 'smooth'
                    })
                }
    
                const typingSpanInner = document.getElementById('typing-span-inner');
                const typingSpanOuter = document.getElementById('typing-span-outer');
    
                typingSpanInner.classList.add('enwide');
                
                /*
                typingSpanInner.addEventListener('animationend', () => {
    
                    typingSpanInner.style.minWidth = '250px';
                    typingSpanInner.style.maxWidth = '250px';
    
                    typingSpanInner.innerHTML = 'TrueCodes';
    
                    typingSpanInner.classList.add('after');
    
                    typingSpanInner.addEventListener('animationend', () => {
                        typingSpanInner.classList.remove('after');
                        typingSpanInner.classList.add('typed');
                    })
                    setTimeout(() => {
                        typingSpanOuter.classList.add('rotate');
                        typingSpanOuter.addEventListener('animationend', () => {
                            typingSpanOuter.style.transform = 'rotateX(-90deg)';
                            typingSpanOuter.classList.remove('rotate');
                        })
                    }, 1000)
                })*/
    
                setTimeout(() => {
    
                    typingSpanInner.style.minWidth = '250px';
                    typingSpanInner.style.maxWidth = '250px';
    
                    typingSpanInner.innerHTML = 'TrueCodes';
    
                    typingSpanInner.classList.add('after');
    
                }, 500)
    
                setTimeout(() => {
                    
                    typingSpanInner.classList.remove('after');
                    typingSpanInner.classList.add('typed');
                    
                }, 1500)
    
                setTimeout(() => {
                    typingSpanOuter.classList.add('rotate');
                    typingSpanOuter.addEventListener('animationend', () => {
                        typingSpanOuter.style.transform = 'rotateX(-90deg)';
                        typingSpanOuter.classList.remove('rotate');
                    })
                }, 3000)
    
                setTimeout(() => {
                    typingSpanInner.remove();
                    typingSpanOuter.innerHTML = typingSpanOuter.innerHTML.replace('&#60;&#160;', '');
                    typingSpanOuter.innerHTML = typingSpanOuter.innerHTML.replace('&#160;&#47;&#62;', '');
                    typingSpanOuter.innerHTML = typingSpanOuter.innerHTML.replace('&lt;&nbsp;&nbsp;/&gt;', '');/*
                    let toClean = typingSpanOuter.innerHTML;
                    toClean = toClean.replace('&#60;&#160;', '');
                    toClean = toClean.replace('&#160;&#47;&#62;', '');
                    toClean = toClean.replace('&lt;&nbsp;&nbsp;/&gt;', '');
    
                    typingSpanOuter.innerHTML = toClean;
                    console.log(toClean)*/
    
                    document.getElementById('abc').style.transform = 'scale(1)';
                    document.getElementById('abc').style.maxWidth = 'fit-content';
                    typingSpanOuter.classList.add('rotate-back');
                    typingSpanOuter.addEventListener('animationend', () => {
                        typingSpanOuter.style.transform = 'rotate(0)';
                        typingSpanOuter.classList.remove('rotate-back')
                    })
                }, 3450)
    
                setTimeout(() => {
                    bottomUp.scrollTo({
                        top: (bottomUp.clientHeight),
                        behavior: 'smooth'
                    })
                }, 4800)
    
                setTimeout(() => {
                    bottomUp.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
    
                    bottomBottom.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }, 6500)
    
                setTimeout(() => {
                    bottomBottom.scrollTo({
                        top: (bottomBottom.clientHeight),
                        behavior: 'smooth'
                    })
                }, 8500)
    
                setTimeout(() => {
                    let i = 1;
                    for (let item of document.getElementsByClassName('img-2')){
                        item.id = 'left-'+i;
                        item.classList.add('img-float');
                        i+=1;
                    }
                    i = 1;
                    for (let item of document.getElementsByClassName('img-3')){
                        item.id = 'right-'+i;
                        item.classList.add('img-float');
                        i+=1;
                    }
                }, 8900)
    
                setTimeout(() => {
                    for (let item of document.getElementsByClassName('img-2')){
                        item.style.transform = 'translateX(-400px)';
                        item.style.opacity = '.1';
                    }
                    for (let item of document.getElementsByClassName('img-3')){
                        item.style.transform = 'translateX(400px)';
                        item.style.opacity = '.1';
                    }
                }, 8900)
    
                setTimeout(() => {
                    document.getElementById('left-1').classList.add('uppest');
                    document.getElementById('left-2').classList.add('upper');
                    document.getElementById('left-3').classList.add('up');
                    document.getElementById('left-4').classList.add('down');
                    document.getElementById('left-5').classList.add('downer');
                    document.getElementById('left-6').classList.add('downest');
                    document.getElementById('right-1').classList.add('uppest');
                    document.getElementById('right-2').classList.add('upper');
                    document.getElementById('right-3').classList.add('up');
                    document.getElementById('right-5').classList.add('down');
                    document.getElementById('right-6').classList.add('downer');
                    document.getElementById('right-7').classList.add('downest');
                }, 9500)
                
                setTimeout(() => {
                    document.getElementById('left-1').style.transform = 'translateX(-400px) translateY(-300px)';
                    document.getElementById('left-2').style.transform = 'translateX(-400px) translateY(-200px)';
                    document.getElementById('left-3').style.transform = 'translateX(-400px) translateY(-100px)';
                    document.getElementById('left-4').style.transform = 'translateX(-400px) translateY(100px)';
                    document.getElementById('left-5').style.transform = 'translateX(-400px) translateY(200px)';
                    document.getElementById('left-6').style.transform = 'translateX(-400px) translateY(300px)';
                    document.getElementById('right-1').style.transform = 'translateX(400px) translateY(-300px)';
                    document.getElementById('right-2').style.transform = 'translateX(400px) translateY(-200px)';
                    document.getElementById('right-3').style.transform = 'translateX(400px) translateY(-100px)';
                    document.getElementById('right-5').style.transform = 'translateX(400px) translateY(100px)';
                    document.getElementById('right-6').style.transform = 'translateX(400px) translateY(200px)';
                    document.getElementById('right-7').style.transform = 'translateX(400px) translateY(300px)';
                }, 9875)
                
                setTimeout(() => {
                    document.getElementById('abc').classList.add('shine-and-die');
                    for (let item of document.getElementsByClassName('img-2')){
                        item.classList.add('shine-and-die');
                    }
                    for (let item of document.getElementsByClassName('img-3')){
                        item.classList.add('shine-and-die');
                    }
                }, 10300)
                
                setTimeout(() => {
                    document.getElementById('abc').style.opacity = '0';
                    for (let item of document.getElementsByClassName('img-2')){
                        item.style.opacity = '0';
                    }
                    for (let item of document.getElementsByClassName('img-3')){
                        item.style.opacity = '0';
                    }
                }, 11050)
                
                const scrollableI1 = document.getElementById('scrollable-i-1');
                const scrollableI2 = document.getElementById('scrollable-i-2');
                const scrollableI3 = document.getElementById('scrollable-i-3');
                const scrollableI4 = document.getElementById('scrollable-i-4');
                const scrollableI5 = document.getElementById('scrollable-i-5');
    
                const typableWhatIDo1 = document.getElementById('typable-what-i-do-1');
                const typableWhatIDo2 = document.getElementById('typable-what-i-do-2');
                const typableWhatIDo3 = document.getElementById('typable-what-i-do-3');
                const typableWhatIDo4 = document.getElementById('typable-what-i-do-4');
                const typableWhatIDo5 = document.getElementById('typable-what-i-do-5');
    
                const iPart1 = document.getElementById('i-part-1');
                const iPart2 = document.getElementById('i-part-2');
                const iPart3 = document.getElementById('i-part-3');
                const iPart4 = document.getElementById('i-part-4');
                const iPart5 = document.getElementById('i-part-5');
    
                setTimeout(() => {
                    document.getElementById('i-part').style.opacity = '1';
                    scrollableI1.scrollTo({
                        top: scrollableI1.clientHeight,
                        behavior: 'smooth'
                    })
                }, 11650)
    
                setTimeout(() => {
                    typableWhatIDo1.classList.add('typing');
                }, 12050)
                
                setTimeout(() => {
                    typableWhatIDo1.classList.remove('typing');
                    typableWhatIDo1.classList.add('typed');
                    
                    scrollableI1.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
    
                    scrollableI2.scrollTo({
                        top: scrollableI2.clientHeight,
                        behavior: 'smooth'
                    })
    
                }, 13750)
    
                setTimeout(() => {
                    typableWhatIDo2.classList.add('typing');
                }, 14450)
                
                setTimeout(() => {
                    typableWhatIDo2.classList.remove('typing');
                    typableWhatIDo2.classList.add('typed');
                    
                    scrollableI2.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
    
                    scrollableI3.scrollTo({
                        top: scrollableI4.clientHeight,
                        behavior: 'smooth'
                    })
    
                }, 15950)
                
                setTimeout(() => {
                    typableWhatIDo3.classList.add('typing');
                }, 16350)
                
                setTimeout(() => {
                    typableWhatIDo3.classList.remove('typing');
                    typableWhatIDo3.classList.add('typed');
                    
                    scrollableI3.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
    
                    scrollableI4.scrollTo({
                        top: scrollableI4.clientHeight,
                        behavior: 'smooth'
                    })
    
                }, 18050)
                
                setTimeout(() => {
                    typableWhatIDo4.classList.add('typing');
                }, 18450)
                
                setTimeout(() => {
                    typableWhatIDo4.classList.remove('typing');
                    typableWhatIDo4.classList.add('typed');
                    
                    scrollableI4.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
    
                    scrollableI5.scrollTo({
                        top: scrollableI5.clientHeight,
                        behavior: 'smooth'
                    })
    
                }, 20050)
                
                setTimeout(() => {
                    typableWhatIDo5.classList.add('typing');
                }, 20450)
                
                setTimeout(() => {
                    typableWhatIDo5.classList.remove('typing');
                    typableWhatIDo5.classList.add('typed');
                    typableWhatIDo5.style.opacity = '1';
    
                }, 22050)
                
                setTimeout(() => {
                    iPart1.classList.add('leaving');
                }, 23100)
                
                setTimeout(() => {
                    iPart2.classList.add('leaving');
                }, 23300)
                
                setTimeout(() => {
                    iPart3.classList.add('leaving');
                }, 23500)
                
                setTimeout(() => {
                    iPart4.classList.add('leaving');
                }, 23700)
                
                setTimeout(() => {
                    iPart5.classList.add('leaving');
                    iPart1.style.opacity = '0';
                }, 23850)
                
                setTimeout(() => {
                    iPart2.style.opacity = '0';
                }, 24050)
                
                setTimeout(() => {
                    iPart3.style.opacity = '0';
                }, 24200)
                
                setTimeout(() => {
                    iPart4.style.opacity = '0';
                }, 24400)
                
                setTimeout(() => {
                    iPart5.style.opacity = '0';
                }, 24550)
            }
        } else {
            document.getElementById('opening-tag').style.display = 'none';
            document.getElementById('bottom-q-whole').style.display = 'none';
            document.getElementById('i-part').style.display = 'none';
        }
    })

  return (
      <>

        <OpeningTag id='opening-tag'>
            <TypingSpanOuter id='typing-span-outer'>
                &#60;&#160;
                <TypingSpanInner id='typing-span-inner'></TypingSpanInner>
                &#160;&#47;&#62;
                <Img />
                <Img2 />
                <Img2 />
                <Img2 />
                <Img2 />
                <Img2 />
                <Img2 />
                <Img2 />
                <Img3 />
                <Img3 />
                <Img3 />
                <Img3 />
                <Img3 />
                <Img3 />
                <Img3 />
            </TypingSpanOuter>
        </OpeningTag>

        <BottomQuestionWhole id='bottom-q-whole'>
            <FrontOrBack id='bottom-up'>
                <PushingDiv />
                <InnerDiv>
                    <FrontBack id='front-end'>
                        front-end
                    </FrontBack>
                    <Or>
                        or
                    </Or>
                    <FrontBack id='back-end'>
                        back-end
                    </FrontBack>
                </InnerDiv>
            </FrontOrBack>
            <FrontOrBack id='bottom-bottom'>
                <FrontBack id='full-stack'>
                    full-stack
                </FrontBack>
                <PushingDiv />
            </FrontOrBack>
        </BottomQuestionWhole>

        <IWhole id='i-part'>
            <IPart id='i-part-1'>
                <I className='scrollable-i' id='scrollable-i-1'>
                    <ISingle>
                        
                    </ISingle>
                    <ISingle>
                        I
                    </ISingle>
                    <ISingle>
                        
                    </ISingle>
                </I>
                <WhatIDo id='typable-what-i-do-1'>
                    write code 4 hours daily.
                </WhatIDo>
            </IPart>
            <IPart id='i-part-2'>
                <I className='scrollable-i' id='scrollable-i-2'>
                    <ISingle>
                        
                    </ISingle>
                    <ISingle>
                        I
                    </ISingle>
                    <ISingle>
                       
                    </ISingle>
                </I>
                <WhatIDo id='typable-what-i-do-2'>
                    have my goals set high.
                </WhatIDo>
            </IPart>
            <IPart id='i-part-3'>
                <I className='scrollable-i' id='scrollable-i-3'>
                    <ISingle>
                        
                    </ISingle>
                    <ISingle>
                        I
                    </ISingle>
                    <ISingle>
                        
                    </ISingle>
                </I>
                <WhatIDo id='typable-what-i-do-3'>
                    love JavaScript! 
                </WhatIDo>
            </IPart>
            <IPart id='i-part-4'>
                <I className='scrollable-i' id='scrollable-i-4'>
                    <ISingle>
                        
                    </ISingle>
                    <ISingle>
                        I
                    </ISingle>
                    <ISingle>
                        
                    </ISingle>
                </I>
                <WhatIDo id='typable-what-i-do-4'>
                    've created two e-shops.
                </WhatIDo>
            </IPart>
            <IPart id='i-part-5'>
                <I className='scrollable-i' id='scrollable-i-5'>
                    <ISingle>
                        
                    </ISingle>
                    <ISingle>
                        I
                    </ISingle>
                    <ISingle>
                        
                    </ISingle>
                </I>
                <WhatIDo id='typable-what-i-do-5'>
                    am excited you are here!
                </WhatIDo>
            </IPart>
        </IWhole>

      </>
  );
}
