import { useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../global/Loading";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [amount, setAmount] = useState([]);
  const { currentUser,loading } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProduct(cartItems)
    
    const prices = cartProduct.map(item => item.price*item.quantity);
    setAmount(prices);
  }, [cartProduct])
  
  const totalAmount = amount.reduce((prev,next)=> prev+next, 0)


  const deleteProduct = (id) => {
    // Update React state with the modified cart items
    const updatedCartProduct = cartProduct.filter((pro) => pro?.productId !== id);
    setCartProduct(updatedCartProduct);

    // Update localStorage with the modified cart items
    localStorage.setItem('cart', JSON.stringify(updatedCartProduct));

    console.log('Deleted Product', id);
  };

  const addOrder = () => {
    console.log('cartProduct', cartProduct)
    if (!currentUser) {
      return navigate('/login')
    }
    try {
      fetch('https://product-task-ser.vercel.app/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify(cartProduct),
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          toast.success('We Recieved Your Order. Thank  Your For Your Order')
          console.log(data)
          setTimeout(() => {
            localStorage.removeItem('cart')
            window.location.href = '/thank-you'
          }, 3000);
        })
        .catch(err => {
          console.log(err.message)
          toast.error(`${err.message}`)
      })
    } catch(err) {
      console.log(err.message);
      toast.error('Something Wrong Please Try Again Later')
    } 


  }


  
  if (loading) {
    return <Loading />
}


  
  return (
    <div>
      {
        cartProduct.length>0 ?   <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr className="bg-gray-200">
          <th>
            Product
          </th>
          <th>
            Color
          </th>
          <th>
            Size
          </th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       
                {
                  cartProduct.map(item => (
                    <tr key={item._id}>
        
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="border w-16 h-16">
                  <img src={item.img} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
              <div className="font-semibold">{item.title}</div>
                
              </div>
            </div>
          </td>
          <td>
           {item.color}
          </td>
          <td>
           {item.size}
          </td>
          <td>
           ${item.price}
          </td>
          <td>
                   {item.quantity}
          </td>
          <td>
                  ${item.price * item.quantity}
          </td>
          <th>
                        <button onClick={()=>deleteProduct(item.productId)} className="size-10 border border-red-600 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-500 ease-in-out group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 group-hover:text-white transition duration-500 ease-in-out">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
  
            </button>
          </th>
        </tr>
                  ))
                }
        
   
      </tbody>
    </table>
          </div>
          
          <div className="grid md:grid-cols-2">
            <div className=""></div>
            <div className=" mt-10 p-10 text-right md:text-left">
            <div className="border-t-2 border-black"></div>
              <h2 className="text-h2 font-semibold mt-5">Total: ${totalAmount}</h2>
              
  
              <button onClick={addOrder} className="md:px-10 sm:px-8 px-6 md:py-4 sm:py-3 py-2 text-xs sm:text-base bg-black hover:bg-primary transition duration-500 ease-out text-white font-semibold mt-5">PROCEED TO CHECKOUT</button>
          </div>
          </div>
        </div> :
          
          <div className="h-screen flex items-center justify-center">
            <div className="w-[300px] sm:w-1/2 p-10 bg-gray-200">
              <h2 className="sm:text-h1 text-h2 text-center font-semibold">You Don't Have Any Order</h2>
              <div className="mt-10 text-center">
              <Link to='/' className='px-10 py-3  bg-black text-white hover:bg-primary transition duration-500 ease-in-out'>Continue Shopping</Link>
                
                </div>
            </div>
          </div>
    }
    </div>
  );
};

export default Cart;