import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../global/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const {loading} = useContext(AuthContext)

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
  
  if (loading) {
    return <Loading/>
}



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