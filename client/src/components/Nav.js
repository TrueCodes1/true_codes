import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

import './styles/fonts.css';

import BurgerLink from './images/NavbarBurger.svg'; 
import LeaveCrossLink from './images/burgerClose.svg';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const EntranceMobileNav = keyframes`
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

const LeavingMobileNav = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-20px);
        opacity: 0;
    }
`

const NavMain = styled.div`
    @media only screen and (max-width: 576px) {
        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        max-height: 100vh;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        display: flex;
        visibility: hidden;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        background: ${primaryColor};
        z-index: 99999;
        &.enter {
            animation: 1 .15s ${EntranceMobileNav};
            -webkit-animation: 1 .15s ${EntranceMobileNav}
        }
        &.leave {
            animation: 1 .35s ${LeavingMobileNav};
            -webkit-animation: 1 .35s ${LeavingMobileNav};
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        max-height: 100vh;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        display: flex;
        visibility: hidden;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        background: ${primaryColor};
        z-index: 99999;
        &.enter {
            animation: 1 .15s ${EntranceMobileNav};
            -webkit-animation: 1 .15s ${EntranceMobileNav}
        }
        &.leave {
            animation: 1 .35s ${LeavingMobileNav};
            -webkit-animation: 1 .35s ${LeavingMobileNav};
        }
    }
    @media only screen and (min-width: 992px) {
        color: ${secondaryColor};
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100vw;
        max-width: 100vw;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    }
`

const LeaveCrossComing = keyframes`
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

const LeaveCrossLeaving = keyframes`
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

const NavLeaveCrossMobile = styled.div`
    @media only screen and (max-width: 576px) {
        min-width: 15vw;
        max-width: 15vw;
        min-height: 15vw;
        max-height: 15vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 20px;
        left: calc(50vw - 30px);
        margin: 0 auto;
        &.enter {
            animation: 1 2.5s ${LeaveCrossComing};
            -webkit-animation: 1 2.5s ${LeaveCrossComing};
        }
        &.leave{
            animation: 1 2.5s ${LeaveCrossLeaving};
            -webkit-animation: 1 2.5s ${LeaveCrossLeaving};
        }
        &.after-leave {
            left: 10px;
            top: -120px;
            transform: rotateZ(-540deg)
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        min-width: 14vw;
        max-width: 14vw;
        min-height: 14vw;
        max-height: 14vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 40px;
        left: calc(50vw - 60px);
        margin: 0 auto;
        &.enter {
            animation: 1 2.5s ${LeaveCrossComing};
            -webkit-animation: 1 2.5s ${LeaveCrossComing};
        }
        &.leave{
            animation: 1 2.5s ${LeaveCrossLeaving};
            -webkit-animation: 1 2.5s ${LeaveCrossLeaving};
        }
        &.after-leave {
            left: 10px;
            top: -120px;
            transform: rotateZ(-540deg)
        }
    }
    @media only screen and (min-width: 992px) {
        display: none;
    }
`

const NavLeaveCrossMobileImg = styled.img`
    min-width: 100%;
    max-width: 100%;
`

const NavUl = styled.ul`
    @media only screen and (max-width: 576px) {
        display: flex;
        font-family: SVN-Gilroy;
        color: ${secondaryColor};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        font-size: 4vh;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        display: flex;
        font-family: SVN-Gilroy;
        color: ${secondaryColor};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        font-size: 7vh;
    }
    @media only screen and (min-width: 992px) {
        padding: 20px 0;
        min-width: 30vw;
        max-width: 30vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        font-family: SVN-Gilroy;

        &.dark {
            color: red
        }

        &.light {
            color: green
        }
    }
`

const FloatIn = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: 0
    }
    100% {
        transform: translateY(0);
        opacity: 1
    }
`

const Bubble = keyframes`
    0%, 40%, 100% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.1)
    }
