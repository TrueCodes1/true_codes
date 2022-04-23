import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import './styles/animations.css';

import Linkedin_50x50 from './images/linkedin_50x50.svg';
import Github_50x50 from './images/github_50x50.svg';
import Instagram_50x50 from './images/instagram_50x50.svg';
import Gmail_50x50 from './images/gmail_50x50.svg';

const Ul = styled.ul`
    @media only screen and (max-width: 576px) {
        position: fixed;
        width: fit-content;
        min-width: 110vw;
        left: -5vw;
        right: 0;
        margin: 0 auto;
        bottom: 5vw;
        display: flex;
        flex-direction: row;
        alig-items: center;
        justify-content: space-evenly;
        padding: 25px 10px;
        border-radius: 10px;
        background: linear-gradient(90deg, rgb(233, 241, 247, 0.1) 0%, rgba(19, 27, 35, 0.1) 60%);
        backdrop-filter: blur(15px);
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        position: fixed;
        width: fit-content;
        min-width: 110vw;
        left: -5vw;
        right: 0;
        margin: 0 auto;
        bottom: 5vw;
        display: flex;
        flex-direction: row;
        alig-items: center;
        justify-content: space-evenly;
        padding: 30px 20px;
        border-radius: 10px;
        background: linear-gradient(90deg, rgb(233, 241, 247, 0.1) 0%, rgba(19, 27, 35, 0.1) 60%);
        backdrop-filter: blur(15px);
    }
    @media only screen and (min-width: 992px) {
        padding: 0;
        list-style: none;
        position: absolute;
        min-width: 300px;
        max-width: 300px;
        min-height: 100px;
        max-height: 100px;
        bottom: 2vh;
        left: calc((100vw - 300px) / 2);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

const FloatIn = keyframes`
    0% {
        transform: translateY(20px);
        opacity: 0
    }
    100% {
        transform: translateY(0);
        opacity: 1
    }
`

const GmailFloatIn = keyframes`
    0% {
        transform: translateY(20px);
        opacity: 0
    }
    100% {
        transform: translateY(5px);
        opacity: 1
    }
`

const Li = styled.li`
    @media only screen and (max-width: 576px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 20px;

        &.float{
            animation: .75s 1 ${GmailFloatIn};
            opacity: 1
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;

        &.float{
            animation: .75s 1 ${GmailFloatIn};
            opacity: 1
        }
    }
    @media only screen and (min-width: 992px) {
        display: flex;
        align-items: center;
        justify-content: center;

        &.float{
            animation: .75s 1 ${FloatIn};
            opacity: 1
        }
    }
`

const LiGmail = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(5px);
    min-width: 80px;
    max-width: 80px;
    min-height: 80px;
    max-height: 80px;
    
    &.float{
        animation: .75s 1 ${GmailFloatIn};
        opacity: 1
    }
`

const SocialLogo = styled.img`
    @media only screen and (max-width: 576px) {
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        min-width: 80px;
        max-width: 80px;
        min-height: 80px;
        max-height: 80px;
    }
    @media only screen and (min-width: 992px) {
    }
`

export default () => {

    useEffect(() =>{

        const Lis = document.getElementsByClassName('socials-li');
        const Li1 = document.getElementById('social-li-1');
        const Li2 = document.getElementById('social-li-2');
        const Li3 = document.getElementById('social-li-3');

        if ($(window).width() > 991) {
            if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
                Li1.style.opacity = '1';
                Li2.style.opacity = '1';
                Li3.style.opacity = '1';
            } else {
    
                Li1.style.opacity = '0';
                Li2.style.opacity = '0';
                Li3.style.opacity = '0';
    
                for (let Li of Lis){
                    Li.style.opacity = '0'
                }
    
                setTimeout(() =>{
                    Li1.classList.add('float')
                }, 25500)
    
                setTimeout(() =>{
                    Li2.classList.add('float')
                }, 25700)
    
                setTimeout(() =>{
                    Li3.classList.add('float')
                }, 25900)
    
                setTimeout(() => {
                    Li1.style.opacity = '1';
                }, 26250);
                
                setTimeout(() => {
                    Li2.style.opacity = '1';
                }, 26450);
                
                setTimeout(() => {
                    Li3.style.opacity = '1';
                }, 26650);
            
            }
        } else {
            Li1.style.opacity = '1';
            Li2.style.opacity = '1';
            Li3.style.opacity = '1';
        }

    })

  return (
      <>
        <div>
            <Ul className='ul'>
                <Li className='socials-li' id='social-li-1'>
                    <a href='https://sk.linkedin.com/in/norbert-sviatko-747099230' target='_blank'>
                        <SocialLogo src={Linkedin_50x50}/>
                    </a>
                </Li>
                <Li className='socials-li' id='social-li-2'>
                    <a href='https://github.com/TrueCodes1' target='_blank'>
                        <SocialLogo src={Github_50x50} />
                    </a>
                </Li>
                <Li className='socials-li' id='social-li-3'>
                    <a href='https://www.instagram.com/norbert_sviatko/' target='_blank'>
                        <SocialLogo src={Instagram_50x50} />
                    </a>
                </Li>
            </Ul>
        </div>
      </>
  );
}
