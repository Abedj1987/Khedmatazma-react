import React from 'react';
import './ServicePrices.css';

const ServicePrices = () => {
  const services = [
    {
      name: 'نظافت منزل',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=255&h=170',
      price: '450,000 تومان',
      link: 'https://khedmatazma.com/subservice/home-cleaning'
    },
    {
      name: 'قالیشویی',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=255&h=170',
      price: '30,000 تومان',
      link: 'https://khedmatazma.com/subservice/carpet-cleaning'
    },
    {
      name: 'مبل شویی',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=255&h=170',
      price: '600,000 تومان',
      link: 'https://khedmatazma.com/subservice/sofa-cleaning'
    },
    {
      name: 'نظافت شرکت و محل کار',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=255&h=170',
      price: '400,000 تومان',
      link: 'https://khedmatazma.com/subservice/office-cleaning'
    }
  ];

  return (
    <section className="service-prices">
      <div className="container">
        <header>
          <h2 className="head-item">
            قیمت خدمات را دریافت کنید.
          </h2>
        </header>

        <div className="sub-title">دیگران برای کارهای مشابه شما چقدر هزینه کرده اند؟</div>
        <p className="desc">
          ما هزاران درخواست و قیمت پیشنهادی متخصصین "خدمت از ما" را بررسی کردیم تا ببینیم هزینه واقعی هر خدمت چقدر است. پس از مشاهده حدود قیمت خدمات، در صورت تمایل می توانید درخواست خود را به رایگان ثبت کنید.
        </p>

        <div className="subservices">
          {services.map((service, index) => (
            <div key={index} className="subservice">
              <a className="body" href={service.link}>
                <img
                  className="bg-image"
                  src={service.image}
                  width="255"
                  height="170"
                  alt={service.name}
                />

                <div className="details">
                  <div className="subservice-name">
                    قیمت {service.name}
                  </div>

                  <div className="price">
                    <span className="label">
                      شروع قیمت از:
                    </span>
                    <div className="amount">
                      {service.price}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="footer-prices">
          <a className="mybtn btn-lg" href="https://khedmatazma.com/prices">
            مشاهده حدود هزینه خدمات
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicePrices;