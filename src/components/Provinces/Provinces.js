import React from 'react';
import './Provinces.css';

const Provinces = () => {
  const provinces = [
    { name: 'تهران', code: 'teh' },
    { name: 'فارس', code: 'frs' },
    { name: 'اصفهان', code: 'esf' },
    { name: 'خراسان رضوی', code: 'khr' },
    { name: 'البرز', code: 'alb' },
    { name: 'خوزستان', code: 'khz' },
    { name: 'آذربایجان شرقی', code: 'azs' },
    { name: 'قم', code: 'qom' },
    { name: 'هرمزگان', code: 'hor' },
    { name: 'آذربایجان غربی', code: 'azg' },
    { name: 'سیستان و بلوچستان', code: 'sis' },
    { name: 'گلستان', code: 'gol' },
    { name: 'بوشهر', code: 'bus' },
    { name: 'كرمان', code: 'ker' },
    { name: 'یزد', code: 'yaz' },
    { name: 'همدان', code: 'ham' },
    { name: 'قزوین', code: 'qaz' },
    { name: 'گیلان', code: 'gil' },
    { name: 'مرکزی', code: 'mar' },
    { name: 'زنجان', code: 'zan' },
    { name: 'مازندران', code: 'maz' },
    { name: 'کرمانشاه', code: 'krs' },
    { name: 'كردستان', code: 'kur' },
    { name: 'خراسان شمالی', code: 'khs' },
    { name: 'لرستان', code: 'lor' },
    { name: 'چهارمحال و بختیاری', code: 'cha' },
    { name: 'اردبیل', code: 'ard' },
  ];

  const popularCities = [
    { name: 'تهران', code: 'teh/tehran' },
    { name: 'مشهد', code: 'khr/mashhad' },
    { name: 'کرج', code: 'alb/karaj' },
    { name: 'اصفهان', code: 'esf/esfahan' },
    { name: 'شیراز', code: 'frs/shiraz' },
    { name: 'تبریز', code: 'azs/tabriz' },
    { name: 'اهواز', code: 'khz/ahvaz' },
  ];

  return (
    <section className="city-province">
      <div className="container">
        <div className="provinces">
          <div className="provider-wrapper">
            <div className="text">
              <header>
                <h2 className="title">
                  لیست استان‌های فعال در "خدمت از ما"
                </h2>
              </header>

              <ul className="items">
                {provinces.map((province, index) => (
                  <li key={index} className="item">
                    <a href={`https://khedmatazma.com/${province.code}`}>{province.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="pic">
              <img
                src="https://khedmatazma.com/assets/site/default/img/province-home.png"
                width="320"
                height="279"
                alt="استان های فعال در خدمت از ما"
              />
            </figure>
          </div>
        </div>

        <div className="most-visited-cities">
          <div className="section-header">
            <h3 className="title">
              شهرهای پربازدید
            </h3>
          </div>

          <div className="section-body">
            {popularCities.map((city, index) => (
              <a key={index} href={`https://khedmatazma.com/${city.code}`}>{city.name}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provinces;