import React from 'react'
import "../styles/home.css"
function HomePage() {
  return (
    <div className="home">
      <div className="home-images">
        <div>
          <span>partner</span> for your future of learning
        </div>
      </div>
      <hr className='h-line'/>
      <div className="home-title">
        <h1 className="my-2">رسالتنا</h1>
        <p className="my-3 px-2">
          تلتزم جامعة المنيا بدورها في تنمية المجتمع من خلال توفير بيئةةمحفزة
          للتعليم والبحث العلمي وتقديم خدمة تعليمية متميزة بفرص متساويةللطلاب ,
          وتعظيم الشراكة مع المجتمع
        </p>
      </div>
    </div>
  );
}

export default HomePage
