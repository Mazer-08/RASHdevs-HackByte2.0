import React from 'react'
import axios from 'axios'
import { Button, Input,Image } from '@chakra-ui/react'
import { CheckIcon, ChevronLeftIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage, setCvLink } from '../../features/authSlice'

const Register06 = () => {

  const dispatch = useDispatch();
  // const registerStage = useSelector((state) => state.auth.registerStage);
  const cvLink = useSelector((state) => state.auth.setCvLink);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const registerData = {
    email: email,
    password: password,
    //role: "",
    //name: "",
    //username: "",
    //dob: "",
    //about: "",
    //clgName: "",
    //passingYear: "",
    //domain: "",
    //workExp: "",
    //linkedIn: "",
    //github: "",
    //cvLink: "",
  }
  
  const handleRegister = async() => {
    try {
      const res = await axios.post('http://localhost:3000/auth/requester/register', registerData);
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token);
      dispatch(incrementRegisterStage());
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <div className="container w-full h-full p-4 py-0 flex flex-col items-center justify-start">
        <div onClick={()=>{dispatch(decrementRegisterStage());}} className='div flex w-full items-center mb-2 gap-3 justify-start px-4'>
          <ChevronLeftIcon />
          <p>Back</p>
        </div>
          <div className="brand flex gap-2">
              {/* <Image src="" alt="logo" /> */}
              <h1 className='text-4xl text-purple-700 font-bold font-sans'>ReferKaro</h1>
          </div>
          <div className="confirm w-full flex flex-col items-center justify-center">
            <div className="div flex items-center justify-center flex-col">
              <p className='mt-10 text-sm text-slate-500'>6/6</p>
              <p className='text-2xl mt-2'>Upload your CV</p>
              <p className='text-lg text-slate-400'>Educational Details</p>
            </div>
            <div className="input mt-4 flex flex-col items-center justify-center gap-2 w-2/5 mb-4">
                <Input placeholder="Upload your CV link here" value={cvLink} onChange={(e)=>{dispatch(setCvLink(e.target.value))}}/>
            </div>
            <div className="info mb-4">
              <div className='flex gap-2 px-2'>
                <CheckIcon/> 
                <p className='text-sm text-slate-800'>Formats include only PDF (.pdf)</p>
              </div>
              <div className='flex gap-2 px-2'>
                <CheckIcon/> 
                <p className='text-sm text-slate-800'>File size limit is upto 5 Megabytes (5 MB)</p>
              </div>
            </div>
          </div>
          <Button bgColor={'purple.500'} className='mt-5' textColor={'white'} _hover={{textColor:'purple.500', bgColor:'white'}} onClick={()=>{handleRegister()}}>Register</Button>
      </div>
    </>
  )
}

export default Register06