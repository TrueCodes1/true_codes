import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

import './styles/fonts.css';

import BurgerLink from './images/NavbarBurger.svg'; 
import LeaveCrossLink from './images/burgerClose.svg';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const Gallery = styled.div`
    min-height: 200px;
    height: 80vh;
    max-height: 80vh;
    min-width: 300px;
    max-width: 300px;
    position: fixed;
    right: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const galleryOfDesign = () => {
    
    return(
        <>
        
            <Gallery>

            </Gallery>

        </>
    )

} 

export default galleryOfDesign;