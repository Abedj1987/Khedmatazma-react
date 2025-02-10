import React from 'react';
import './PopularServices.css';

const PopularServices = () => {
  const services = [
    {
      name: 'نظافت منزل تهران',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/home-cleaning/tehran'
    },
    {
      name: 'مبل شویی تهران',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/sofa-cleaning/tehran'
    },
    {
      name: 'قالیشویی تهران',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/carpet-cleaning/tehran'
    },
    {
      name: 'ژلیش ناخن بانوان تهران',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/nail-polish/tehran'
    },
    {
      name: 'کوتاهی مو بانوان تهران',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/haircut/tehran'
    },
    {
      name: 'نقاشی ساختمان تهران',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/building-painting/tehran'
    },
    {
      name: 'نصب کاغذ دیواری تهران',
      image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/wallpaper-installation/tehran'
    },
    {
      name: 'اسباب کشی تهران',
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=255&h=170',
      link: '/order/moving/tehran'
    }
  ];

  return (
    <section className="popular-services">
      <div className="container">
        <h2 className="section-title">
          خدمات محبوب در بازار تهران "خدمت از ما"
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <a href={service.link} className="service-link">
                <div className="image-wrapper">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="service-image"
                    width="255"
                    height="170"
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <span className="order-button">ثبت سفارش</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;