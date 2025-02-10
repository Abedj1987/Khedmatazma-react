import React from 'react';
import { Settings, Home, Brush, Scissors, Building2, Laptop2, Car } from 'lucide-react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { icon: <Settings size={24} />, name: 'تاسیسات', link: '/categories/facility' },
    { icon: <Home size={24} />, name: 'خانه', link: '/categories/home' },
    { icon: <Brush size={24} />, name: 'نظافت', link: '/categories/cleaning' },
    { icon: <Scissors size={24} />, name: 'زیبایی', link: '/categories/beauty' },
    { icon: <Building2 size={24} />, name: 'ساختمان', link: '/categories/building' },
    { icon: <Laptop2 size={24} />, name: 'دیجیتال', link: '/categories/digital' },
    { icon: <Car size={24} />, name: 'خودرو و حمل و نقل', link: '/categories/car' },
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="items row">
          {categories.map((category, index) => (
            <div key={index} className="item col">
              <a className="inner" href={category.link}>
                <span className="icon">{category.icon}</span>
                <div className="name">{category.name}</div>
              </a>
            </div>
          ))}
          <div className="item col">
            <a className="inner" href="/teh/tehran">
              <span className="icon">...</span>
              <div className="name">بیشتر</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;