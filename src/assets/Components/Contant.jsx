import React from 'react';

const Contant = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
          CART
        </h2>

        {/* Content */}
        <div className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a
          doloribus quibusdam excepturi voluptas aperiam amet quo iusto
          dignissimos! Enim accusantium nemo repellendus culpa neque
          voluptatibus odit! Doloremque consectetur, natus modi ipsa nesciunt
          vero unde, quod, rerum fuga sit aut.
        </div>

        {/* Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200">
          Click ON
        </button>
      </div>
    </div>
  );
};

export default Contant;
