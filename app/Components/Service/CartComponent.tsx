'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Service {
  name: string;
  image: string;
  title: string;
}

const CartComponent: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Fetch the service data from the JSON file
    fetch('/Data/service.json')
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <div className="flex justify-around flex-wrap gap-4 p-4">
      {services.map((service, index) => (
        <div key={index} className="relative group w-96 h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={service.image}
            alt={service.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:opacity-30 transition-opacity duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full p-9 bg-gray-800 bg-opacity-75 text-white text-center">
            <h3 className="text-md font-bold">{service.title}</h3>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <h3 className="text-white text-lg font-bold">{service.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
