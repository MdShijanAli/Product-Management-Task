import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
    .then(res => {
    setProducts(res.data)
    })
      .catch(err => {
      console.log(err.message)
    })
  },[])
  
  // console.log(products)

  // console.log("selected Product", selectedProduct)
  
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
      >
          {
            products.map(product => (
              <div className="group"  key={product.id}>
              <div className="border rounded-sm relative px-0 overflow-hidden ">
                  <div className="relative group flex justify-center">
                    <img 
                              className="hover:scale-110 transition duration-500 ease-in-out"
                              src={product?.img}
                              alt=""
                            />
    
                  </div>
                <div
                 
                  className="absolute top-5 left-5 bg-primary px-2 rounded-sm"
                >
                    <p className="text-white">{ product.offer? `-${ product?.offer }%`: "" }</p>
                </div>

                <div
                  className="hidden group-hover:flex flex-col gap-2 absolute top-5 right-5 transition-all duration-700 ease-in-out"
                >
            
                  <div
                    className="border w-10 h-10 flex items-center justify-center rounded-sm bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
    
                  <label
                    onClick={()=>setSelectedProduct(product)}
                    htmlFor="productModal"
                    className="border w-10 h-10 flex items-center justify-center rounded-sm bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  </label>
                </div>
              </div>
    
              <div className="mt-3">
                <p className="text-sm text-product">{ product.category }</p>
                <Link to={`/product/${product._id}`}>
                  <h1 className="font-semibold my-1.5 hover:text-primary">
                    { product.title }
                  </h1>
                </Link>
                <h1 className="text-product">
                  <span  className="line-through"
                    > {product.discountPrice? `$${product?.discountPrice }` : "" }  </span
                    > <span >{ product.discountPrice? '-': "" }</span>
                  ${ product.price }
                </h1>
              </div>
                <ProductModal modal="productModal" product={selectedProduct} />
            </div>

            ))
       }
      </div>


      {/* <ProductModal modal="product_modal" :selectedProduct="selectedProduct"></ProductModal> */}


      </div>
      </div>
  );
};

export default Products;