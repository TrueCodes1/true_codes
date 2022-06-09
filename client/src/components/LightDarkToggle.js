//IMPORTING MODULES
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

//IMPORTING STYLED COMPONENTS
import MainSwitch from './styledComponents/LightDarkToggle/MainSwitch';
import ToggleBall from './styledComponents/LightDarkToggle/ToggleBall';

//IMPORTING ALL OTHER NECCESSARY FILES
import './styles/all.css';
import './styles/animations.css';
import colors from './jsons/colors';

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;


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
