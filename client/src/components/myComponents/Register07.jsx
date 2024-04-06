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
        <div className="container w-full h-full p-4 py-0 flex flex-col items-center justify-start">
            <div className="brand flex gap-2">
                {/* <Image src="" alt="logo" /> */}
                <h1 className='text-4xl text-purple-700 font-bold font-sans'>ReferKaro</h1>
            </div>
            <div className="confirm w-full flex flex-col items-center justify-center">
                {/* <Image src='' alt='confirm' /> */}
                <div className="msg flex items-center justify-center flex-col mt-4 mb-4">
                    <h1>Account created successfully!</h1>
                    <p>Welcome aboard! Start your success journey with</p>
                    <p>ReferKaro!</p>
                </div>
            </div>
            <Button bgColor={'purple.500'} className='mt-5' textColor={'white'} _hover={{textColor:'purple.500', bgColor:'white'}}onClick={()=>{dispatch(incrementRegisterStage())}}>Let's Start</Button>
        </div>
    </>
  )
}

export default Register07