import React from 'react'
import './footerStyles.scss';


function Footer() {
    const year = new Date().getFullYear();
    return (
      <div className='footer'>
        {year} © Her Time to Code | Katrina Dierking
      </div>
    );
}

export default Footer