`

const NavA = styled.p`
    @media only screen and (max-width: 576px) {
        text-decoration: none;
        color: ${secondaryColor};
        opacity: 0;
        margin: 2vh 0;
        &.float{
            animation: .75s 1 ${FloatIn};
        }

        &.bubble {
            animation: infinite 3s ${Bubble}
        }

        &.dark{
            color: ${secondaryColor};
        }
        
        &.light{
            color: ${primaryColor};
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        text-decoration: none;
        color: ${secondaryColor};
        opacity: 0;
        margin: 3vh 0;
        &.float{
            animation: .75s 1 ${FloatIn};
        }

        &.bubble {
            animation: infinite 3s ${Bubble}
        }

        &.dark{
            color: ${secondaryColor};
        }
        
        &.light{
            color: ${primaryColor};
        }
    }
    @media only screen and (min-width: 992px) {
        text-decoration: none;
        color: ${secondaryColor};
        opacity: 0;

        &.float{
            animation: .75s 1 ${FloatIn};
        }

        &.bubble {
            animation: infinite 3s ${Bubble}
        }

        &.dark{
            color: ${secondaryColor};
        }
        
        &.light{
            color: ${primaryColor};
        }
    }
`

const NavLi = styled.li`
    cursor: pointer;
`

const BurgerLeave = keyframes`
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

const NavBurgerMobile = styled.div`
    @media only screen and (max-width: 576px) {
        position: absolute;
        min-width: 50px;
        max-width: 50px;
        min-height: 50px;
        max-height: 50px;
        left: 20px;
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.fall {
            animation: 1 1.5s ${BurgerLeave};
            -webkit-animation: 1 1.25s ${BurgerLeave};
        }
        &.above {
            top: -120px;
        }
        &.come-back {
            top: 10px;
            transition: all .5s ease
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        position: absolute;
        min-width: 100px;
        max-width: 100px;
        min-height: 100px;
        max-height: 100px;
        left: 40px;
        top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.fall {
            animation: 1 1.5s ${BurgerLeave};
            -webkit-animation: 1 1.25s ${BurgerLeave};
        }
        &.above {
            top: -120px;
        }
        &.come-back {
            top: 10px;
            transition: all .5s ease
        }
    }
    @media only screen and (min-width: 992px) {
        display: none;
    }
`

const BurgerImg = styled.img`
    min-width: 100%;
    max-width: 100%;
`

function Nav(props) {

    useEffect(() => {

        let currentPart = 'who I am';
        let moving = false;

        const navA1 = document.getElementById('nav-a-1');
        const navA2 = document.getElementById('nav-a-2');
        const navA3 = document.getElementById('nav-a-3');

        const ComeToHome = () => {

            let mainDiv = document.getElementById('main-div');
            let nameDiv = document.getElementById('name');
            let subNameDiv = document.getElementById('sub-name');
            let subSubNameDiv = document.getElementById('sub-sub-name');

            if ($(window).width() < 993) {
                $(mainDiv).css('display', 'flex');
                hideMobileMenu();
                setTimeout(() => {
                    moving = false
                }, 350)
            } else {

                nameDiv.style.opacity = '0';
                subNameDiv.style.opacity = '0';
                subSubNameDiv.style.opacity = '0';
    
                mainDiv.style.display = 'flex';
                
                setTimeout(() => {
                    mainDiv.style.opacity = '1';
                    nameDiv.classList.add('float');
                }, 200)
                
                setTimeout(() => {
                    subNameDiv.classList.add('float');
                }, 400)
                
                setTimeout(() => {
                    subSubNameDiv.classList.add('float');
                }, 600)
                
                setTimeout(() => {
                    nameDiv.style.opacity = '1';
                }, 950)
                
                setTimeout(() => {
                    subNameDiv.style.opacity = '.5';
                }, 1150)
                
                setTimeout(() => {
                    subSubNameDiv.style.opacity = '.75';
                    
                    nameDiv.classList.remove('float');
                    subNameDiv.classList.remove('float');
                    subSubNameDiv.classList.remove('float');
    
                    moving = false
    
                }, 1350)

            }

        }
        
        const ComeToWork = () => {

            let mainDiv = document.getElementById('main-div-work');
            let choices = document.getElementById('work-choices');
            let singleChoices = document.getElementsByClassName('choice-work');

            if ($(window).width() < 993) {
                $(mainDiv).css('display', 'flex');
                hideMobileMenu();
                setTimeout(() => {
                    moving = false
                }, 350)
            } else {

                mainDiv.style.opacity = '1';
                mainDiv.style.visibility = 'visible';
    
                for (let choice of singleChoices) {
                    choice.style.opacity = '0'
                }
    
                choices.style.opacity = '1';
                choices.style.visibility = 'visible';
                choices.classList.add('come');
    
                setTimeout(() => {
                    choices.style.minHeight = '70vh';
                    choices.style.maxHeight = '70vh';
                    choices.classList.remove('come');
                    moving = false
                }, 1000)
    
                let timeout = 70;
    
                for (let choice of singleChoices) {
                    setTimeout(() => {
                        choice.classList.add('come');
                        choice.style.opacity = '.75';
                    }, timeout)
                    choice.addEventListener('animationend', () => {
                        choice.style.opacity = '.75';
                        choice.classList.remove('come');
                    })
                    timeout+=70
                    
                }
            }

        }
        
        const ComeToContact = () => {

            let form = document.getElementById('contact-form');
            let inputs = document.getElementsByClassName('contact-input');
            let textarea = document.getElementById('contact-textarea');
            let button = document.getElementById('contact-button');

            if ($(window).width() < 993) {
                $(form).css('display', 'flex');
                hideMobileMenu();
                setTimeout(() => {
                    moving = false
                }, 350)
            } else {

                form.style.visibility = 'visible';
    
                for (let input of inputs){
                    input.classList.add('come');
                    setTimeout(() => {
                        input.classList.remove('come');
                        input.style.color = '#e9f1f7';
                        input.style.boxShadow = '13px 13px 26px #0d1318, -13px -13px 26px #19232e'
                    }, 1400)
                }
    
                textarea.classList.add('come');
                setTimeout(() => {
                    textarea.classList.remove('come');
                    textarea.style.color = '#e9f1f7';
                    textarea.style.boxShadow = '13px 13px 26px #0d1318, -13px -13px 26px #19232e'
                
                    button.style.color = '#e9f1f7';
                    button.classList.add('come');
                
                }, 1400)
    
                setTimeout(() => {
                    button.classList.remove('come');
                    button.style.padding = '.75em 0 .75em 15px';
    
                    moving = false
    
                }, 1700)

            }
        }
        
        const LeaveHome = (destination) => {

            let mainDiv = document.getElementById('main-div');
            let nameDiv = document.getElementById('name');
            let subNameDiv = document.getElementById('sub-name');
            let subSubNameDiv = document.getElementById('sub-sub-name');

            if ($(window).width() < 993) {
                $(mainDiv).css('display', 'none');
                switch(destination){
                    case 'my work':
                        ComeToWork();
                        break
                    case 'who I am':
                        ComeToHome();
                        break
                    case 'hit me up':
                        ComeToContact();
                        break
                }
            } else {

                mainDiv.style.display = 'flex';
                mainDiv.style.opacity = '1';
                
                setTimeout(() => {
                    nameDiv.classList.add('float-out');
                }, 200)
                
                setTimeout(() => {
                    subNameDiv.classList.add('float-out');
                }, 400)
                
                setTimeout(() => {
                    subSubNameDiv.classList.add('float-out');
                }, 600)
                
                setTimeout(() => {
                    nameDiv.style.opacity = '0';
                }, 850)
                
                setTimeout(() => {
                    subNameDiv.style.opacity = '0';
                }, 1050)
                
                setTimeout(() => {
                    subSubNameDiv.style.opacity = '0';
                    mainDiv.style.display = 'none';
                    
                    nameDiv.classList.remove('float-out');
                    subNameDiv.classList.remove('float-out');
                    subSubNameDiv.classList.remove('float-out');
    
                    switch(destination){
                        case 'my work':
                            ComeToWork();
                            break
                        case 'who I am':
                            ComeToHome();
                            break
                        case 'hit me up':
                            ComeToContact();
                            break
                    }
    
                }, 1250)

            }

        }

        const LeaveWork = (destination) => {

            let choices = document.getElementById('work-choices');
            let singleChoices = document.getElementsByClassName('choice-work');

            if ($(window).width() < 993) {
                $('#main-div-work').css('display', 'none');
                switch(destination){
                    case 'my work':
                        ComeToWork();
                        break
                    case 'who I am':
                        ComeToHome();
                        break
                    case 'hit me up':
                        ComeToContact();
                        break
                }
            } else {

                for (let choice of singleChoices) {
                    choice.classList.add('leave');
                    setTimeout(() => {
                        choice.style.opacity = '0';
                        choice.classList.remove('leave');
                    }, 1250)
                }
    
                setTimeout(() => {  
                    choices.classList.add('leave');
                }, 300)
    
                setTimeout(() => {
                    choices.style.maxWidth = '1px'; 
                    choices.style.minHeight = '0';
                    choices.style.maxHeight = '0';
                    choices.style.opacity = '0';
                    choices.style.visibility = 'hidden';
                    /*
                    for (let choice of singleChoices) {
                        choice.classList.remove('leave');
                        choice.style.opacity = '0';
                    }*/
                    choices.classList.remove('leave');
                    
                    switch(destination){
                        case 'my work':
                            ComeToWork();
                            break
                        case 'who I am':
                            ComeToHome();
                            break
                        case 'hit me up':
                            ComeToContact();
                            break
                    }
    
                }, 1500)
            }

        }

        const LeaveContact = (destination) => {

            let form = document.getElementById('contact-form');
            let inputs = document.getElementsByClassName('contact-input');
            let textarea = document.getElementById('contact-textarea');
            let button = document.getElementById('contact-button');

            if ($(window).width() < 993) {
                $(form).css('display', 'none');
                switch(destination){
                    case 'my work':
                        ComeToWork();
                        break
                    case 'who I am':
                        ComeToHome();
                        break
                    case 'hit me up':
                        ComeToContact();
                        break
                }
            } else {

                form.style.visibility = 'visible';
    
                for (let input of inputs){
                    input.classList.add('leave');
                    setTimeout(() => {
                        input.classList.remove('leave');
                        input.style.color = '#131b23';
                        input.style.boxShadow = 'none'
                    }, 1400)
                }
    
                textarea.classList.add('leave');
                setTimeout(() => {
                    textarea.classList.remove('leave');
                    textarea.style.color = '#131b23';
                    textarea.style.boxShadow = 'none'
                
                    button.style.color = '#e9f1f7';
                    button.classList.add('leave');
                
                }, 1400)
    
                setTimeout(() => {
                    button.style.color = '#131b23';
                    button.classList.remove('leave');
    
                    form.style.visibility = 'hidden';
    
                    switch(destination){
                        case 'my work':
                            ComeToWork();
                            break
                        case 'who I am':
                            ComeToHome();
                            break
                        case 'hit me up':
                            ComeToContact();
                            break
                    }
    
                }, 1450)
            }

        }

        function RoutesSwitch () {
            
            let toGo = this.querySelector('.nav-li').innerHTML;

            if (moving != true){
                moving = true;
                if (toGo == currentPart){
                    if ($(window).width() < 993) {
                        hideMobileMenu()
                        setTimeout(() => {
                            moving = false;
                        }, 350)
                    } else {
                        moving = false;
                    }
                } else {
                    switch (currentPart) {
                        case 'who I am':
                            LeaveHome(toGo);
                            break
                        case 'my work':
                            LeaveWork(toGo);
                            break
                        case 'hit me up':
                            LeaveContact(toGo);
                            break
                    }
                    currentPart = toGo;
                }
            }

        }

        for (let link of document.getElementsByClassName('nav-a')){
            link.addEventListener('click', RoutesSwitch)
        }

        if ($(window).width() > 991) {
            if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
                navA1.style.opacity = '1';
                navA2.style.opacity = '1';
                navA3.style.opacity = '1';
                
                setTimeout(() => {
                    navA1.classList.add('bubble')
                }, 100);
                
                setTimeout(() => {
                    navA2.classList.add('bubble')
                }, 300);
                
                setTimeout(() => {
                    navA3.classList.add('bubble')
                }, 500);
                
            } else {
    
                setTimeout(() => {
                    navA1.classList.add('float');
                }, 26000);
                
                setTimeout(() => {
                    navA2.classList.add('float');
                }, 26200);
                
                setTimeout(() => {
                    navA3.classList.add('float');
                }, 26400);
                
                setTimeout(() => {
                    navA1.style.opacity = '1';
                }, 26750);
                
                setTimeout(() => {
                    navA2.style.opacity = '1';
                }, 26950);
                
                setTimeout(() => {
                    navA3.style.opacity = '1';
                }, 27150);
    
                setTimeout(() => {
                    navA1.classList.add('bubble')
                }, 29000);
                
                setTimeout(() => {
                    navA2.classList.add('bubble')
                }, 29200);
                
                setTimeout(() => {
                    navA3.classList.add('bubble')
                }, 29400);
                
            }
        } else {
            navA1.style.opacity = '1';
            navA2.style.opacity = '1';
            navA3.style.opacity = '1';
            
            setTimeout(() => {
                navA1.classList.add('bubble')
            }, 100);
            
            setTimeout(() => {
                navA2.classList.add('bubble')
            }, 300);
            
            setTimeout(() => {
                navA3.classList.add('bubble')
            }, 500);
            
        }

        const hideMobileMenu = () => {/*
            $('#burger-mobile').css('display', 'flex');
            $('#cross-mobile').addClass('leave');
            setTimeout(() => {
                $('#cross-mobile').addClass('after-leave');*/
                $('#nav-main').addClass('leave');
                setTimeout(() => {
                    $('#nav-main').removeClass('leave');
                    $('#nav-main').css('opacity', '0');
                    $('#nav-main').css('visibility', 'hidden');/*
                    $('#burger-mobile').addClass('come-back');
                    $('#burger-mobile').removeClass('above');
                    $('#cross-mobile').removeClass('leave');
                    $('#cross-mobile').removeClass('after-leave');
                    setTimeout(() => {*/
                    $('#nav-main').css('opacity', '1');/*
                        $('#burger-mobile').removeClass('come-back')
                    }, 500)*/
                }, 350)/*
            }, 2500)*/
        }

        const showMobileMenu = () => {
            /*
            $('#burger-mobile').addClass('fall');
            $('#burger-mobile').on('animationend', () => {
                $('#burger-mobile').css('display', 'none');
                $('#burger-mobile').removeClass('fall');
                $('#burger-mobile').addClass('above');*/
                $('#nav-main').css('visibility', 'visible');
                $('#nav-main').removeClass('leave');
                $('#nav-main').addClass('enter');/*
                $('#cross-mobile').addClass('enter');*/
                setTimeout(() => {
                    $('#nav-main').removeClass('enter');/*
                    $('#cross-mobile').removeClass('enter');*/
                    $('#nav-main').css('visibility', 'visible');
                    $('#cross-mobile').on('click', hideMobileMenu);
                }, 150)/*
            })*/
        }

        $('#burger-mobile').on('click', showMobileMenu);

    })

    return( 
    <>
        <NavBurgerMobile id="burger-mobile">
            <BurgerImg src={BurgerLink} />
        </NavBurgerMobile>
        <NavMain className="nav-main" id="nav-main">
            <NavLeaveCrossMobile id="cross-mobile">
                <NavLeaveCrossMobileImg src={LeaveCrossLink} />
            </NavLeaveCrossMobile>
            <NavUl className='nav-ul'>
                <NavA className={'nav-a ' + props.theme} id="nav-a-1">    
                    <NavLi className="nav-li">
                        who I am
                    </NavLi>
                </NavA>
                <NavA className={'nav-a ' + props.theme} id="nav-a-2">
                    <NavLi className="nav-li">
                        my work
                    </NavLi>
                </NavA>
                <NavA className={'nav-a ' + props.theme} id="nav-a-3">        
                    <NavLi className="nav-li">
                        hit me up
                    </NavLi>
                </NavA>
            </NavUl>
        </NavMain>
        </>
    )
}

export default Nav;