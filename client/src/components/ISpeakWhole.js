import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import './styles/all.css';
import './styles/animations.css';
import './styles/fonts.css';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const ISpeakWhole = styled.div`
    min-width: 275px;
    max-width: 275px;
    min-height: 1.75rem;
    max-height: 1.75rem;
    font-family: SVN-Gilroy;
    font-size: 1.75rem;
    color: ${secondaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
`

const RollingDiv = styled.div`
    min-width: 175px;
    max-width: 175px;
    min-height: 70px;
    max-height: 70px;
    color: ${secondaryColor};
    font-size: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden
`

const SignleDivRolling = styled.div`
    min-width: 175px;
    max-width: 175px;
    min-height: 70px;
    max-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center
`

export default () => {

    let LanguageToShow = 0;

    let ShouldRollAutomatically = true;
    
    const FindScrollDirection = (event) => {
        if (event.wheelDelta) {
            return event.wheelDelta > 0
        }
        return event.deltaY < 0;
    }
    
    const AutomaticRoll = () => {
    
        if (ShouldRollAutomatically === true){
        
            LanguageToShow === 6 ? LanguageToShow = 0 : LanguageToShow+=1;
        
            document.getElementById('scrollable').scrollTo({
                top: LanguageToShow * 70,
                behavior: 'smooth'
            })
        }
    
    }
    
    var RollInterval = setInterval(
        AutomaticRoll,
        3000
    )
    
    const Roll = (event) => {
    
        ShouldRollAutomatically = false;
    
        if (FindScrollDirection(event)) {
            /* SCROLLING UP */
            LanguageToShow === 0 ? LanguageToShow = 6 : LanguageToShow-=1
        } else {
            /* SCROLLING DOWN */
            LanguageToShow === 6 ? LanguageToShow = 0 : LanguageToShow+=1
        }
    
        document.getElementById('scrollable').scrollTo({
            top: LanguageToShow * 70,
            behavior: 'smooth'
        })
    
        setTimeout(
            () => {
                ShouldRollAutomatically = true
            },
            3000
        )
    
    }

    const ISpeak = () => {

        return (
            <>
                
                <ISpeakWhole>
                    <span> I speak </span>
                    <RollingDiv onWheel={Roll} id='scrollable'>
                        <SignleDivRolling id='1'>
                            HTML
                        </SignleDivRolling>
                        <SignleDivRolling id='2'>
                            CSS
                        </SignleDivRolling>
                        <SignleDivRolling id='3'>
                            JavaScript
                        </SignleDivRolling>
                        <SignleDivRolling id='4'>
                            Node.js
                        </SignleDivRolling>
                        <SignleDivRolling id='5'>
                            Express.js
                        </SignleDivRolling>
                        <SignleDivRolling id='6'>
                            React.js
                        </SignleDivRolling>
                        <SignleDivRolling id='7'>
                            Figma
                        </SignleDivRolling>
                    </RollingDiv>
                </ISpeakWhole>
            
            </>
        )
    }

  return (
      <>

        <ISpeak />

      </>
  );
}
