import React from 'react'
import { Button, Input, Radio, RadioGroup } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage, setRole } from '../../features/authSlice'

const Register01 = () => {

  //redux
  const dispatch = useDispatch();

  //variables
  const role = useSelector((state) => state.auth.role);
  const key = useSelector((state) => state.auth.key);
  const registerStage = useSelector((state) => state.auth.registerStage);

  return (
    <div className='flex flex-col h-screen w-full items-center'>
      <div onClick={()=>{dispatch(decrementRegisterStage());}} className="div flex w-full items-center mb-2 gap-3 justify-start px-8">
        <ChevronLeftIcon />
        <p>Back</p>
      </div>
      <div className="brand flex">
          {/* <Image src="" alt="logo" /> */}
          <h1 className='text-4xl text-purple-700 font-bold font-sans'>ReferKaro</h1>
      </div>
      <div className="confirm mt-8">
        <div className="div flex flex-col items-center">
          <p className='text-sm text-slate-500'>1/6</p>
          <p className='text-2xl mt-2'>Choose your Profile</p>
          <p className='text-lg text-slate-400'>Setup your Profile</p>
          <div className='border-4 border-purple-500 rounded-full h-36 w-36 mt-5 flex items-center justify-center'>
            <InfoOutlineIcon color='purple.500' boxSize={9}/>
          </div>
        </div>

        <div className="input">
          <RadioGroup className='flex items-center justify-center gap-16 mt-16'>
          <Radio size='lg' colorScheme='purple' name='role' value='user' onChange={()=>{dispatch(setRole("user"))}}>User</Radio>
          <Radio size='lg' colorScheme='purple' name='role' value='provider' onChange={()=>{dispatch(setRole("provider"))}}>Provider</Radio>
          </RadioGroup>
        </div>
      </div>
      <Button bgColor={'purple.500'} className='mt-5' textColor={'white'} _hover={{textColor:'purple.500', bgColor:'white'}}onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
    </div>
  )
}

export default Register01