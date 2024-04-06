import React from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage, setAbout } from '../../features/authSlice'

const Register03 = () => {

  const dispatch = useDispatch();
  const registerStage = useSelector((state) => state.auth.registerStage);
  const about = useSelector((state) => state.auth.about);

  return (
    <div className='w-full h-full p-4 py-0 flex flex-col items-center justify-start'>
      <div onClick={()=>{dispatch(decrementRegisterStage());}} className='div flex w-full items-center mb-2 gap-3 justify-start px-4'>
        <ChevronLeftIcon />
        <p>Back</p>
      </div>
      <div className="brand flex gap-2">
          {/* <Image src="" alt="logo" /> */}
          <h1 className='text-4xl text-purple-700 font-bold font-sans'>ReferKaro</h1>
      </div>
      <div className="confirm">
        <div className="div flex items-center justify-center flex-col">
          <p className='mt-10 text-sm text-slate-500'>3/6</p>
          <p className='text-2xl mt-2'>Fill your details</p>
          <p className='text-lg text-slate-400'>Basic Details</p>
        </div>
        <div className="input mt-4">
          <Textarea placeholder='Tell us about yourself' onChange={(e)=>{dispatch(setAbout(e.target.value))}}/>
        </div>
        <p className='text-xs text-slate-500 mb-4'>About 120-150 words</p>
      </div>
      <Button bgColor={'purple.500'} className='mt-5' textColor={'white'} _hover={{textColor:'purple.500', bgColor:'white'}}onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
    </div>
  )
}

export default Register03