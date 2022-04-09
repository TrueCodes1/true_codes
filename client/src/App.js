import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import SocialsHome from './components/SocialsHome';
import LightDarkToggle from './components/LightDarkToggle';
import PersonalPhoto from './components/PersonalPhoto';
import SkillsSidebar from './components/SkillsSidebar';

import Home from './components/Home';
import WhoIAm from './components/WhoIAm'
import MyWork from './components/myWork';
import MySkills from './components/mySkills';
import HitMeUp from './components/hitMeUp';

import './components/styles/fonts.css';
import './components/styles/all.css';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const Main = styled.div`
    background: ${primaryColor};
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    &.dark{
        background: ${primaryColor};
        transition: all .25s ease
    }
    
    &.light{
        background: ${secondaryColor};
        transition: all .25s ease
    }
`

const Invisible = {
    display: 'none'
}

const App = () => {

    const [theme, setTheme] = useState('dark');

    const changeMode = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    useEffect(() => {
        
        document.getElementById('main-switch').addEventListener('click', changeMode);

    })

    return(
            <Main className={theme}>
                <Nav theme={theme}/>
                <PersonalPhoto />
                <LightDarkToggle theme={theme}/>
                <SocialsHome theme={theme}/>
                <Home theme={theme}/>
                <MyWork theme={theme}/>
                <MySkills theme={theme}/>
                <HitMeUp theme={theme}/>
            </Main>
    )
}

export default App;