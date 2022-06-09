//IMPORTING MODULES
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

// IMPORTING ALL NECCESSARY FUNCTIONS
import sendMail from './scripts/functions/sendMail';

//IMPORTING STYLED COMPONENTS
import Button from './styledComponents/hitMeUp/Button';
import Textarea from './styledComponents/hitMeUp/Textarea';
import Input from './styledComponents/hitMeUp/Input';
import Form from './styledComponents/hitMeUp/Form';

//IMPORTING OTHER NECCESSARY FILES
import './styles/all.css';
import './styles/animations.css';
import './styles/fonts.css';
import colors from './jsons/colors';

const primaryColor = colors.primaryColor;
const secondaryColor = colors.secondaryColor;
const terciaryColor = colors.tertiaryColor;


export default () => {

  useEffect(() => {
    
    const grabFormData = () => {
      
      let name = $('#name-input').val();
      let email = $('#email-input').val();
      let message = $('#contact-textarea').val();

      let formData = [name, email, message]

      sendMail(formData)

    }

    $('#contact-button').on('click', grabFormData)

  })

  return (

      <div>

          <Form id='contact-form'>

            <Input placeholder='Name' className='contact-input' id='name-input'></Input>
            <Input placeholder='Email' className='contact-input' id='email-input'></Input>
            <Textarea placeholder='Message' spellCheck='false' id='contact-textarea'></Textarea>
            <Button id='contact-button'>
              send
            </Button>

          </Form>

      </div>

  );
}