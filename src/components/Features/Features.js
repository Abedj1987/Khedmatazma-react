import React from 'react';
import { Briefcase, Shield, Clock, Users } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Briefcase size={32} />,
      title: 'خدمات متنوع',
      description: 'دسترسی به طیف گسترده‌ای از خدمات حرفه‌ای با بهترین کیفیت'
    },
    {
      icon: <Shield size={32} />,
      title: 'تضمین کیفیت',
      description: 'ارائه خدمات با کیفیت تضمین شده و پشتیبانی ۲۴/۷'
    },
    {
      icon: <Clock size={32} />,
      title: 'سرعت در ارائه',
      description: 'دسترسی سریع به متخصصان و شروع کار در کوتاه‌ترین زمان'
    },
    {
      icon: <Users size={32} />,
      title: 'متخصصان مجرب',
      description: 'همکاری با بهترین متخصصان با سال‌ها تجربه در حوزه‌های مختلف'
    }
  ];

  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;