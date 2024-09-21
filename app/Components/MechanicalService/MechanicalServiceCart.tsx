'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface MechanicalService {
  name: string;
  image: string;
  title: string;
}

const MechanicalServiceCart: React.FC = () => {
  const [mechanicalServices, setMechanicalServices] = useState<MechanicalService[]>([]);

  useEffect(() => {
    // Fetch the mechanical service data from the JSON file
    fetch('/Data/mechanicalService.json')
      .then((response) => response.json())
      .then((data) => setMechanicalServices(data.services))
      .catch((error) => console.error('Error fetching mechanical services:', error));
  }, []);
  
  return (
    <div className="flex justify-around flex-wrap gap-4 p-4">
      {mechanicalServices.map((service, index) => (
        <div key={index} className="relative group w-96 h-96 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={service.image}
            alt={service.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:opacity-30 transition-opacity duration-300"
          />
          {/* Name appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <h3 className="text-white text-lg font-bold">{service.name}</h3>
          </div>
          {/* Title displayed below the image */}
          <div className="mt-2 text-center">
            <h4 className="text-lg font-semibold">{service?.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MechanicalServiceCart;
