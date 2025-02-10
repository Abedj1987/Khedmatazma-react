import React from 'react';

const ContactSection = () => {
  return (
    <div className="contact col-12 col-md-6 col-lg-4">
      <figure className="logo">
        <a href="/">
          <img 
            className="img-fluid" 
            src="https://khedmatazma.com/assets/site/default/img/logo-top-menu.png" 
            alt="خدمت از ما"
          />
        </a>
      </figure>

      <ul className="contact-ways">
        <li className="instagram">
          <a id="instagram" rel="nofollow" href="https://instagram.com/khedmatazma/" target="_blank">
            <img 
              className="img-fluid" 
              src="https://khedmatazma.com/app/webroot/img/instagram-footer.png" 
              width="230" 
              height="57"
              alt="Instagram"
            />
          </a>
        </li>
      </ul>

      <div className="social-networks">
        <ul className="items">
          <li className="item">
            <a id="linkedin" href="https://www.linkedin.com/company/khedmatazma/" target="_blank" title="لینکدین">
              <i className="fi fi-linkedin"></i>
            </a>
          </li>
          <li className="item">
            <a id="instagram" href="https://instagram.com/khedmatazma/" target="_blank" title="اینستاگرام">
              <i className="fi fi-instagram"></i>
            </a>
          </li>
          <li className="item">
            <a id="twitter" href="https://twitter.com/khedmatazma" target="_blank" title="توییتر">
              <i className="fi fi-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;