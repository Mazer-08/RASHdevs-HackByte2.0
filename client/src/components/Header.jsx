import React from 'react'

const Header = () => {
  return (
    <div className='p-4 m-4 sticky bg-[#7346F1] rounded-xl flex items-center justify-between'>
        <div className='font-bold text-white text-3xl px-2 font-sans'>
        ReferKaro
        </div>
        <div className='p-2 text-sm hover:bg-violet-600 px-4 rounded-xl hover:text-white text-violet-600 bg-white'>
            Log Out
        </div>
    </div>
  )
}

export default Header