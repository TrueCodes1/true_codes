import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import './styles/fonts.css';
import './styles/animations.css';
import './styles/all.css';
import SocialsHome from "./SocialsHome";

import PersonalPhoto from './images/personal_photo_3.png'

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
    @media only screen and (max-width: 576px) {
        
    }
    @media only screen and (min-width: 768px) {

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
    position: absolute;
    bottom: 0;
    right: 0;
    min-height: 100%;
    max-height: 100%;
    opacity: .75;
`

export default () => {

    useEffect(() => {

        const photoDiv = document.getElementById('personal-photo-div');

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
    })

    return(
            <PersonalPhotoDiv className="personal-photo-div" id="personal-photo-div">
                <PersonalPhotoImg src={PersonalPhoto} className="personal-photo"/>
            </PersonalPhotoDiv>
    )
}