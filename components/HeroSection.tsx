
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img 
        src="https://picsum.photos/1600/900?image=1074" 
        alt="Modern interior with painted walls" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
          Nghệ Thuật Sơn & Không Gian Sống Đẳng Cấp
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Mang đến giải pháp sơn chuyên nghiệp, biến ngôi nhà của bạn thành một tác phẩm nghệ thuật.
        </p>
        <button className="bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Khám Phá Dịch Vụ
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
