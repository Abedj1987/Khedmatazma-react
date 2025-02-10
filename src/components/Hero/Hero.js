import React from 'react';
import { Search, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = ({ activeTab, setActiveTab }) => {
  return (
    <section className="hero-section">
      <div className="content-hero">
        <ul className="nav nav-pills mb-3" role="tablist">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'customer' ? 'active' : ''}`}
              onClick={() => setActiveTab('customer')}
            >
              یافتن متخصصین
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'provider' ? 'active' : ''}`}
              onClick={() => setActiveTab('provider')}
            >
              ثبت نام متخصصین
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className={`tab-pane ${activeTab === 'customer' ? 'show active' : ''}`}>
            <h1 className="slogan">
              دسترسی آسان به متخصصین، در خدمت از ما
            </h1>

            <div className="search-box-component">
              <div className="search-section">
                <div className="input-group">
                  <div className="input-section">
                    <input
                      type="search"
                      placeholder="به چه خدمتی نیاز دارید؟"
                      className="form-control"
                    />
                    <Search className="search-icon" size={20} />
                  </div>

                  <div className="location-section">
                    <button className="btn-select-location">
                      <MapPin size={20} />
                      <span className="location-name">تهران</span>
                    </button>
                  </div>

                  <div className="btn-section">
                    <button className="search-submit">
                      <span className="btn-text">جستجو</span>
                      <Search className="btn-icon" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-download-section">
              <h2>دریافت اپلیکیشن</h2>
              <div className="app-download-links">
                <a href="#" className="link-item">
                  <img src="/images/hero/app-store.png" alt="App Store" />
                </a>
                <a href="#" className="link-item">
                  <img src="/images/hero/google-play.png" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>

          <div className={`tab-pane ${activeTab === 'provider' ? 'show active' : ''}`}>
            <div className="provider-content">
              <p className="provider-text">
                در "خدمت از ما" تعداد مشتری و میزان درآمد خود را افزایش دهید
              </p>
              <div className="download-links">
                <a className="start-btn" href="https://khedmatazma.com/pages/provider">
                  شروع کنید
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <figure className="hero-figure">
        <img 
          className="hero-image" 
          src="https://khedmatazma.com/assets/site/default/img/home-slider/1.jpg" 
          alt="خدمت آزما"
        />
      </figure>
    </section>
  );
};

export default Hero;