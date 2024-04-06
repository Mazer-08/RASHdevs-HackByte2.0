import React from 'react'
import { Button, Input,Image } from '@chakra-ui/react'
import { CheckIcon, ChevronLeftIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register06 = () => {

  const dispatch = useDispatch();
  // const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <>
      <div className="container">
          <div className="div">
            <ChevronLeftIcon onClick={()=>{dispatch(decrementRegisterStage());}}/>
            <p>Back</p>
          </div>
          <div className="brand flex gap-2">
              <Image src="" alt="logo" />
              <h1>ReferKaro</h1>
          </div>
          <div className="confirm">
            <div className="div">
              <p>6/6</p>
              <p>Upload your CV</p>
              <p>Educational Details</p>
            </div>
            <div className="input">
                <Input placeholder="Upload your CV link here" />
            </div>
            <div className="info">
              <div>
                <CheckIcon/> 
                <p>Formats include only PDF (.pdf)</p>
              </div>
              <div>
                <CheckIcon/> 
                <p>File size limit is upto 5 Megabytes (5 MB)</p>
              </div>
            </div>
          </div>
          <Button onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
      </div>
    </>
  )
}

export default Register06