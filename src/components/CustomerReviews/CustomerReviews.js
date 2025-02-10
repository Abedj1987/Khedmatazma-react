import React from 'react';
import { Star } from 'lucide-react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      specialist: {
        name: 'علی روشن',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=90&h=90',
        rating: 5.0,
        reviewCount: 286,
        successfulServices: 500,
        verified: true
      },
      service: 'تعمیر رادیاتور شوفاژ',
      customer: 'فخار فخار',
      date: '1403/11/17',
      comment: 'سر وقت تشریف اوردند و خیلی دلسوزانه و تمیز کار رو به سرانجام رسوندن. الان گرمایش خونه خیلی فرق کرده نسبت به قبل'
    },
    {
      specialist: {
        name: 'نعمت اله باقری',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=90&h=90',
        rating: 5.0,
        reviewCount: 276,
        successfulServices: 400,
        verified: true
      },
      service: 'مبل شویی',
      customer: 'محمد کلینی',
      date: '1403/11/17',
      comment: 'خیلی تمیز بود کارشون من پارسالم مبلامو واسه شست و شو داده بودم هم خونه رو‌خیلی کثیف کرده بودن هم کثیف شسته بودن ولی اقای باقری بسیار کارشون تمیز بود و مبل و خوشخوابم رو بسیار تمیز شستن مثل روز اول شد ، ممنونم از کار خوبتون خدا قوت🙏'
    },
    {
      specialist: {
        name: 'مائده ملک زاده',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=90&h=90',
        rating: 5.0,
        reviewCount: 6,
        successfulServices: 5,
        verified: true
      },
      service: 'فیلمبرداری و عکاسی مراسم و مجالس',
      customer: 'فرهناز حبیبی',
      date: '1403/11/17',
      comment: 'خیلی سر موقع رسیدن ایشون و بسیار حرفه ای ایده هایی که داشتن واقعا به روز و عالی بود و کیفیت کارشون بسیار بالا'
    }
  ];

  return (
    <section className="customers-reviews">
      <div className="container">
        <header className="section-header">
          <h3 className="title">نظرات</h3>
        </header>

        <div className="section-body">
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="specialist-info">
                    <div className="avatar-container">
                      <img
                        src={review.specialist.image}
                        alt={review.specialist.name}
                        className="avatar"
                      />
                      {review.specialist.verified && (
                        <span className="verified-badge" title="مدارک شناسایی یا گواهی عدم سوپیشینه متخصص موجود است">
                          <Star size={16} fill="#009fd9" color="#009fd9" />
                        </span>
                      )}
                    </div>
                    <div className="info">
                      <h4 className="name">{review.specialist.name}</h4>
                      <div className="rating">
                        <span className="stars">{'★'.repeat(5)}</span>
                        <span className="rating-value">{review.specialist.rating}</span>
                        <span className="review-count">
                          (از {review.specialist.reviewCount} نظر)
                        </span>
                      </div>
                      <div className="services-count">
                        <span className="count">{review.specialist.successfulServices}</span>
                        <span className="label">خدمت موفق</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="review-content">
                  <div className="service-name">{review.service}</div>
                  <div className="review-details">
                    <div className="customer-name">{review.customer}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <p className="review-text">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;