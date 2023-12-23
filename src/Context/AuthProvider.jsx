import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
       .then(data => {
      setUser(data)
       })
      .catch(err => {
      console.log(err.message)
      })
      .finally(() => {
         setLoading(false)
       })
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/carts')
    .then(res => res.json())
    .then(data => {
      setCartProducts(data)
    })
   .catch(err => {
   console.log(err.message)
   })
   .finally(() => {
      setLoading(false)
    })
  },[])

  const userEmail = localStorage.getItem('userEmail');

  const currentUser = user.find(usr => usr.email == userEmail);

  const cartItms = cartProducts.filter(cart=>cart.userEmail == userEmail)







  const authInfo = {
    user,
    loading,
    userEmail,
    currentUser,
    cartItms


  }
  return (
      <div>
          <AuthContext.Provider value={authInfo}>
              {children}
          </AuthContext.Provider>
      </div>
  );
};

export default AuthProvider;
