import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Image, Img } from '@chakra-ui/react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register07 = () => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <>
        <div className="container">
            <div className="brand flex gap-2">
                <Image src="" alt="logo" />
                <h1>ReferKaro</h1>
            </div>
            <div className="confirm">
                <Image src='' alt='confirm' />
                <div className="msg">
                    <h1>Account created successfully!</h1>
                    <p>Welcome aboard! Start your success journey with</p>
                    <p>ReferKaro!</p>
                </div>
            </div>
            <Button onClick={()=>{navigate('/')}}>Let's Start</Button>
        </div>
    </>
  )
}

export default Register07