
import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-brand-primary font-bold mb-2">{service.title}</h3>
        <p className="text-brand-text mb-4 leading-relaxed">{service.description}</p>
        <a href="#" className="font-semibold text-brand-accent hover:text-yellow-500 transition-colors duration-300 group">
          Tìm hiểu thêm
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
