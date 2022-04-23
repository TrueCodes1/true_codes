import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

import './styles/all.css';
import './styles/animations.css';
import './styles/fonts.css';
import projects from './jsons/projects';

const primaryColor = '#131b23';
const secondaryColor = '#e9f1f7';

const MainDiv = styled.div`
  @media only screen and (max-width: 576px) {
      position: absolute;
      min-width: 90vw; 
      max-width: 90vw;
      min-height: 70vh;
      max-height: 70vh;
      top: 10vh;
      left: 5vw;
      display: none;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start
  }
  @media only screen and (min-width: 576px) and (max-width: 991px) {
      position: absolute;
      min-width: 90vw; 
      max-width: 90vw;
      min-height: 70vh;
      max-height: 70vh;
      top: 15vh;
      left: 5vw;
      display: none;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
  }
  @media only screen and (min-width: 992px) {
      position: absolute;
      min-width: 80vw;
      max-width: 80vw;
      min-height: 70vh;
      max-height: 70vh;
      left: 5vw;
      top: 15vh;
      display: flex;
      opacity: 0;
      visibility: hidden;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;
  }
`

const ComeIn = keyframes`
  0% {
    min-width: 300px;
    max-width: 300px;
    min-height: 0;
    max-height: 0;
  }
  100% {
    min-width: 300px;
    max-width: 300px;
    min-height: 70vh;
    max-height: 70vh;
  }
`

const SquezeAndLeave = keyframes`
  0% {
    min-width: 300px;
    min-height: 70vh;
    max-height: 70vh;
    opacity: 1
  }
  33%{  
    min-width: 1px;
    max-width: 1px;
    overflow: hidden;
    min-height: 70vh;
    max-height: 70vh;
    opacity: 1
  }
  66% {  
    min-height: 1px;
    max-height: 1px;
    min-width: 1px;
    max-width: 1px;
    overflow: hidden;
    opacity: 1
  }
  100% {
    min-height: 1px;
    max-height: 1px;
    min-width: 1px;
    max-width: 1px;
    overflow: hidden;
    opacity: 0
  }
`

const WorkChoice = styled.div`
  @media only screen and (max-width: 576px) {
      overflow: hidden;
      overflow-y: auto;
      min-width: 90vw;
      max-width: 90vw;
      min-height: 70vh;
      max-height: 70vh;
  }
  @media only screen and (min-width: 576px) and (max-width: 991px) {
      overflow: hidden;
      overflow-y: auto;
      min-width: 90vw;
      max-width: 90vw;
      min-height: 70vh;
      max-height: 70vh;
  }
  @media only screen and (min-width: 992px) {
    min-height: 70vh;
    max-height: 70vh;
    min-width: 300px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    jusitfy-content: flex-start;
    border: none;
    border-left: 2px solid ${secondaryColor};
    border-right: 2px solid ${secondaryColor};

    &.come{
      animation: 1 1s ${ComeIn};
    }

    &.leave{
      animation: 1.25s 1 ${SquezeAndLeave}
    }
    
    &.dark{
      border-left: 2px solid ${secondaryColor};
      border-right: 2px solid ${secondaryColor};
      transition: all .25s ease
    } 

    &.light{
      border-left: 2px solid ${primaryColor};
      border-right: 2px solid ${primaryColor};
      transition: all .25s ease
    }
}

`

const ComeInChoice = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0
  }
  100% {
    transform: translateY(0);
    opacity: .75
  }
`

const Disappear = keyframes`
  0% {
    opacity: .75
  }
  25%, 100% {
    opacity: 0
  }
`

const Choice = styled.div`
  min-width: 100%;
  max-width: 100%;
  color: ${secondaryColor};
  font-family: 'SVN-Gilroy';
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  transition: all .25s ease;

  &:hover{
    transition: all .25s ease;
    opacity: 1;
    padding-left: 20px
  }

  &.come{
    animation: 1 1s ${ComeInChoice};
  }

  &.leave{
    animation: 1.2s 1 ${Disappear}
  }

  &.dark{
    color: ${secondaryColor};
    transition: all .25s ease
  } 

  &.light{
    color: ${primaryColor};
    transition: all .25s ease
  }
  @media only screen and (max-width: 576px) {
      opacity: 1;
  }
  @media only screen and (min-width: 576px) and (max-width: 991px) {
      opacity: 1;
      font-size: 5vw;
  }
  @media only screen and (min-width: 992px) {

  }
