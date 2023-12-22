import { useState } from "react";
import { Link } from "react-router-dom";

const ProductModal = ({ modal, product }) => {

  const { title, discountPrice,color, price, size, description, img } = product;
  
  // console.log("Product" , product)

  const [count, setCount] = useState(1)



  return (
    <div>

{/* <label htmlhtmlFor="my_modal_7" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id={modal} className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box w-11/12 max-w-5xl p-10 rounded-sm">
          <form method="dialog">
            <button
              className="btn btn-sm border border-black btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="grid md:grid-cols-2 gap-10 mt-5">
            <div className="h-full flex items-center justify-center">
              <img className="w-[400px]" src={img} alt="" />
            </div>
            <div>
  
                 <h1 className="md:text-h2 text-xl font-semibold">{ title }</h1>
  

              <h1 className="md:text-bannerParagraph text-sm my-3">
                <span  className="line-through mr-2">{discountPrice? `$${discountPrice }` : "" } </span>
                <span className="text-primary"> ${ price}</span>
              </h1>

              <p className="text-justify md:text-footerBody text-sm md:leading-7 leading-6 md:tracking-wide">
                { description }
              </p>

              <div className="mt-10">
                <div>
                  <label
                    htmlFor="size"
                    className="block mb-2 text-sm font-semibold text-product"
                    >Size:</label
                  >
                  <select
                    id="size"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2.5"
                  >
                    {size?.map((s,i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-semibold text-product"
                    >Color:</label
                  >
                  <select
                    id="color"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2.5"
                  >
                    {
                      color?.map((co, i) => (
                        <option key={i} value={co}>{ co}</option>
                      ))
                    }
       
                  </select>
                </div>
              </div>

              <div className="md:flex grid  md:justify-start gap-5 mt-5">
                <div
                  className="border border-black flex h-full items-center justify-center px-2 py-[5px]"
                >
                  <button onClick={()=> count>1 ? setCount(count-1) : 1} className="text-3xl" >-</button>
                  <input
                    className="md:w-10 text-center px-2 border-none" value={count}
                    type="text"
                  />
                  <button onClick={()=> setCount(count+1)} className="text-2xl" >+</button>
                </div>
                <div>
                  <button 
                    className="uppercase w-full px-10 py-3 bg-black text-white hover:bg-primary transition duration-500 ease-in-out"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>



  <label className="modal-backdrop" htmlFor={modal}>Close</label>
</div>
      
      </div>

  );
};

export default ProductModal;