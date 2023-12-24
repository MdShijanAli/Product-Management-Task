import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../global/Loading";

const ThankYou = () => {
  const [getOrders, setGetOrders] = useState([]);
  const [orders, setOrders] = useState([]);
  const { currentUser,loading } = useContext(AuthContext)
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    axios.get('https://product-task-ser.vercel.app/api/orders')
      .then(response => {
        setGetOrders(response.data)
      })
      .catch(err => {
      console.log(err.message)
    })
  }, [])

  const totalAmount = amount.reduce((prev,next)=> prev+next, 0)


  useEffect(() => {
    const filterOrders = getOrders.filter(order => order.userEmail == currentUser?.email);
    setOrders(filterOrders)

    const prices = filterOrders.map(item => item.price*item.quantity);
    setAmount(prices);
  },[getOrders,currentUser])

  console.log('Orders', orders)
  


  if (loading) {
    return <Loading/>
}

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div>
          <h2 className="md:text-h1 text-xl sm:text-2xl font-semibold p-5 bg-gray-300 text-center">Thank You For Your Order</h2>

          <div className="mx-auto p-10 bg-gray-50 mt-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5  justify-between ">
            <h2 className="text-xl font-semibold sm:text-center">Your Order Reciept</h2>
            <div>
              <h3 className="sm:text-xl text-md font-semibold">Name: { currentUser?.name}</h3>
              <p className="sm:text-xl text-md font-semibold"> Email: { currentUser?.email}</p>
            </div>
           </div>
            <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-gray-300">
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
      </tr>
    </thead>
    <tbody>
     
              {
                orders.map(item => (
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

      </tr>
                ))
              }
      
 
    </tbody>
  </table>
        </div>
        
        <div className="grid sm:grid-cols-2">
          <div className=""></div>
          <div className=" mt-10 p-10">
          <div className="border-t-2 border-black"></div>
                <h2 className="text-h2 font-semibold text-end mt-5">Total: ${ totalAmount}</h2>
            

        </div>
        </div>
          </div>
           </div>
       </div>
    </div>
  );
};

export default ThankYou;