import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [users, setUser] = useState([])

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


  const usrEmail = localStorage.getItem('userEmail');

  const currentUser = users.find(usr => usr.email == usrEmail);

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];






  const authInfo = {
    users,
    loading,
    usrEmail,
    currentUser,
    cartItems,


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
