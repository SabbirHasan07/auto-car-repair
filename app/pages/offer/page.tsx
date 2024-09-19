import React from 'react';

const OfferPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">SECIAL OFFERS</h1>
      <div className="lg:flex justify-center item-center w-full max-w-4xl bg-slate-200 py-11 px-6 rounded-xl">
        <OfferCard price={565} discount={10} packageName="Package One" />
        <OfferCard price={765} discount={20} packageName="Package Two" />
        <OfferCard price={1700} discount={50} packageName="Combo Package" combo />
      </div>
    </div>
  );
};

interface OfferCardProps {
  price: number;
  discount: number;
  packageName: string;
  combo?: boolean;
}

const OfferCard: React.FC<OfferCardProps> = ({ price, discount, packageName, combo }) => {
  const discountedPrice = price - (price * (discount / 100));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center w-60 m-4">
      <h2 className="text-xl font-semibold mb-2">{packageName}</h2>
      <p className="text-lg text-gray-500 line-through">${price.toFixed(2)}</p>
      <p className="text-lg text-red-500">{discount}% Off</p>
      <p className="text-2xl font-bold text-green-600">${discountedPrice.toFixed(2)}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-red-600 transition">
        CLAIM OFFER
      </button>
    </div>
  );
};

export default OfferPage;
