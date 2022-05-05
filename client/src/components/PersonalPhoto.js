import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import $ from 'jquery';

import './styles/fonts.css';
import './styles/animations.css';
import './styles/all.css';
import SocialsHome from "./SocialsHome";

import PersonalPhoto from './images/personal_photo_3-min.png';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const Float = keyframes`
    0% {
        transform: translateX(40px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1
    }
`

const PersonalPhotoDiv = styled.div`
    @media only screen and (min-width: 10px) and (max-width: 370px) {
        display: none;
    }
    @media only screen and (min-width: 371px) and (max-width: 576px) {
        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        left: 0;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        position: fixed;
        min-width: 100vw;
        max-width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        left: 0;
    }
    @media only screen and (min-width: 992px) {
        position: fixed;
        min-width: 50vw;
        max-width: 50vw;
        min-height: 100vh;
        max-height: 100vh;
        bottom: 0;
        right: 0;
        overflow: hidden;
        display: flex;
        opacity: 0;

        &.float{
            animation: .75s 1 ${Float}
        }
    }
`

const PersonalPhotoImg = styled.img`
    @media only screen and (min-width: 10px) and (max-width: 370px) {
        display: none;
    }
    @media only screen and (min-width: 371px) and (max-width: 576px) {
        position: fixed;
        min-height: 60vh;
        max-height: 60vh;
        right: 0;
        bottom: 0;
        opacity: .5;
    }
    @media only screen and (min-width: 576px) and (max-width: 991px) {
        position: fixed;
        min-height: 90vw;
        max-height: 90vw;
        right: 0;
        bottom: 0;
        opacity: .5;
    }
    @media only screen and (min-width: 992px) {
        position: absolute;
        bottom: 0;
        right: 0;
        min-height: 100%;
        max-height: 100%;
        opacity: .75;
    }
`

export default () => {

    useEffect(() => {

        const photoDiv = document.getElementById('personal-photo-div');

        if ($(window).width() > 991) {
            if (sessionStorage.getItem('init-anim')!==null && sessionStorage.getItem('init-anim')!==undefined){
                photoDiv.style.opacity = '1';
            } else {
    
                setTimeout(() => {
                    photoDiv.classList.add('float');
                }, 27200);
    
                setTimeout(() => {
                    photoDiv.style.opacity = '1';
                }, 27950);
            }
        } else {
            photoDiv.style.opacity = '1';
        }
    })

    return(
            <PersonalPhotoDiv className="personal-photo-div" id="personal-photo-div">
                <PersonalPhotoImg src={PersonalPhoto} className="personal-photo"/>
            </PersonalPhotoDiv>
    )
}