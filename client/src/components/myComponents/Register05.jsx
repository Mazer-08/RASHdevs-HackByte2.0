import React from 'react'
import { Button, Input,Image } from '@chakra-ui/react'
import { CheckIcon, ChevronLeftIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register05 = () => {

  const dispatch = useDispatch();
//   const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <>
      <div className="container" >
          <div className="div">
            <ChevronLeftIcon onClick={()=>{dispatch(decrementRegisterStage())}}/>
            <p>Back</p>
          </div>
          <div className="brand flex gap-2">
              <Image src="" alt="logo" />
              <h1>ReferKaro</h1>
          </div>
          <div className="confirm">
            <div className="div">
              <p>5/6</p>
              <p>Fill your details</p>
              <p>Educational Details</p>
            </div>
            <div className="input">
                <Input placeholder="LinkedIn Link" />
                <Input placeholder="Github Link" />
            </div>
          </div>
          <Button onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
      </div>
    </>
  )
}

export default Register05