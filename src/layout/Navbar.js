import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox, IoLogoGoogle } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        const email = user.email;
        console.log(email);
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errormsg = error.message;
        let errorSplit = errormsg.split(' ')
        let errorMessage = errorSplit[errorSplit.length - 1];
        toast.error(errorMessage);
        console.log(error);
      })
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <nav className='h-14 bg-slate-700 rounded m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-white'>
        <h1 className='flex-1'>Bob Shop</h1>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>

        {
          user?.uid ?
            <>
              <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
                <Link to='/cart'>
                  <BsFillCartFill className='text-white ' />
                </Link>
              </li>
              <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
                <Link to='/'>
                  <IoIosListBox className='text-white' />
                </Link>
              </li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
            :
            <>
              <li className="bg-slate-200 text-black px-3 py-1 rounded-lg"><button onClick={handleGoogleSignIn} className="flex items-center"><IoLogoGoogle className="text-red-500" /> Login</button></li>
            </>
        }

      </ul>
    </nav>
  );
};

export default Navbar;
