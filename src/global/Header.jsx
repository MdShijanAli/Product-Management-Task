import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { currentUser, cartItems } = useContext(AuthContext);

  console.log('cart items', cartItems)
  console.log(currentUser)

  const handleLogout = () => {
    localStorage.removeItem('userEmail')
    window.location.href = "/"
  }
  return (
    <div>
      
      


      <nav id="mainNavbar" className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700shadow-md z-[99] w-full">
  <div className="max-w-7xl mx-auto px-6 flex  items-center justify-between ">
    <div className="flex items-center justify-between w-full py-2">
      <div className="lg:w-[180px] sm:w-[100px] w-[80px]">
        <Link to="/" className="flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg" className="h-full w-full mr-3" alt="Logo" />
        </Link>
      </div>

      <div className="hidden lg:flex w-full justify-end" id="navbar-sticky">
        <ul
          className="flex lg:gap-8 lg:items-center flex-col lg:flex-row md:mt-0 p-4 md:p-0 mt-4 font-semibold text-black border border-gray-100 rounded-lg md:border-0">
               <li>
          <Link to="/" className="px-3 hover:text-primary rounded ">Products</Link>
        </li>
        <li>
                <Link to='/cart'>
                <button type="button" className="relative inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" w-5 h-5 hover:text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span className="sr-only">Counter</span>
                  <div className="absolute inline-flex items-center justify-center size-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cartItems.length}</div>
          </button>
                </Link>
        </li>
              {
                currentUser ?  
                <li>
                <p onClick={handleLogout}  className=" px-3 flex items-center gap-2 hover:text-primary rounded cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                  Logout</p>
               </li>
                : <li>
                <Link to="/login" className=" px-3 flex items-center gap-2 hover:text-primary rounded ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

                  Login</Link>
        </li>
      }

        </ul>
      </div>
    </div>


    <div className="drawer justify-end lg:hidden flex z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg"
          type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation">
          <label htmlFor="my-drawer" className="drawer-button">
            <svg className="sm:w-8 w-6 h-6 sm:h-8 fill-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </label>
        </button>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="w-[150px] mx-auto">
            <Link to="/" className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg" className="h-full w-full mr-3" alt="Logo" />
            </Link>
          </div>
          <div className="border-b my-3"></div>
          <li>
          <Link to="/" className="px-3 hover:text-primary rounded ">Products</Link>
        </li>
        <li>
                <Link to='/cart'>
                <button type="button" className="relative inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" w-5 h-5 hover:text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span className="sr-only">Counter</span>
                  <div className="absolute inline-flex items-center justify-center size-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cartItems.length}</div>
          </button>
                </Link>
        </li>
              {
                currentUser ?  
                <li>
                <p onClick={handleLogout}  className=" px-3 flex items-center gap-2 hover:text-primary rounded cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                  Logout</p>
               </li>
                : <li>
                <Link to="/login" className=" px-3 flex items-center gap-2 hover:text-primary rounded ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

                  Login</Link>
        </li>
      }


  

        </ul>
      </div>
    </div>

  </div>
</nav>

   </div>
  );
};

export default Header;