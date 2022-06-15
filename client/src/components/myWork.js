//IMPORTING MODULES
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components'; 
import $ from 'jquery';

// IMPORTING STYLED COMPONENTS
import MainDiv from './styledComponents/myWork/MainDiv';
import WorkChoice from './styledComponents/myWork/WorkChoice';
import Choice from './styledComponents/myWork/Choice';
import MainPreviewDiv from './styledComponents/myWork/MainPreviewDiv';
import MainPreviewDivMobile from './styledComponents/myWork/MainPreviewDivMobile';
import ProjectTypeMobile from './styledComponents/myWork/ProjectTypeMobile';
import ProjectFullstackMobile from './styledComponents/myWork/ProjectFullstackMobile';
import ProjectNameMobile from './styledComponents/myWork/ProjectNameMobile';
import ProjectLinkMobile from './styledComponents/myWork/ProjectLinkMobile';
import ProjectTextMobile from './styledComponents/myWork/ProjectTextMobile';
import ProjectCloseButton from './styledComponents/myWork/ProjectCloseButton';
import ScrollableSmall from './styledComponents/myWork/ScrollableSmall';
import ScrollableSmallContent from './styledComponents/myWork/ScrollableSmallContent';
import ScrollableHeader from './styledComponents/myWork/ScrollableHeader';
import ScrollableHeaderContent from './styledComponents/myWork/ScrollableHeaderContent';
import ScrollableLink from './styledComponents/myWork/ScrollableLink';
import ScrollableLinkContent from './styledComponents/myWork/ScrollableLinkContent';
import LinkStyled from './styledComponents/myWork/LinkStyled';
import ScrollableDescription from './styledComponents/myWork/ScrollableDescription';
import ScrollableDescriptionContent from './styledComponents/myWork/ScrollableDescriptionContent';

//IMPORTING OTHER NECCESSARY FILES
import './styles/all.css';
import './styles/animations.css';
import './styles/fonts.css';
import projects from './jsons/projects';
import colors from './jsons/colors';

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;

export default (props) => {

  useEffect(() => {

    setTimeout( () => {
        window.scrollTo(0, 1);
    }, 0);
    
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

    const closeProject = () => {
      $('#main-preview-mobile').removeClass('enter');
      $('#main-preview-mobile').addClass('leave');
      $('#close-project-mobile').css('display', 'none');
    }

    $('#close-project-mobile').on('click', closeProject);

    for (let choice of [choiceSigred, choiceTFStyle, choiceRecepty, choiceVerben]) {
      $(choice).on('click', () => {
        let chosen = $(choice).attr('id').split('-')[1];
        let project = projects.projects[chosen.toString()];
        $('#project-type-mobile').html(project.type);
        $('#project-stack-mobile').html(project.stack);
        $('#project-name-mobile').html(project.name);
        if (project.link.toString().replaceAll(' ', '').length > 0) {
          $('#project-link-mobile').attr('href', project.link);
          $('#project-link-mobile').html(project.name);
          $('#project-link-mobile').css('text-decoration', 'underline');
          $('#project-link-mobile').css('opacity', '1');
        } else {
          $('#project-link-mobile').html('link to web coming soon');
          $('#project-link-mobile').css('text-decoration', 'none');
          $('#project-link-mobile').css('opacity', '.5');
          $('#project-link-mobile').removeAttr('href');
        }
        $('#project-text-mobile').html(project.text);
        $('#main-preview-mobile').removeClass('leave');
        $('#main-preview-mobile').addClass('enter');
        if ($(window).width() < 992){
          setTimeout(() => {
            $('#close-project-mobile').css('display', 'flex');
          }, 400)
        }
      })
    }

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    document.getElementById('main-preview-mobile').addEventListener('touchstart', (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);
    
    document.getElementById('main-preview-mobile').addEventListener('touchend', (event) => {
      event.preventDefault();
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesture();
    }, false); 
    
    const handleGesture = () => {
        if (touchendY > touchstartY) {
          closeProject()
        }
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
            <LinkStyled href='https://www.tfstylefc.com' target='_blank' norefferer='true' noopener='true'>www.tfstylefc.com</LinkStyled>
          </ScrollableLinkContent>

          <ScrollableLinkContent>
            <LinkStyled className='disabled'>www.mojerecepty.sk</LinkStyled>
          </ScrollableLinkContent>
          
          <ScrollableLinkContent>
            <LinkStyled href='http://www.meineverben.com' target='_blank' norefferer='true' noopener='true'>www.meineverben.com</LinkStyled>
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
            (description coming soon!)
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
