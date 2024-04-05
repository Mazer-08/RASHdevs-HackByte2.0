import React from 'react'
import { Button } from '@chakra-ui/react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage } from '../../features/authSlice'

const Register02 = () => {

  const dispatch = useDispatch();
  const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <div>
      <h1>AT stage {registerStage}</h1>
      <Button onClick={()=>{dispatch(incrementRegisterStage())}}>Next</Button>
      <Button onClick={()=>{dispatch(decrementRegisterStage())}}>Prev</Button>
    </div>
  )
}

export default Register02