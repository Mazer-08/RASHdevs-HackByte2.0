import React from 'react'

// react-router-dom
import { useNavigate } from 'react-router-dom';

// imporing components
import SignupLogin from '../components/myComponents/SignupLogin'
import Register01 from '../components/myComponents/Register01'
import Register02 from '../components/myComponents/Register02'
import Register03 from '../components/myComponents/Register03'
import Register04 from '../components/myComponents/Register04'
import Register05 from '../components/myComponents/Register05'
import Register06 from '../components/myComponents/Register06'
import Register07 from '../components/myComponents/Register07'

// redux
import { incrementRegisterStage, decrementRegisterStage } from '../features/authSlice';
import { useSelector, useDispatch } from 'react-redux'

const Signup = () => {

    const navigate = useNavigate();
    const registerStage = useSelector((state) => state.auth.registerStage);
    // const login = useSelector((state) => state.auth.login);

    const dispatch = useDispatch();

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        {(registerStage === 0) ? <SignupLogin/> :
         (registerStage === 1) ? <Register01/> :
         (registerStage === 2) ? <Register02/> :
         (registerStage === 3) ? <Register03/> :
         (registerStage === 4) ? <Register04/> :
         (registerStage === 5) ? <Register05/> :
         (registerStage === 6) ? <Register06/> :
         (registerStage === 7) ? <Register07/> :
         navigate('/') }
    </div>
  )
}

export default Signup