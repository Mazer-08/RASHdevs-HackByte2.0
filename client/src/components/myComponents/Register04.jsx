import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register04 = () => {

  const dispatch = useDispatch();
  const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <div className="container">
          <div className="div">
            <ChevronLeftIcon onClick={()=>{dispatch(decrementRegisterStage());}}/>
            <p>Back</p>
          </div>
          <div className="brand flex gap-2">
              {/* <Image src="" alt="logo" /> */}
              <h1>ReferKaro</h1>
          </div>
          <div className="confirm">
            <div className="div">
              <p>4/6</p>
              <p>Fill your details</p>
              <p>Educational Details</p>
            </div>
            <div className="input">
                <Input placeholder="Enter your college name" />
                <Input placeholder="Enter your passing year" />
                <Input placeholder="Area of interest" />
                <Input placeholder="Enter work experience in years" />
            </div>
          </div>
          <Button onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
      </div>
  )
}

export default Register04