import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../global/Loading";

const ProductDetails = () => {
  const {currentUser,loading} = useContext(AuthContext)
  const currentProduct = useLoaderData();
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectColor, setSelectColor] = useState(null);
  const [selectSize, setSelectSize] = useState(null);
  const [count, setCount] = useState(1);

  const addToCart = async(product) => {
    const addToCartData = {
      productId: product._id,
      img: selectedImg?selectedImg:product.img,
      title: product.title,
      price: product.price,
      color: selectColor,
      size: selectSize,
      quantity: count,
      userEmail: currentUser? currentUser.email : null
    }
    try {
      const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      existingCartItems.push(addToCartData);


      // const response = await axios.post('https://product-task-ser.vercel.app/api/cart', addToCartData);
      localStorage.setItem('cart', JSON.stringify(existingCartItems));
      toast.success(`${addToCartData.title} addded cart successfully`)
    } catch(err) {
      console.log(err.message)
      toast.error('Product Add to cart Failed')
    } finally {
      window.location.href = '/'
    }
  }


  
  if (loading) {
    return <Loading/>
}



  return (
    <div>
        <div className="max-w-7xl mx-auto px-6 py-20">
     
     <div className="grid md:grid-cols-2 gap-10">
           <div>
              <div className="border-2 rounded-md md:h-[550px] sm:h-[500px] h-[300px] w-full col-span-1">
                    <img className="w-full h-full rounded-md" src={selectedImg? selectedImg : currentProduct.img} alt=""  />
              </div>

              <div className="mt-5 flex gap-5 col-span-1">
              {
                currentProduct.images.map((img, i) => (
                  <div onClick={()=>setSelectedImg(img)} key={i} className="md:h-36 h-20 sm:h-24 w-full border-2 rounded-md">
                 <img className="w-full h-full rounded-md" src={img} alt="img" />
               </div>
                ))
               }
              </div>
           </div>
           <div>
             <div>
               <h1 className="md:text-h1 sm:text-2xl text-xl font-normal">{ currentProduct.title }</h1>
               <h1 className="md:text-h1 sm:text-2xl text-xl font-semibold my-2">${ currentProduct.price }</h1>

               <div className="flex items-center gap-5">
                 <div className="flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 w-4 h-4 md:h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 w-4 h-4 md:h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 w-4 h-4 md:h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 w-4 h-4 md:h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 w-4 h-4 md:h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>

                 </div>

                 <a href="">
                   <p className="sm:text-lg text-md hover:text-primary">(5 Customer Review)</p>
                 </a>
               </div>

               <div className="border my-10"></div>

              <p className="text-justify text-sm sm:text-base tracking-wider leading-7">{ currentProduct.description }</p>
             
               <div className="py-5 flex items-center gap-10">
                 <p className="font-medium sm:text-xl text-md">Color</p>

                 <div>
                   <ul className="flex flex-wrap sm:gap-5 gap-3">
                    {
                      currentProduct?.color?.map((co, i) => (
                        <li onClick={()=>setSelectColor(co)} key={i} className={`sm:w-9 w-6 h-6 sm:h-9 rounded-full ${selectColor == co? 'ring-primary': ''} ${co == 'blue'? 'bg-blue-700' : co == 'red'? 'bg-red-800' : 'bg-black'} border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary`}></li>
                      ))
                    }
                    </ul>
                 </div>
               </div>
               <div className="py-5 flex flex-wrap items-center gap-10">
                 <p className="font-medium sm:text-xl text-md">Size</p>

                 <div>
                   <ul className="flex sm:gap-5 gap-3">
                    {
                      currentProduct?.size?.map((s, i) => (
                        <li onClick={()=>setSelectSize(s)} key={i} className={`${selectSize == s? "ring-primary": ""} sm:w-9 w-6 h-6 sm:h-9 rounded-full bg-gray-300 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary flex items-center justify-center cursor-pointer`}><span className="sm:text-sm text-xs">{s}</span></li>
                      ))
                     }
                   </ul>
                 </div>
               </div>

               <div className="flex gap-5 items-center my-5">
                 <div>
                   <input type="text" value={count} className="border border-gray-200 md:w-16 sm:w-12 w-10 md:h-10 sm:h-8 h-7 text-center focus:border-gray-200 focus:ring-0" />
                   <div className="flex">
                     <p onClick={()=> count>1 ? setCount(count-1) : 1} className="md:w-8 sm:w-6 w-5 sm:h-6 h-4 text-lg font-semibold cursor-pointer flex items-center justify-center border hover:bg-primary group">-</p>
                     <p onClick={()=> setCount(count+1)} className="md:w-8 sm:w-6 w-5 sm:h-6 h-4 text-lg font-semibold cursor-pointer flex items-center justify-center border hover:bg-primary group">+</p>
                   </div>
                 </div>
                 <div>
                   <button onClick={()=>addToCart(currentProduct)} className="md:px-10 sm:px-8 px-6 md:py-4 sm:py-3 py-2 bg-black hover:bg-primary text-xl text-white">Add to Cart</button>
                 </div>
               </div>


             </div>
           </div>
     </div>
      </div>
      </div>
  );
};

export default ProductDetails;