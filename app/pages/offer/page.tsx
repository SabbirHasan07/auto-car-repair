'use client'

import React, { useState } from 'react';

const OfferPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClaimOffer = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">SPECIAL OFFERS</h1>
      <hr />
      <div className="lg:flex flex-col md:flex-row justify-around w-full max-w-4xl bg-slate-200 rounded-md py-6">
        <OfferCard price={565} discount={10} packageName="Package One" onClaim={handleClaimOffer} />
        <OfferCard price={765} discount={20} packageName="Package Two" onClaim={handleClaimOffer} />
        <OfferCard price={1700} discount={50} packageName="Combo Package" combo onClaim={handleClaimOffer} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold">Congratulations!</h2>
            <h2 className="mt-2">You&apos;ve claimed your offer!</h2> {/* Escaped single quote */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

interface OfferCardProps {
  price: number;
  discount: number;
  packageName: string;
  combo?: boolean;
  onClaim: () => void; // Add onClaim prop
}

const OfferCard: React.FC<OfferCardProps> = ({ price, discount, packageName, combo, onClaim }) => {
  const discountedPrice = price - (price * (discount / 100));

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 text-center w-60 m-4 ${combo ? 'border-2 border-red-500' : ''}`}>
      <h2 className="text-xl font-semibold mb-2">{packageName}</h2>
      <h2 className="text-lg text-gray-500 line-through">${price.toFixed(2)}</h2>
      <h2 className="text-lg text-red-500">{discount}% Off</h2>
      <h2 className="text-2xl font-bold text-green-600">${discountedPrice.toFixed(2)}</h2>
      <button
        className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={onClaim} // Trigger onClaim when button is clicked
      >
        CLAIM OFFER
      </button>
    </div>
  );
};

export default OfferPage;
