import React, { useRef } from 'react';
import { ContactContainer, ContactWrapper, ContactH1, ContactForm, EmailInput, TextInput, Colored, ContactButton, UserInput } from './MessageElements'
import emailjs from '@emailjs/browser'


const Message = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_m2p7j4b', 'template_g5k6t2b', form.current, 'XqAnkaoncG0NMTkmf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      window.location.reload();
  };

  return (
    <>
      <ContactContainer id="message">
        <ContactWrapper>
              <ContactH1> Message <Colored>Us</Colored> </ContactH1>
                  <ContactForm ref={form} onSubmit={sendEmail}>

                      <label for="user_name">Name</label>
                      <UserInput type="text" name="user_name" placeholder='Your Name' required/>

                      <label for="email">Email</label>
                      <EmailInput type="email" name="user_email" placeholder='Your Email' required/>

                      <label for="message">Message</label>
                      <TextInput name="message" placeholder='Please leave any congrats messages or questions about our wedding' required/>
                      
                      <ContactButton type="submit" value="Send"></ContactButton>
                  </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default Message