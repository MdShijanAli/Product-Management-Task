import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      

<nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl px-6 flex flex-wrap items-center justify-between mx-auto">
    <Link href="#" className="flex items-center space-x-3 h-20 w-auto rtl:space-x-reverse">
        <img className='size-full' src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg" className="h-8" alt="Flowbite Logo" />
    </Link>

    <div className="">
      <ul className="flex items-center gap-3 font-medium rounded-lg bg-gray-50 ">
        <li>
          <Link href="#" className="px-3  rounded ">Products</Link>
        </li>
        <li>
                <Link href="#" className=" px-3  rounded ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>

          </Link>
        </li>
        <li>
                <Link href="#" className=" px-3 flex items-center gap-2  rounded ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

                  Login</Link>
        </li>
   
      </ul>
    </div>
  </div>
</nav>

   </div>
  );
};

export default Header;