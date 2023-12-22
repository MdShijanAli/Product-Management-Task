import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const currentProduct = useLoaderData();
  const [mainImg, setMainImg] = useState(null);

  const [count, setCount] = useState(1);

  return (
    <div>
        <div className="max-w-7xl mx-auto px-6 py-20">
     
     <div className="grid grid-cols-2 gap-10">
           <div>
              <div className="border-2 rounded-md h-[550px]">
                    <img className="w-full h-full rounded-md" src={mainImg? mainImg : currentProduct.img} alt=""  />
              </div>

              <div className="mt-5 flex gap-5">
              {
                currentProduct.images.map((img, i) => (
                  <div onClick={()=>setMainImg(img)} key={i} className="h-36 border-2 rounded-md">
                 <img className="w-full h-full rounded-md" src={img} alt="img" />
               </div>
                ))
               }
              </div>
           </div>
           <div>
             <div>
               <h1 className="text-h1 font-normal">{ currentProduct.title }</h1>
               <h1 className="text-h1 font-semibold my-2">${ currentProduct.price }</h1>

               <div className="flex items-center gap-5">
                 <div className="flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>

                 </div>

                 <a href="">
                   <p className="text-lg hover:text-primary">(5 Customer Review)</p>
                 </a>
               </div>

               <div className="border my-10"></div>

               <p className="text-justify tracking-wider leading-7">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor</p>
             
               <div className="py-5 flex items-center gap-10">
                 <p className="font-medium text-xl">Color</p>

                 <div>
                   <ul className="flex gap-5">
                    {
                      currentProduct?.color?.map((co, i) => (
                        <li key={i} className={`w-9 h-9 rounded-full ${co == 'blue'? 'bg-blue-700' : co == 'red'? 'bg-red-800' : 'bg-black'} border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary`}></li>
                      ))
                    }
                    </ul>
                 </div>
               </div>
               <div className="py-5 flex items-center gap-10">
                 <p className="font-medium text-xl">Size</p>

                 <div>
                   <ul className="flex gap-5">
                    {
                      currentProduct?.size?.map((s, i) => (
                        <li key={i} className="w-9 h-9 rounded-full bg-gray-300 border ring-1 ring-offset-2 ring-gray-300 hover:ring-primary flex items-center justify-center"><a className="text-sm" href="">{s}</a></li>
                      ))
                     }
                   </ul>
                 </div>
               </div>

               <div className="flex gap-5 items-center my-5">
                 <div>
                   <input type="text" value={count} className="border border-gray-200 w-16 h-10 text-center focus:border-gray-200 focus:ring-0" />
                   <div className="flex">
                     <p onClick={()=> count>1 ? setCount(count-1) : 1} className="w-8 h-6 text-lg font-semibold cursor-pointer flex items-center justify-center border hover:bg-primary group">-</p>
                     <p onClick={()=> setCount(count+1)} className="w-8 h-6 text-lg font-semibold cursor-pointer flex items-center justify-center border hover:bg-primary group">+</p>
                   </div>
                 </div>
                 <div>
                   <button className="px-10 py-4 bg-black hover:bg-primary text-xl text-white">Add to Cart</button>
                 </div>
               </div>

               <div className="flex gap-10 pt-5 items-center">
                 <div className="flex gap-3 items-center">
                   <i className="pi pi-heart text-primary text-xl font-medium"></i>
                   <Link to="/wish-list">
                     <p className="text-[#424242] text-[18px] hover:text-primary">Add to Wishlist</p>
                   </Link>
                 </div>
                 <div className="flex gap-3 items-center">
                   <img className="w-7" src="/images/shuffle.png" alt="" />
                   <Link to="/wish-list">
                     <p className="text-[#424242] text-[18px] hover:text-primary">Add to Compare</p>
                   </Link>
                 </div>
               </div>

               <div className="divider"></div>

               <div className="flex items-center justify-between">
                 <p><span className="text-primary">Code : </span> Ch-256xl</p>
                 <p><span className="text-primary">Share </span> 
                 <i className="pi pi-facebook text-gray-500 mx-1 hover:text-primary"></i>
                 <i className="pi pi-twitter text-gray-500 mx-1 hover:text-primary"></i>
                 <i className="pi pi-linkedin text-gray-500 mx-1 hover:text-primary"></i>
                 </p>
               </div>
             </div>
           </div>
     </div>
      </div>
      </div>
  );
};

export default ProductDetails;