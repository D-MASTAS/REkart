import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Model = () => {

    const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    
  };

  const deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days after current time

  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
    
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70" onClick={handleCloseModal}></div>
  <div className="relative w-full max-w-md mx-auto rounded-md overflow-hidden">
    <div className="bg-white p-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Placed</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your order has been placed at {new Date().toLocaleString()} and will be delivered on {formattedDeliveryDate}.
        </p>
      </div>
      <Link to="/" className="py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200 ease-in-out">
  Close
</Link>
    </div>
  </div>
</div>

  )
}

export default Model