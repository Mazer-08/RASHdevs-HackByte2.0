import React from 'react'

// react-router-dom
import { useNavigate } from 'react-router-dom';

// imporing components
import SignupLogin from '../components/myComponents/SignupLogin'
import Register02 from '../components/myComponents/Register02'
import Register03 from '../components/myComponents/Register03'
import Register04 from '../components/myComponents/Register04'
import Register05 from '../components/myComponents/Register05'
import Register06 from '../components/myComponents/Register06'
import Register07 from '../components/myComponents/Register07'

// redux
import { useSelector } from 'react-redux'

const Signup = () => {

    const navigate = useNavigate();
    const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <>
      <div className='h-screen w-full flex justify-center items-center'>
          <SignupLogin/>
      </div>
    </>
  )
}

export default Signup