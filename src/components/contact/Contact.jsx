import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt='' /></h3>
        <p> 
     Feel free to reach out through contact form or find our contact details below. Your feedback is important to us as we strive to improve our services to our university community.
        </p>
        <ul>
          <li> <img src = {mail_icon}  /> contactEdusity@gmail.com</li>
          <li><img src = {phone_icon}  />  +1 123-323-5356</li>
          <li><img src = {location_icon}  />  77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
      
      </div>
    </div>
  )
}

export default Contact