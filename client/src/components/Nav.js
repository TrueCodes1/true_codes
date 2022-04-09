import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';

import './styles/fonts.css';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const NavMain = styled.div`
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
    z-index: 999
`

const NavUl = styled.ul`
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
`

const NavLi = styled.li`
    cursor: pointer
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

            nameDiv.style.opacity = '0';
            subNameDiv.style.opacity = '0';
            subSubNameDiv.style.opacity = '0';

            mainDiv.style.display = 'flex';
            mainDiv.style.opacity = '1';
            
            setTimeout(() => {
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
        
        const ComeToWork = () => {

            let mainDiv = document.getElementById('main-div-work');
            let choices = document.getElementById('work-choices');
            let singleChoices = document.getElementsByClassName('choice-work');

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
        
        const ComeToContact = () => {

            let form = document.getElementById('contact-form');
            let inputs = document.getElementsByClassName('contact-input');
            let textarea = document.getElementById('contact-textarea');
            let button = document.getElementById('contact-button');

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
        
        const LeaveHome = (destination) => {

            let mainDiv = document.getElementById('main-div');
            let nameDiv = document.getElementById('name');
            let subNameDiv = document.getElementById('sub-name');
            let subSubNameDiv = document.getElementById('sub-sub-name');

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
            }, 950)
            
            setTimeout(() => {
                subNameDiv.style.opacity = '0';
            }, 1150)
            
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

            }, 1350)

        }

        const LeaveWork = (destination) => {

            let choices = document.getElementById('work-choices');
            let singleChoices = document.getElementsByClassName('choice-work');

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

        const LeaveContact = (destination) => {

            let form = document.getElementById('contact-form');
            let inputs = document.getElementsByClassName('contact-input');
            let textarea = document.getElementById('contact-textarea');
            let button = document.getElementById('contact-button');

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

        function RoutesSwitch () {
            
            let toGo = this.querySelector('.nav-li').innerHTML;

            if (moving != true){
                moving = true;
                if (toGo == currentPart){
                    moving = false;
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

    })

    return(
        <NavMain className="nav-main">
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
    )
}

export default Nav;