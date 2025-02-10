import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const companyLinks = [
    { href: '/mag', text: 'مجله خدمت از ما' },
    { href: '/pages/about', text: 'درباره ما' },
    { href: '/pages/careers', text: 'فرصت‌های شغلی' },
    { href: '/pages/contact', text: 'تماس با ما' },
    { href: '/pages/faqs', text: 'سوالات متداول' },
    { href: '/pages/rules', text: 'قوانین و مقررات' }
  ];

  const customerLinks = [
    { href: '/teh/tehran', text: 'خدمات فعال تهران' },
    { href: '/prices', text: 'مشاهده هزینه خدمات' },
    { href: '/pages/downloads', text: 'دانلود اپلیکیشن مشتری' },
    { href: '/pages/provider', text: 'ثبت نام متخصص', id: 'make_money_footer' },
    { href: '/pages/safetynotice', text: 'راهنمای استفاده امن' },
    { href: '/pages/report', text: 'ثبت شکایت', rel: 'nofollow' }
  ];

  return (
    <footer className="site-footer" id="footer-custom">
      <div className="main-footer">
        <div className="container">
          <div className="footer-content">
            {/* Contact Section */}
            <div className="footer-section contact">
              <figure className="logo">
                <a href="/">
                  <img 
                    src="https://khedmatazma.com/assets/site/default/img/logo-top-menu.png" 
                    alt="خدمت از ما"
                  />
                </a>
              </figure>
              <div className="social-networks">
                <a href="https://www.linkedin.com/company/khedmatazma/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/khedmatazma/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com/khedmatazma" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div className="footer-section links">
              <div className="link-group">
                <h3 className="footer-title">خدمت از ما</h3>
                <ul>
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="link-group">
                <h3 className="footer-title">متخصصین و مشتریان</h3>
                <ul>
                  {customerLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} id={link.id} rel={link.rel}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Download Section */}
            <div className="footer-section download">
              <h3 className="footer-title">دریافت اپلیکیشن</h3>
              <div className="download-form">
                <input type="text" placeholder="شماره موبایل" className="phone-input" />
                <button className="download-btn">دریافت لینک</button>
              </div>
              <div className="app-stores">
                <a href="https://tracker.metrix.ir/bdhlsy" target="_blank" rel="noopener noreferrer">
                  <img src="https://khedmatazma.com/assets/site/default/img/baazar.png" alt="Bazaar" />
                </a>
                <a href="https://tracker.metrix.ir/bdhlsy" target="_blank" rel="noopener noreferrer">
                  <img src="https://khedmatazma.com/assets/site/default/img/google-play.png" alt="Google Play" />
                </a>
                <a href="https://tracker.metrix.ir/bdhlsy" target="_blank" rel="noopener noreferrer">
                  <img src="https://khedmatazma.com/assets/site/default/img/myket.png" alt="Myket" />
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <details className="about-section">
            <summary>درباره خدمت از ما</summary>
            <div className="about-content">
              <p>خدمت از ما، بازار آنلاین خدمات است؛ که به عنوان یک پلتفرم تلاش می کند رابطه بلند مدت با مشتریان خود برقرار کند...</p>
            </div>
          </details>
        </div>
      </div>

      {/* Certifications */}
      <div className="certifications">
        <div className="container">
          <div className="cert-grid">
            <img src="https://khedmatazma.com/assets/site/default/img/permission/samandehi.png" alt="Samandehi" />
            <img src="https://khedmatazma.com/assets/site/default/img/permission/enamad.png" alt="Enamad" />
            <img src="https://khedmatazma.com/assets/site/default/img/permission/etehadie.png" alt="Etehadie" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <p>
            <span dir="ltr">© 1395 - 1403</span>
            {' '}کلیه حقوق این سایت متعلق به شرکت ایده گزین خدمت افزار مانا (خدمت از ما) می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;