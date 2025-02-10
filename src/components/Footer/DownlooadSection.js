import React from 'react';

const DownloadSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 download-links">
      <div className="newsletters">
        <div className="subject">دریافت لینک دانلود</div>
        <p className="text">لطفا شماره همراه خود را وارد کنید</p>
        <form className="frmMsg" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fi fi-mobile fi-2x"></i></span>
            </div>
            <input 
              type="text" 
              name="phone" 
              className="form-control" 
              placeholder="شماره موبایل" 
              required 
            />
            <div className="input-group-append">
              <button className="btn mybtn" id="sms-download-link-footer" type="submit">
                <span>دریافت</span>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="download">
        <div className="subject">دانلود اپلیکیشن</div>
        <div className="link-items">
          <a name="new front footer" rel="nofollow" className="bazaar" href="https://tracker.metrix.ir/bdhlsy" target="_blank">
            <img src="https://khedmatazma.com/assets/site/default/img/baazar.png" width="150" height="46" alt="baazar khedmatazma" />
          </a>
          <a name="new front footer" rel="nofollow" className="google-play" href="https://tracker.metrix.ir/bdhlsy" target="_blank">
            <img src="https://khedmatazma.com/assets/site/default/img/google-play.png" width="150" height="46" alt="google play khedmatazma" />
          </a>
          <a name="new front footer" rel="nofollow" className="myket" href="https://tracker.metrix.ir/bdhlsy" target="_blank">
            <img src="https://khedmatazma.com/assets/site/default/img/myket.png" width="150" height="46" alt="myket khedmatazma" />
          </a>
          <a rel="nofollow" className="webapp" href="https://khedmatazma.com/webapp" target="_blank">
            <img src="https://khedmatazma.com/assets/site/default/img/web-application.png" width="150" height="46" alt="web application khedmatazma" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;