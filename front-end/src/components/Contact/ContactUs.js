import React from 'react';
import './ContactUs.css';

import Photographer from './6-photographer.jpg';

const ContactUs = () => {
    return (
        <div className="contact">
             <h1 className="galllery--heading">Koos Kombuis</h1>

             <div className="grid grid--cols-2">
                 <div>
                     <br/>
                    <h2>About Us</h2>
                    <p className="contact__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <br />

                    <h2 className="contact__heading">Contact</h2>
                        <span className="contact__span">example@gmail.com</span>
                 </div>

                 <div className="contact__container">
                     <img className="contact__image" src={Photographer} alt="A photographer taking pictures" />
                 </div>
             </div>
        </div>
    )
}

export default ContactUs
