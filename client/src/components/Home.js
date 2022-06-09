//IMPORTING MODULES
import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

//IMPORTING STYLED COMPONENTS
import MainDiv from "./styledComponents/Home/MainDiv";
import Heading from './styledComponents/Home/Heading';
import P from './styledComponents/Home/P';
import SideMainDiv from './styledComponents/Home/SideMainDiv';
import NameDiv from './styledComponents/Home/NameDiv';
import SubDiv from './styledComponents/Home/SubDiv';
import SubSubDiv from './styledComponents/Home/SubSubDiv'

//IMPORTING OTHER COMPONENTS
import SocialsHome from "./SocialsHome";
import PersonalPhoto from "./PersonalPhoto";
import OpeningTag from "./OpeningTag";

//IMPORTING OTHER NECCESSARY FILES
import './styles/fonts.css';
import './styles/animations.css';
import colors from "./jsons/colors";

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default (props) => {
    
    useEffect(() => {

        const mainDiv = document.getElementById('main-div');
        const nameDiv = document.getElementById('name');
        const subNameDiv = document.getElementById('sub-name');
        const subSubNameDiv = document.getElementById('sub-sub-name');

        if ($(window).width() > 991) {
            if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
                nameDiv.style.opacity = '1';
                subNameDiv.style.opacity = '1';
                subSubNameDiv.style.opacity = '.5';
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
        } else {
            nameDiv.style.opacity = '1';
            subNameDiv.style.opacity = '1';
            subSubNameDiv.style.opacity = '.5';
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
                    I'm 20 and I've been in game for almost 2 years now, with some both 
                    client and personal projects out there!  
                </SubSubDiv>
            </SideMainDiv>

        </>
    )
}