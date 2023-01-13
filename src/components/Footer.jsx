import './Footer.css'
import { Button } from './Button';
import React, { useState } from 'react';


function Footer() {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0 -9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
    const [email, setEmail] = useState('');
    
    const [error, setError] = useState('');
    
    const [Msg, setMsg] = useState('');
  
    const checkEmail = (e) => {
      setEmail(e.target.value);
      if (regex.test(email) === false) {
        setError('Please enter valid email address');
      } else {
        setError('');
        return true;
      }
    }
  
  
    const submit = () => {
      if(email = '') {
        setMsg('Thank you for subscribing' + email);
      } else {
        setError('Email cant be blank')
      }
    }
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4 className='tittles'>Gro-kart INC</h4>
              <h3 className="list-unstyled">
                <li>0118439030</li>
                <li>Nairobi, Kenya</li>
                <li>69th street,Westlands</li>
              </h3>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4 className='tittles'>Products</h4>
           <h4>
           <ui className="list-unstyled">
                <li>Dairy products</li>
                <li>meat</li>
                <li>vegetables</li>
                <li>Drinks</li>
                <li>Pantry</li>
              </ui>
           </h4>
            </div>
            {/* Column3 */}
            {/* <div className="col">
              <p className='tittles'>Contact Us</p>
              <ui className="list-unstyled">
       
        
              </ui>
            </div> */}
          </div>
          <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to receive our best <br></br> deals and get alerted on discounts
        </p>
        

        <div className='input-areas'>
          <form>
            <p className='errormessage'>{ error}</p>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              onChange={checkEmail}
              onClick ={submit}
       
            />
            <p className='text-succes'>{ Msg}</p>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
          <hr />
          <div className="row">
            <div className='tittles'>
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Gro-Kart inc | All rights reserved |
              Terms Of Service | Privacy
            </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Footer;
  