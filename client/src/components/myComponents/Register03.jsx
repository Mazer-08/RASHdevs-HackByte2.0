import React from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register03 = () => {

  const dispatch = useDispatch();
  const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <div>
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
              <p>3/6</p>
              <p>Fill your details</p>
              <p>Basic Details</p>
            </div>
            <div className="input">
              <Textarea placeholder='Tell us about yourself' />
            </div>
            <p>About 120-150 words</p>
          </div>
          <Button onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
    </div>
  )
}

export default Register03