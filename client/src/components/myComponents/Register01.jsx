import React from 'react'
import { Button, Input, Radio, RadioGroup } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register01 = () => {

  const dispatch = useDispatch();
  const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <div className='flex flex-col h-screen w-full items-center'>
      <div className="div flex w-full items-center mb-2">
        <ChevronLeftIcon onClick={()=>{dispatch(decrementRegisterStage());}}/>
        <p>Back</p>
      </div>
      <div className="brand flex">
          {/* <Image src="" alt="logo" /> */}
          <h1>ReferKaro</h1>
      </div>
      <div className="confirm mt-8">
        <div className="div flex flex-col items-center">
          <p className='text-xs'>1/6</p>
          <p className='text-xl mt-2'>Choose your Profile</p>
          <p className=''>Setup your Profile</p>
        </div>

        <div className="input flex items-center justify-center gap-16 mt-16">
          <Radio value='user'>User</Radio>
          <Radio value='provider'>Provider</Radio>
        </div>
      </div>
      <Button onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
    </div>
  )
}

export default Register01