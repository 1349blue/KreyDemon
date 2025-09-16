
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-primary text-white">
      <div className="container mx-auto px-6 py-16 sm:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Sẵn Sàng Thay Đổi Không Gian Của Bạn?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Hãy để chúng tôi giúp bạn hiện thực hóa ý tưởng. Liên hệ ngay để nhận tư vấn và báo giá chi tiết hoàn toàn miễn phí.
        </p>
        <button className="bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Nhận Báo Giá
        </button>
      </div>
    </section>
  );
};

export default CTASection;
