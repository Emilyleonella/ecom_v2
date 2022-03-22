import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
    <div className='social'>
      <a
        className='logo'
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="instagram"
        rel="noopener"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        className='logo'
        href="https://www.snapchat.com/"
        target="_blank"
        aria-label="Snapchat"
        rel="noopener"
        ><i class="fab fa-snapchat"></i
      ></a>
      <a
        className='logo'
        href="https://twitter.com/?lang=en"
        target="_blank"
        aria-label="twitter"
        rel="noopener"
        ><i class="fab fa-twitter"></i
      ></a>
      <a
        className='logo'
        href="https://www.facebook.com/"
        target="_blank"
        aria-label="facebook"
        rel="noopener"
        ><i class="fab fa-facebook"></i
      ></a>
    </div>
    <img
      alt="bee_logo"
      className='bee2'
      src="/images/bee__logo-removebg-preview (1).png"
    />
    <p>&copy; Emily Tamayo: R2H E-commerce Project. All Rights Reserved.</p>
  </footer>
    </div>
  )
}

export default Footer