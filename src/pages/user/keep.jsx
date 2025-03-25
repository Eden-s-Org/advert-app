import React from 'react'

const keep = () => {
  return (
   
         <div className="flex flex-col h-screen">
      
      {/* Main Content Container */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4 hidden lg:block fixed h-full">
          <h2 className="text-xl font-bold">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.name} className="p-4 border-b border-gray-700">{category.name}</li>
            ))}
          </ul>
        </div>
        
        {/* Main Content (No Scrollbar) */}
        <div className="flex-1 p-6 ml-64 mr-64">
          <div className="max-w-3xl w-full mx-auto">
            <h1 className="text-3xl font-bold mb-4">Explore Products</h1>
            {categoraies.map((category) => (
              <div key={category.name} className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {category.products.map((product, index) => (
                    // <Link to={`/adverts/:id/${category.name}/${index}`} key={index}>
                    <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg">
                      <img src={product.image} alt={product.description} className="w-full h-60 object-cover rounded-lg" />
                      <p className="text-center mt-2 text-lg font-medium">{product.description}</p>
                      <p className="text-center text-red-600 font-semibold text-xl">{product.price}</p>
                      <button className="bg-">View Details</button>
                    </div>
                    // </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Sidebar for Sponsors (Fixed, Scrollable) */}
        <div className="w-64 bg-gray-200 p-4 hidden lg:block fixed right-0 h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Sponsors</h2>
          <p className="text-gray-700">Advertise your brand here!</p>
        </div>
      </div>
    </div>
  
  )
}

export default keep