`

const MainPreviewDiv = styled.div`
  @media only screen and (max-width: 576px) {
      display: none;
  }
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    min-width: 60%;
    max-width: 60%;
    min-height: 70vh;
    max-height: 70vh;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    font-family: SVN-Gilroy;
    color: ${secondaryColor};

    
    &.dark{
      color: ${secondaryColor};
      transition: all .25s ease
    } 

    &.light{
      color: ${primaryColor};
      transition: all .25s ease
    }
  }
`

const MainPreviewDivMobileComeIn = keyframes`
  0% {
    transform: translateY(70vh);
    opacity: 0; 
    visibility: hidden;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`

const MainPreviewDivMobileLeave = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  20% {
    transform: translateY(-10px);
    opacity: 1; 
  }
  100% {
    transform: translateY(70vh);
    opacity: 0;
    visibility: hidden;
  }
`

const MainPreviewDivMobile = styled.div`
  @media only screen and (max-width: 576px) {
      position: fixed;
      min-width: 100vw;
      max-width: 100vw;
      min-height: 70vh;
      max-height: 70vh;
      bottom: 0;
      left: 0;
      background: ${primaryColor};
      border-radius: 10vw 10vw 0 0;
      box-shadow: 20px 20px 40px rgba(11, 16, 20, 0.351),
                  -20px -20px 40px rgba(11, 16, 20, 0.351),
                  inset -10px 10px 20px rgba(37, 53, 68, 0.121),
                  inset 10px 10px 20px rgba(37, 53, 68, 0.121);
      font-family: SVN-Gilroy;
      color: ${secondaryColor};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justif-content: flex-start;
      padding: 30px;
      padding-top: calc(30px - 1vh);
      overflow: hidden;
      overflow-y: auto;
      visibility: hidden;
      opacity: 0;
      transform: translateY(70vh);
      padding-bottom: 60px;
      &.enter {
        animation: 1 .5s ${MainPreviewDivMobileComeIn};
        -webkit-animation: 1 .5s ${MainPreviewDivMobileComeIn};
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      &.leave {
        animation: 1 .5s ${MainPreviewDivMobileLeave};
        -webkit-animation: 1 .5s ${MainPreviewDivMobileLeave};
        transform: translateY(70vh);
        opacity: 0; 
        visibility: hidden;
      }
  }
  @media only screen and (min-width: 576px) and (max-width: 991px) {
      position: fixed;
      min-width: 100vw;
      max-width: 100vw;
      min-height: 70vh;
      max-height: 70vh;
      bottom: 0;
      left: 0;
      background: ${primaryColor};
      border-radius: 10vw 10vw 0 0;
      box-shadow: 20px 20px 40px rgba(11, 16, 20, 0.351),
                  -20px -20px 40px rgba(11, 16, 20, 0.351),
                  inset -10px 10px 20px rgba(37, 53, 68, 0.121),
                  inset 10px 10px 20px rgba(37, 53, 68, 0.121);
      font-family: SVN-Gilroy;
      color: ${secondaryColor};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justif-content: flex-start;
      padding: 60px;
      padding-top: calc(60px - 1vh);
      overflow: hidden;
      overflow-y: auto;
      visibility: hidden;
      opacity: 0;
      transform: translateY(70vh);
      padding-bottom: 60px;
      &.enter {
        animation: 1 .5s ${MainPreviewDivMobileComeIn};
        -webkit-animation: 1 .5s ${MainPreviewDivMobileComeIn};
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      &.leave {
        animation: 1 .5s ${MainPreviewDivMobileLeave};
        -webkit-animation: 1 .5s ${MainPreviewDivMobileLeave};
        transform: translateY(70vh);
        opacity: 0; 
        visibility: hidden;
      }
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`

const ProjectTypeMobile = styled.div`
  font-size: 2.25vh;
  opacity: .5;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  margin: 1vh 0;
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    font-size: 3vh;
  }
`

const ProjectFullstackMobile = styled.div`
  font-size: 2.25vh;
  opacity: .5;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  margin: 1vh 0;
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    font-size: 3vh;
  }
`

const ProjectNameMobile = styled.div`
  line-height: 1.15em;
  font-size: 7vh;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  margin: 1.5vh 0;
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    font-size: 9vh;
  }
` 

const ProjectLinkMobile = styled.a`
  color: ${secondaryColor};
  font-size: 2.25vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  margin: 1vh 0;
  text-decoration: underline;
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    font-size: 3vh;
  }
`

const ProjectTextMobile = styled.div`
  font-size: 2.5vh;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  margin: 1.5vh 0;
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    font-size: 3vh;
  }
`

const ProjectCloseButton = styled.div`
  position: fixed;
  font-family: SVN-Gilroy;
  width: fit-content;
  height: fit-content;
  text-align: center;
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 2vh;
  background: ${secondaryColor};
  color: ${primaryColor};
  font-weight: 600;
  border-radius: 10px;
  @media only screen and (min-width: 576px) and (max-width: 991px) {
    font-size: 3vh;
  }
`

const ScrollableSmall = styled.div`
  opacity: .5;
  padding: 0;
  min-height: 30px;
  max-height: 30px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  alig-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-bottom: 30px;
  overflow: hidden;
  scrollbar-width: none;
`

const ScrollableSmallContent = styled.div`
  font-size: 1.2rem;
  min-height: 30px;
  max-height: 30px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`

const ScrollableHeader = styled.div`
  opacity: 1;
  padding: 0;
  min-height: 80px;
  max-height: 80px;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-bottom: 30px;
  overflow: hidden;
  scrollbar-width: none;
  transform: translateX(-10px);
`

const ScrollableHeaderContent = styled.div`
  font-size: 4rem;
  min-height: 80px;
  max-height: 80px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const ScrollableLink = styled.div`
  opacity: .75;
  padding: 0;
  min-height: 30px;
  max-height: 30px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-bottom: 30px;
  overflow: hidden;
  scrollbar-width: none;
`

const ScrollableLinkContent = styled.div`
  font-size: 1.2rem;
  min-height: 30px;
  max-height: 30px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`

const LinkStyled = styled.a`
  text-decoration: none;

  &.dark{
    color: ${secondaryColor};
    transition: all .25s ease
  } 

  &.light{
    color: ${primaryColor};
    transition: all .25s ease
  }
`

const ScrollableDescription = styled.div`
  opacity: .75;
  padding: 0;
  min-height: 140px;
  max-height: 140px;
  min-width: 550px;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  scrollbar-width: none;
`

const ScrollableDescriptionContent = styled.div`
  font-size: 1.2rem;
  min-height: 140px;
  max-height: 140px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`
export default (props) => {

  useEffect(() => {
    
    const choiceSigred = document.getElementById('choice-sigred');
    const choiceTFStyle = document.getElementById('choice-tfstyle');
    const choiceRecepty = document.getElementById('choice-recepty');
    const choiceVerben = document.getElementById('choice-verben');

    const scrollableType = document.getElementById('scrollable-1');
    const scrollableStack = document.getElementById('scrollable-2');
    const scrollableHeader = document.getElementById('scrollable-3');
    const scrollableLink = document.getElementById('scrollable-4');
    const scrollableDescription = document.getElementById('scrollable-5');

    const scrollNeutral = () => {

      scrollableType.scroll({
        top: 0,
        behavior: 'smooth'
      })

      scrollableStack.scroll({
        top: 0,
        behavior: 'smooth'
      })

      scrollableHeader.scroll({
        top: 0,
        behavior: 'smooth'
      })

      scrollableLink.scroll({
        top: 0,
        behavior: 'smooth'
      })

      scrollableDescription.scroll({
        top: 0,
        behavior: 'smooth'
      })

    }

    const scrollToSigred = () => {

      scrollableType.scroll({
        top: 30,
        behavior: 'smooth'
      })

      scrollableStack.scroll({
        top: 30,
        behavior: 'smooth'
      })

      scrollableHeader.scroll({
        top: 80,
        behavior: 'smooth'
      })

      scrollableLink.scroll({
        top: 30,
        behavior: 'smooth'
      })

      scrollableDescription.scroll({
        top: 140,
        behavior: 'smooth'
      })

    }

    const scrollToTFStyle = () => {

      scrollableType.scroll({
        top: 30,
        behavior: 'smooth'
      })

      scrollableStack.scroll({
        top: 30,
        behavior: 'smooth'
      })

      scrollableHeader.scroll({
        top: 160,
        behavior: 'smooth'
      })

      scrollableLink.scroll({
        top: 60,
        behavior: 'smooth'
      })

      scrollableDescription.scroll({
        top: 280,
        behavior: 'smooth'
      })

    }
    
    const scrollToRecepty = () => {

      scrollableType.scroll({
        top: 60,
        behavior: 'smooth'
      })

      scrollableStack.scroll({
        top: 30,
        behavior: 'smooth'
      })

      scrollableHeader.scroll({
        top: 240,
        behavior: 'smooth'
      })

      scrollableLink.scroll({
        top: 90,
        behavior: 'smooth'
      })

      scrollableDescription.scroll({
        top: 420,
        behavior: 'smooth'
      })

    }

    const scrollToVerben = () => {

      scrollableType.scroll({
        top: 60,
        behavior: 'smooth'
      })

      scrollableStack.scroll({
        top: 30,
        behavior: 'smooth'
      })

      scrollableHeader.scroll({
        top: 320,
        behavior: 'smooth'
      })

      scrollableLink.scroll({
        top: 120,
        behavior: 'smooth'
      })

      scrollableDescription.scroll({
        top: 540,
        behavior: 'smooth'
      })

    }

    choiceSigred.addEventListener('mouseenter', scrollToSigred);
    choiceTFStyle.addEventListener('mouseenter', scrollToTFStyle);
    choiceRecepty.addEventListener('mouseenter', scrollToRecepty);
    choiceVerben.addEventListener('mouseenter', scrollToVerben);

    document.getElementById('main-div-work').addEventListener('mouseleave', scrollNeutral);

    $('#close-project-mobile').on('click', () => {
      $('#main-preview-mobile').removeClass('enter');
      $('#main-preview-mobile').addClass('leave');
      $('#close-project-mobile').css('display', 'none');
    })

    for (let choice of [choiceSigred, choiceTFStyle, choiceRecepty, choiceVerben]) {
      $(choice).on('click', () => {
        let chosen = $(choice).attr('id').split('-')[1];
        let project = projects.projects[chosen.toString()];
        $('#project-type-mobile').html(project.type);
        $('#project-stack-mobile').html(project.stack);
        $('#project-name-mobile').html(project.name);
        if (project.link.toString().replaceAll(' ', '').length > 0) {
          $('#project-link-mobile').html(project.name);
          $('#project-link-mobile').css('text-decoration', 'underline');
          $('#project-link-mobile').css('opacity', '1');
        } else {
          $('#project-link-mobile').html('link to web coming soon');
          $('#project-link-mobile').css('text-decoration', 'none');
          $('#project-link-mobile').css('opacity', '.5');
        }
        $('#project-link-mobile').attr('href', project.link);
        $('#project-text-mobile').html(project.text);
        $('#main-preview-mobile').removeClass('leave');
        $('#main-preview-mobile').addClass('enter');
        setTimeout(() => {
          $('#close-project-mobile').css('display', 'flex');
        }, 400)
      })
    }

  })

  return (
    <MainDiv id='main-div-work'>

      <WorkChoice id='work-choices' className={props.theme}>

        <Choice id='choice-sigred' className={'choice-work ' + props.theme}>
          Sigred
        </Choice>
        
        <Choice id='choice-tfstyle' className={'choice-work ' + props.theme}>
          TF Style
        </Choice>
        
        <Choice id='choice-recepty' className={'choice-work ' + props.theme}>
          Moje Recepty
        </Choice>
        
        <Choice id='choice-verben' className={'choice-work ' + props.theme}>
          Meine Verben
        </Choice>

      </WorkChoice>

      <MainPreviewDiv className={props.theme}>

        <ScrollableSmall id='scrollable-1'>

          <ScrollableSmallContent>

          </ScrollableSmallContent>

          <ScrollableSmallContent>
            client work
          </ScrollableSmallContent>
          
          <ScrollableSmallContent>
            personal work
          </ScrollableSmallContent>

        </ScrollableSmall>
        
        <ScrollableSmall id='scrollable-2'>

          <ScrollableSmallContent>
            
          </ScrollableSmallContent>

          <ScrollableSmallContent>
            full-stack
          </ScrollableSmallContent>
          
          <ScrollableSmallContent>
            front-end
          </ScrollableSmallContent>

          <ScrollableSmallContent>
            back-end
          </ScrollableSmallContent>

        </ScrollableSmall>

        <ScrollableHeader id='scrollable-3'>

          <ScrollableHeaderContent>
            
          </ScrollableHeaderContent>
          
          <ScrollableHeaderContent>
            Sigred
          </ScrollableHeaderContent>
          
          <ScrollableHeaderContent>
            TF Style
          </ScrollableHeaderContent>

          <ScrollableHeaderContent>
            Moje Recepty
          </ScrollableHeaderContent>
          
          <ScrollableHeaderContent>
            Meine Verben
          </ScrollableHeaderContent>

        </ScrollableHeader>

        <ScrollableLink id='scrollable-4'>

          <ScrollableLinkContent>

          </ScrollableLinkContent>
          
          <ScrollableLinkContent>
            <LinkStyled href='https://www.sigred.org' target='_blank' norefferer='true' noopener='true'>www.sigred.org</LinkStyled>
          </ScrollableLinkContent>
          
          <ScrollableLinkContent>
            www.tfstylefc.com
          </ScrollableLinkContent>

          <ScrollableLinkContent>
            www.mojerecepty.sk
          </ScrollableLinkContent>
          
          <ScrollableLinkContent>
            www.meineverben.com
          </ScrollableLinkContent>

        </ScrollableLink>

        <ScrollableDescription id='scrollable-5'>

          <ScrollableDescriptionContent>
          </ScrollableDescriptionContent>
          
          <ScrollableDescriptionContent>
            Innovative e-commerce platform to sell anything online within 
            the community of mainly young people. The website runs on 
            Node.js (Express) with ejs SSR and modern decent-looking 
            HTML+CSS+JS front-end. We are  switching to React.js in close time!
          </ScrollableDescriptionContent>
          
          <ScrollableDescriptionContent>
            Innovative e-commerce platform to sell anything online within 
            the community of mainly young people. The website runs on 
            Node.js (Express) with ejs SSR and modern decent-looking 
            HTML+CSS+JS front-end. We are  switching to React.js in close time!
          </ScrollableDescriptionContent>
          
          <ScrollableDescriptionContent>
            Modern platform running on React.js, Node.js and MongoDB serving as a storage 
            of your own recipies of all kinds. Register yourself, build 
            up your collection, add friends and share it 
            among them just as you would on a social network.
          </ScrollableDescriptionContent>
          
          <ScrollableDescriptionContent>
            Simple and easy - to - use platform with the focus on irregular 
            verbs serving for lerners of German. Do not hesitate to add your 
            needed verbs and take a test.  Node.js on the back-end 
            complements HTML + CSS + JS on the front-end. Regarding 
            database, Meine Verben runs on Firebase. 
          </ScrollableDescriptionContent>

        </ScrollableDescription>

      </MainPreviewDiv>

      <MainPreviewDivMobile id='main-preview-mobile'>

        <ProjectTypeMobile id='project-type-mobile'>
        </ProjectTypeMobile>

        <ProjectFullstackMobile id='project-stack-mobile'>
        </ProjectFullstackMobile>

        <ProjectNameMobile id='project-name-mobile'>
        </ProjectNameMobile>

        <ProjectLinkMobile href='' target='_blank' id='project-link-mobile'>
        </ProjectLinkMobile>

        <ProjectTextMobile id='project-text-mobile'>
        </ProjectTextMobile>

      </MainPreviewDivMobile>
      
      <ProjectCloseButton id='close-project-mobile'>
          close
      </ProjectCloseButton>

    </MainDiv>
  );
}
