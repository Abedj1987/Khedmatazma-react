import React from 'react';

const AboutSection = () => {
  return (
    <details className="about">
      <summary>درباره ی خدمت از ما</summary>
      <article className="text">
        <p style={{ textAlign: 'justify' }}>
          <strong>خدمت از ما</strong>، بازار آنلاین خدمات است؛ که به عنوان یک پلتفرم تلاش می کند رابطه بلند مدت با مشتریان خود برقرار کند. از اهداف ما تسهیل تعاملات و ساده سازی مسیر دریافت خدمات، بین دو گروه متقاضیان خدمات و متخصصین ارائه دهنده خدمات است...
        </p>
        <p dir="RTL">ما اولین نیستیم، اما برای بهترین بودن تلاش می‌کنیم.</p>
      </article>
    </details>
  );
};

export default AboutSection;