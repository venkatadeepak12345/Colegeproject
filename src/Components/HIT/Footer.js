import React from 'react'
import logoimg from "./assests/chennai-cit-logo.svg";



const Footer = () => {
    
  return (
    <div className='container-fluid bg-dark p-40 text-white'>
      <div className='row'>
        <div className='col-12 col-lg-3'>
          <img src={logoimg} alt=""/>
          <p>Sarathy Nagar, Kundrathur,
Chennai-600069, TamilNadu, India.
Email : info@citchennai.net</p>

        
          
        </div>
        <div className='col-12 col-lg-3'>
          <strong>Quick Links</strong>
          <ul>
            <li>Quick Links</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Academics</li>
            <li>Controller of Examinations</li>
            <li>Infrastructure</li>
            <li>Research</li>
            <li>Student Support</li>
            <li>Downloads</li>
            <li>AQAR</li>
            <li>POSH Committee</li>
          </ul>
        </div>
        <div className='col-12 col-lg-3'>
          <strong>IMPORTANT LINKS</strong>
          <ul>
            <li>Anti Ragging Committee</li>
            <li>Anti Drugs Committee Members</li>
            <li>SDG Goals</li>
            <li>Ragging Free Campus</li>
            <li>CSR</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
            <li>Contact Us</li>
            </ul>
        </div>
        <div className='col-12 col-lg-3'>
          <strong>Other Links</strong>
          <ul>
            <li>AICTE-Ombudsman
</li>
<li>Ombudsman Grievances</li>
<li>ACM-ICPC Results</li>
<li>ARIIA</li>
<li>CITIL</li>
<li>Digital Series</li>
<li>Screen reader</li>
<li>IQAC</li>
<li>NISP</li>
          </ul>
          <p>&copy;

Copyright Chennai Institute of Technology 2025. All rights reserved</p>
        </div>
      </div>
        
    </div>
  )
}

export default Footer