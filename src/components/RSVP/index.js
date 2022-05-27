import React, {useRef} from 'react'
import { Attending, AttendingHolder, AttendingLabel, RSVPContainer, RSVPForm, RSVPInputs, RSVPLabels, RSVPTitle, RSVPWrapper, SubmitButton, TitleHolder } from './RSVPElements'
import emailjs from '@emailjs/browser'

const RSVP = () => {

  
  const form = useRef();

  const sendForm = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_m2p7j4b', 'template_b2dtjgp', form.current, 'XqAnkaoncG0NMTkmf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      window.location.reload();
  };

  return (
    <>
        <RSVPContainer id = "rsvp">
          {/* Please fill out the information below to register for the event */}
          <RSVPWrapper>
            <TitleHolder>
              <RSVPTitle>
                RSVP
              </RSVPTitle>
            </TitleHolder>

            <RSVPForm ref={form} onSubmit={sendForm}>

              <AttendingHolder>
                <AttendingLabel for="Going">Going
                  <Attending type="radio" id="Going" name="Attending" value="Going" />
                </AttendingLabel>
                
                <AttendingLabel for="NotGoing">Not Going
                  <Attending type="radio" id="NotGoing" name="Attending" value="NotGoing" />
                </AttendingLabel>
              </AttendingHolder>
        
              <RSVPLabels for='FirstName'>First Name</RSVPLabels>
              <RSVPInputs type="text" name="FirstName" placeholder='First Name, 이름' required />

              <RSVPLabels for='FamilyName'>Family Name</RSVPLabels>
              <RSVPInputs type='text' name='FamilyName' placeholder='Family Name, 성' required />

              <RSVPLabels for="RSVPemail">Email</RSVPLabels>
              <RSVPInputs type="email" name="RSVPemail" placeholder='123@mail.com' required/>
            
              <RSVPLabels for='MobileNumber'>Mobile Number</RSVPLabels>
              <RSVPInputs type='text' name='MobileNumber' placeholder = '+1 123-456-7890'/>

              <RSVPLabels for='GuestNumber'>How many guests are you bringing?</RSVPLabels>
              <RSVPInputs type='number' name='GuestNumber' placeholder = 'If it is only you, put 1'/>

              <RSVPLabels for='Address'>Address</RSVPLabels>
              <RSVPInputs type='text' name='Address' placeholder = '123 Main Street, City, State, Zip Code' />
            
              <SubmitButton type='submit' value='Send'>Submit</SubmitButton>
            </RSVPForm>
          </RSVPWrapper>
        </RSVPContainer>
    </>
  )
}

export default RSVP