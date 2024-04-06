import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-4 m-4 sticky bg-[#7346F1] rounded-xl flex items-center justify-between'>
        <div className='font-bold text-white text-3xl px-2 font-sans'>
        ReferKaro
        </div>
        <div className='flex text-white'>
            <div>
                Home / 
            </div>
            <div>
                Sign Up /
            </div>
            <div>
                Contact
            </div>
        </div>
    </div>
    // <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/signup">Signup</Link>
    //     <Link to="/about">About</Link>
    // </nav>
  )
}

export default Header