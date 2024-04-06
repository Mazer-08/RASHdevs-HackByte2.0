import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {

    const loggedIn = useSelector((state) => state.auth.loggedIn);

    let token = localStorage.getItem('token');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            token = localStorage.getItem('token');
            console.log('User Logged in');
        }
    }, [loggedIn])

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();   
    }

  return (
    <div className='p-4 m-4 sticky bg-[#7346F1] rounded-xl flex items-center justify-between'>
        <div className='font-bold text-white text-3xl px-2 font-sans'>
        ReferKaro
        </div>
        {token && <div onClick={handleLogout} className="p-2 cursor-pointer text-sm hover:bg-violet-600 px-4 rounded-xl hover:text-white text-violet-600 bg-white">
            Log Out
        </div>}
    </div>
  )
}

export default Header