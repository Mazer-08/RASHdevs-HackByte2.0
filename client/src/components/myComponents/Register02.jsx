import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register02 = () => {

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
              <p>2/6</p>
              <p>Fill your details</p>
              <p>Basic Details</p>
            </div>
            <div className="input">
              <Input placeholder='Enter your name' />
              <Input placeholder='Enter your username' />
            </div>
            <div className="info">
              <div>
                <CheckIcon/> 
                <p>Can contain letters (a-z), numbers (0-9) and periods (.)</p>
              </div>
              <div>
                <CheckIcon/> 
                <p>Cannot contain an ampersand (&), equals (=) sign.</p>
              </div>
            </div>
            <div className="div">
              <h1>DOB</h1>
              <Input type='date' placeholder='Enter your username' />
            </div>
          </div>
          <Button onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
    </div>
  )
}

export default Register02