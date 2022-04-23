import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import './styles/all.css';
import './styles/animations.css';

const light = '#e9f1f7';
const dark = '#131b23';

var primaryColor = dark;
var secondaryColor = light;

const MainSwitch = styled.div`
    @media only screen and (max-width: 576px) {
        position: absolute;
        min-width: 80px;
        max-width: 80px;
        min-height: 48px;
        max-height: 48px;
        top: 10px;
        right: 10px;
        border: 1px solid ${secondaryColor};
        border-radius: 23px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 3.5px;
        transition: .25s ease;
        z-index: 999;
        opacity: 0;

        &.dark {
            background: ${primaryColor}
        }

        &.light {
            background: ${secondaryColor}
        }
    }
    @media only screen and (min-width: 768px) {
        position: absolute;
        min-width: 80px;
        max-width: 80px;
        min-height: 48px;
        max-height: 48px;
        top: 40px;
        right: 20px;
        border: 1px solid ${secondaryColor};
        border-radius: 23px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 3.5px;
        transition: .25s ease;
        z-index: 999;
        opacity: 0;

        &.dark {
            background: ${primaryColor}
        }

        &.light {
            background: ${secondaryColor}
        }
    }
    @media only screen and (min-width: 992px) {
        position: absolute;
        min-width: 80px;
        max-width: 80px;
        min-height: 48px;
        max-height: 48px;
        top: 10px;
        right: 10px;
        border: 1px solid ${secondaryColor};
        border-radius: 23px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 3.5px;
        transition: .25s ease;
        z-index: 999;
        opacity: 0;

        &.dark {
            background: ${primaryColor}
        }

        &.light {
            background: ${secondaryColor}
        }
    }
`

const ToggleBall = styled.div`
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;/*
    border: 2px solid ${primaryColor};
    background: ${primaryColor};*/
    border-radius: 20px;
    cursor: pointer;
    
    &.dark {
        background: ${secondaryColor}
    }

    &.light {
        background: ${primaryColor}
    }
`

export default function LightDarkToggle(props) {


    useEffect(() => {

        const Switch = document.getElementById('main-switch');
        const switchBall = document.getElementById('switch-ball');

        if ($(window).width() > 991) {
            if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
                Switch.style.opacity = '1';
            } else {
    
                setTimeout(() => {
                    Switch.style.transition = 'all .5s ease';
                    Switch.style.opacity = '1';
                }, 29000)
            }
        } else {
            Switch.style.opacity = '1';
        }

    })
            

        /*
            function changeMode() {
                if (mode.primaryColor == dark){
                    mainStyle.animation = '.25s 1 toggleToRight';
                    mainStyle.WebkitAnimation = '.25s 1 toggleToRight';
                    mainStyle.padding = '0 3.5px 0 33.5px';
                    setMode({
                        primaryColor: light,
                        secondaryColor: dark
                    })
                } else {
                    mainStyle.animation = '.25s 1 toggleToLeft';
                    mainStyle.WebkitAnimation = '.25s 1 toggleToLeft';
                    mainStyle.padding = '0 3.5px 0 3.5px';
                    setMode({
                        primaryColor: dark,
                        secondaryColor: light
                    })
                }
            };*/

  return (
      <>
        <MainSwitch id='main-switch' className={props.theme}>
            <ToggleBall id='switch-ball' className={props.theme}></ToggleBall>
        </MainSwitch>
      </>
  );
}
