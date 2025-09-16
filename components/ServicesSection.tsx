
import React from 'react';
import type { Service } from '../types';
import ServiceCard from './ServiceCard';

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Sơn Nhà Trọn Gói',
    description: 'Dịch vụ sơn nhà chuyên nghiệp từ A-Z, bao gồm tư vấn màu sắc, xử lý bề mặt và thi công hoàn thiện.',
    imageUrl: 'https://picsum.photos/400/300?image=20',
  },
  {
    id: 2,
    title: 'Sơn Giả Bê Tông',
    description: 'Tạo hiệu ứng tường bê tông mài độc đáo, mang đến vẻ đẹp thô mộc, hiện đại và cá tính cho không gian.',
    imageUrl: 'https://picsum.photos/400/300?image=160',
  },
  {
    id: 3,
    title: 'Sơn Hiệu Ứng',
    description: 'Sơn trang trí với các hiệu ứng đặc biệt như gỉ sét, vân đá, cát sa mạc... tạo điểm nhấn nghệ thuật.',
    imageUrl: 'https://picsum.photos/400/300?image=219',
  },
  {
    id: 4,
    title: 'Sơn Chống Thấm',
    description: 'Giải pháp chống thấm toàn diện cho tường, trần, sàn nhà vệ sinh, đảm bảo công trình bền vững với thời gian.',
    imageUrl: 'https://picsum.photos/400/300?image=310',
  },
  {
    id: 5,
    title: 'Sơn Dầu & Sơn PU',
    description: 'Thi công sơn dầu cho cửa, cổng sắt và sơn PU cho đồ gỗ, mang lại bề mặt bóng đẹp và bảo vệ tối ưu.',
    imageUrl: 'https://picsum.photos/400/300?image=453',
  },
  {
    id: 6,
    title: 'Tư Vấn & Phối Màu',
    description: 'Đội ngũ chuyên gia sẵn sàng tư vấn, phối màu sơn theo phong thủy và phong cách thiết kế của bạn.',
    imageUrl: 'https://picsum.photos/400/300?image=1025',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary">Dịch Vụ Của Chúng Tôi</h2>
          <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các giải pháp sơn chất lượng cao để đáp ứng mọi nhu cầu của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
