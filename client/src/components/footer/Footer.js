import React from 'react';
import './footer.css'

const Footer = () => {
  return (
  <footer>
    <div className='footer_container'>
        <div className='footer_details_one forres'>
            <h3>Get to Know Us!</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Quantum Careers</p>
        </div>
        <div className='footer_details_one forres'>
            <h3>Connect With Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>

        <div className='footer_details_one '>
            <h3>Make Money With Us!</h3>
            <p>Facilities</p>
            <p>Careers</p>
            <p>Quantum Careers</p>
        </div>
        <div className='footer_details_one'>
            <h3>Connect With Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
    </div>
    <div className='lastdetails'>
        <img src='quantum.png' />
        <p>Condtion of sales &nbsp;         Privacy Noitce &nbsp;            Interest-Based-Ads &nbsp;          @2022-2023, QUantum Online store &nbsp;  </p>
    </div>
  </footer>
  )
}

export default Footer
