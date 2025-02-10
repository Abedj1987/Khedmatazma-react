import React from 'react';
import './ServiceSteps.css';

const ServiceSteps = () => {
  const steps = [
    {
      image: 'https://khedmatazma.com/assets/site/default/img/guide/step1.png',
      title: 'تنوع خدمات',
      description: 'متخصصین قابل اعتماد برای انجام هر خدمتی را در بازار "خدمت از ما" پیدا کنید.'
    },
    {
      image: 'https://khedmatazma.com/assets/site/default/img/guide/step2.png',
      title: 'دریافت رایگان قیمت',
      description: 'پیش از انجام کارهایتان اول از چند متخصص به رایگان قیمت بگیرید.'
    },
    {
      image: 'https://khedmatazma.com/assets/site/default/img/guide/step3.png',
      title: 'انتخاب آگاهانه متخصص',
      description: 'با بررسی پروفایل و نظرات مشتریان قبلی متخصصین، مناسب‌ترین فرد را به دلخواه انتخاب کنید.'
    }
  ];

  return (
    <section className="service-steps">
      <div className="container">
        <header className="section-header">
          <h2 className="title">"خدمت از ما" و تسهیل بهینه کارها</h2>
        </header>

        <div className="section-body">
          <div className="row">
            {steps.map((step, index) => (
              <div key={index} className={`step ${index === 0 ? 's1' : ''}`}>
                <div className="body">
                  <figure className="pic">
                    <img
                      src={step.image}
                      width="250"
                      height="250"
                      alt={`نحوه ثبت سفارش در خدمت از ما - مرحله ${index + 1}`}
                    />
                  </figure>

                  <div className="text">
                    <h3 className="title">{step.title}</h3>
                    <p className="desc">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps;