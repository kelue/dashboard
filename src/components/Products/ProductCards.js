import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ProductCards() {
  const [products, setproducts] = useState("")

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/products?_quantity=10')
    .then(response => setproducts(response.data.data))
  
  }, [])


  return (
    <>
         <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            { products ?
              products.map((product, id) => (
                <div key={id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product.image}
                      alt={product.description}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    <div className='text-sm text-gray-700 text-left'>
                      <p className="text-sm font-medium text-gray-900">{`Net price: $${product.net_price}`}</p>
                      <p className="text-sm font-medium text-gray-900">{`Taxes: $${product.taxes}`}</p>
                      {/* Divider */}
                      {/* <hr className="my-4 md:min-w-full" /> */}
                      <p className="text-sm font-medium text-gray-900">{`Price: $${product.price}`}</p>
                    </div>
                  </div>
                </div>
              )) : null
            }
          </div>
      </div>
    </>
  )
}

export default ProductCards