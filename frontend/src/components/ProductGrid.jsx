import React from 'react';

const ProductGrid = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover"
              />
              {product.isNew && (
                <span className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  New
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-base text-black font-semibold">
                  {product.price}.00 SAR
                </p>
                {product.isNew && (
                  <p className="text-sm text-gray-400 line-through">
                    {(product.price * 1.2).toFixed(2)} SAR
                  </p>
                )}
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(8, 12).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-base text-black font-semibold">
                    {product.price}.00 SAR
                  </p>
                  {product.isNew && (
                    <p className="text-sm text-gray-400 line-through">
                      {(product.price * 1.2).toFixed(2)} SAR
                    </p>
                  )}
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
