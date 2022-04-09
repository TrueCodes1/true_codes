import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import PersonalPhoto from './PersonalPhoto';

import './styles/all.css'
import './styles/animations.css'
import './styles/fonts.css'

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const mainDivStyle = {
    position: 'absolute',
    minWidth: '75vw',
    maxWidth: '75vw',
    minHeight: '70vh',
    maxHeight: '70vh',
    top: '12.5vh',
    left: '5vw',
    fontFamily: 'SVN-Gilroy',
    color: secondaryColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
}

const firstPStyle = {
    fontSize: '40px',
    marginBottom: '-5px'
}

const nameSpanStyle = {
    fontWeight: 300,
    opacity: 1,
    fontSize: '40px'
}

const smallPStyle = {
    opacity: .25,
    fontSize: '15px'
}

const stuffSpanStyleBut = {
    opacity: .35,
    fontSize: '40px'
}

const stuffSpanStyle = {
    opacity: .35,
    fontSize: '20px'
}

const stuffSpanStyleVisible = {
    opacity: 1,
    fontSize: '20px'
}

const secondPStyle = {
    marginTop: '15px',
    opacity: .35,
    fontSize: '20px'
}

const thirdPStyle = {
    opacity: 1,
    fontSize: '20px'
}

const fourthPStyle = {
    marginTop: '10px',
    opacity: 1,
    fontSize: '20px'
}

const aLinkStyle = {
    textDecoration: 'none',
    color: secondaryColor,
    '&:hover': {
        color: 'red'
    }
}

const LinkToProjects = styled.a`
    text-decoration: none;
    color: #e9f1f7;
`

export default () => {
        
        const [linkState, setLinkState] = useState(0);

    const projectLinkAnimation = () => {

        linkState === 0 ? setLinkState(1) : setLinkState(0);
        
        if (linkState === 0){
            return(
                <LinkToProjects>hehehe</LinkToProjects>
            )
        } else {

        }
    }

    const SigredLink = () => {
        return(
            <>
                <LinkToProjects href='https://www.sigred.org' target='_blank' rel='noopener noreferrer' className={`${linkState===0 ? 'hidden' : 'shown'}`} onMouseEnter={projectLinkAnimation}>
                    <span style={stuffSpanStyleVisible}> Sigred </span>
                </LinkToProjects>
            </>
        )
    }

  return (
      <>
        <PersonalPhoto />
        <div style={mainDivStyle}>
            <p style={firstPStyle}>
                <span style={nameSpanStyle}> Norbert Sviatko </span>
                <span style={stuffSpanStyleBut}> but for you </span>
                <span style={nameSpanStyle}> Noro </span>
            </p>
            <p style={smallPStyle}>
                based in Slovakia, mid-Europe
            </p>
            <p style={secondPStyle}>
                Since late 2020 I've been in coding and 
            </p>
            <p style={thirdPStyle}>
                <span style={stuffSpanStyle}> Web Developement was the place, where </span>
                <span style={stuffSpanStyleVisible}> my creativity met my logic. </span>
            </p>
            <p style={fourthPStyle}>
                <span style={stuffSpanStyle}> Except of self-learning, I stay behind few live websites out there, like </span>
                <SigredLink />
                <span style={stuffSpanStyle}> or </span>
                <span style={stuffSpanStyleVisible}> <a style={aLinkStyle} href='https://www.tfstylefc.com' target='_blank' rel='noopener noreferrer'>TFStyle</a>. </span> 
            </p>
        </div>
      </>
  );
}
