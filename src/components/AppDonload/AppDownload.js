import React from 'react';
import { Smartphone } from 'lucide-react';
import './AppDownload.css';

const AppDownload = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="app-download">
      <div className="container">
        <div className="section-body">
          <div className="text">
            <header className="section-header">
              <h2 className="title">دسترسی به بهترین متخصصین، در اپلیکیشن خدمت از ما</h2>
            </header>
            
            <p className="desc">
              قبل از انجام کارهایتان، از چند متخصص قیمت بگیرید. سوابق حرفه ای متخصصین و نظرات مشتریان را مشاهده کنید. در اپلیکیشن "خدمت از ما"، به بهترین متخصصین دسترسی دارید.
            </p>
            
            <form className="frmMsg" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>برای دریافت لینک دانلود اپلیکیشن، شماره خود را وارد کنید</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Smartphone size={24} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="شماره موبایل"
                    name="phone"
                    required
                  />
                  <button className="mybtn" type="submit" id="sms-download-link">
                    <span>دریافت لینک</span>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
            </form>

            <div className="download-links">
              <a
                name="download-app"
                rel="nofollow"
                className="cafebazaar"
                href="https://tracker.metrix.ir/lslje6"
                target="_blank"
              >
                <img
                  src="https://khedmatazma.com/app/webroot/img/baazar.png"
                  width="150"
                  height="48"
                  alt="cafebazaar khedmatazma"
                />
              </a>
              <a
                name="download-app"
                rel="nofollow"
                className="google-play"
                href="https://tracker.metrix.ir/lslje6"
                target="_blank"
              >
                <img
                  src="https://khedmatazma.com/app/webroot/img/google-play.png"
                  width="150"
                  height="48"
                  alt="google-play khedmatazma"
                />
              </a>
              <a
                name="download-app"
                rel="nofollow"
                className="myket"
                href="https://tracker.metrix.ir/lslje6"
                target="_blank"
              >
                <img
                  src="https://khedmatazma.com/app/webroot/img/myket.png"
                  width="150"
                  height="48"
                  alt="myket khedmatazma"
                />
              </a>
              <a
                name="download-app"
                rel="nofollow"
                className="web-application"
                href="https://khedmatazma.com/webapp"
                target="_blank"
              >
                <img
                  src="https://khedmatazma.com/app/webroot/img/web-application.png"
                  width="150"
                  height="48"
                  alt="web-application khedmatazma"
                />
              </a>
            </div>
          </div>

          <figure className="pic">
            <img
              src="https://khedmatazma.com/assets/site/default/img/mobile.png"
              width="500"
              height="500"
              alt="اپلیکیشن خدمت از ما"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;