import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import './styles/animations.css';

import Linkedin_50x50 from './images/linkedin_50x50.svg';
import Github_50x50 from './images/github_50x50.svg';
import Instagram_50x50 from './images/instagram_50x50.svg';
import Gmail_50x50 from './images/gmail_50x50.svg';

const Ul = styled.ul`
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
    justify-content: space-between
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
    display: flex;
    align-items: center;
    justify-content: center;

    &.float{
        animation: .75s 1 ${FloatIn};
        opacity: 1
    }
`

const LiGmail = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(5px);
    
    &.float{
        animation: .75s 1 ${GmailFloatIn};
        opacity: 1
    }
`

export default () => {

    useEffect(() =>{

        const Lis = document.getElementsByClassName('socials-li');
        const Li1 = document.getElementById('social-li-1');
        const Li2 = document.getElementById('social-li-2');
        const Li3 = document.getElementById('social-li-3');
        const Li4 = document.getElementById('social-li-4');

        if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
            Li1.style.opacity = '1';
            Li2.style.opacity = '1';
            Li3.style.opacity = '1';
            Li4.style.opacity = '1';
        } else {

            Li1.style.opacity = '0';
            Li2.style.opacity = '0';
            Li3.style.opacity = '0';
            Li4.style.opacity = '0';

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

            setTimeout(() =>{
                Li4.classList.add('float')
            }, 26100)

            setTimeout(() => {
                Li1.style.opacity = '1';
            }, 26250);
            
            setTimeout(() => {
                Li2.style.opacity = '1';
            }, 26450);
            
            setTimeout(() => {
                Li3.style.opacity = '1';
            }, 26650);
            
            setTimeout(() => {
                Li4.style.opacity = '1';
            }, 26850);
        }

    })

  return (
      <>
        <div>
            <Ul className='ul'>
                <Li className='socials-li' id='social-li-1'>
                    <img src={Linkedin_50x50} />
                </Li>
                <Li className='socials-li' id='social-li-2'>
                    <img src={Github_50x50} />
                </Li>
                <Li className='socials-li' id='social-li-3'>
                    <img src={Instagram_50x50} />
                </Li>
                <LiGmail className='socials-li' id='social-li-4'>
                    <img src={Gmail_50x50} />
                </LiGmail>
            </Ul>
        </div>
      </>
  );
}
