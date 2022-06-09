//IMPORTING MODULES
import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

//IMPORTING STYLED COMPONENTS
import BurgerImg from './styledComponents/Nav/BurgerImg';
import NavBurgerMobile from "./styledComponents/Nav/NavBurgerMobile";
import NavLi from "./styledComponents/Nav/NavLi";
import NavUl from "./styledComponents/Nav/NavUl";
import NavA from "./styledComponents/Nav/NavA";
import NavLeaveCrossMobileImg from "./styledComponents/Nav/NavLeaveCrossMobileImg";
import NavLeaveCrossMobile from "./styledComponents/Nav/NavLeaveCrossMobile";
import NavMain from "./styledComponents/Nav/NavMain";

//IMPORTING OTHER NECCESSARY FILES
import './styles/fonts.css';
import BurgerLink from './images/NavbarBurger.svg'; 
import LeaveCrossLink from './images/burgerClose.svg';
import colors from './jsons/colors';

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;


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
                }, 850)
                
                setTimeout(() => {
                    subNameDiv.style.opacity = '.5';
                }, 1050)
                
                setTimeout(() => {
                    subSubNameDiv.style.opacity = '.75';
                    
                    nameDiv.classList.remove('float');
                    subNameDiv.classList.remove('float');
                    subSubNameDiv.classList.remove('float');
    
                    moving = false
    
                }, 1250)

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

        $(window).on('resize', () => {
            if ($(window).width() > 991) {
                $('#nav-main').css('visibility', 'visible');
            } else {
                $('#nav-main').css('visibility', 'hidden');
            }
        })

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