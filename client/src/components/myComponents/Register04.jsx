import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage, setClgName, setPassingYear, setDomain, setWorkExp } from '../../features/authSlice'

const Register04 = () => {

  const dispatch = useDispatch();
  const registerStage = useSelector((state) => state.auth.registerStage);
  const clgName = useSelector((state) => state.auth.setClgName);
  const passingYear = useSelector((state) => state.auth.passingYear);
  const domain = useSelector((state) => state.auth.domain);
  const workExp = useSelector((state)=>{state.auth.workExp})

  return (
    <div className='w-full h-full p-4 py-0 flex flex-col items-center justify-start'>
          <div onClick={()=>{dispatch(decrementRegisterStage())}} className='div flex w-full items-center mb-2 gap-3 justify-start px-4'>
            <ChevronLeftIcon />
            <p>Back</p>
          </div>
          <div className="brand flex gap-2">
              {/* <Image src="" alt="logo" /> */}
              <h1 className='text-4xl text-purple-700 font-bold font-sans'>ReferKaro</h1>
          </div>
          <div className="confirm w-full flex flex-col items-center justify-center">
            <div className="div flex items-center justify-center flex-col">
            <p className='mt-10 text-sm text-slate-500'>4/6</p>
          <p className='text-2xl mt-2'>Fill your details</p>
          <p className='text-lg text-slate-400'>Educational Details</p>
            </div>
            <div className="input mt-4 flex flex-col items-center justify-center gap-2 w-3/5 mb-4">
                <Input placeholder="Enter your college name" value={clgName} onChange={(e)=>dispatch(setClgName(e.target.value))} />
                <Input placeholder="Enter your passing year" value={passingYear} onChange={(e)=>dispatch(setPassingYear(e.target.value))}/>
                <Input placeholder="Area of interest" value={domain} onChange={(e)=>dispatch(setDomain(e.target.value))}/>
                <Input placeholder="Enter work experience in years" value={workExp} onChange={(e)=>dispatch(setWorkExp(e.target.value))}/>
            </div>
          </div>
          <Button bgColor={'purple.500'} className='mt-5' textColor={'white'} _hover={{textColor:'purple.500', bgColor:'white'}}onClick={()=>{dispatch(incrementRegisterStage())}}>Continue</Button>
      </div>
  )
}

export default Register04