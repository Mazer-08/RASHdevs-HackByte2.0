import React from 'react'
import axios from 'axios'

//chakra imports
import { Button, Input, useToast } from '@chakra-ui/react'
import { CheckIcon, ChevronLeftIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage, setCvLink } from '../../features/authSlice'

const Register06 = () => {
  
  //hooks
  const toast = useToast();
  //redux
  const dispatch = useDispatch();
  //redux variables
  const name = useSelector((state) => state.auth.name);
  const username = useSelector((state) => state.auth.username);
  const clgName = useSelector((state) => state.auth.clgName);
  const dob = useSelector((state) => state.auth.dob);
  const about = useSelector((state) => state.auth.about);
  const passingYear = useSelector((state) => state.auth.passingYear);
  const domain = useSelector((state) => state.auth.domain);
  const workExp = useSelector((state) => state.auth.workExp);
  const linkedIn = useSelector((state) => state.auth.linkedIn);
  const github = useSelector((state) => state.auth.github);
  const cvLink = useSelector((state) => state.auth.setCvLink);
  const role = useSelector((state) => state.auth.role);
  //handle register function
  const handleRegister = async() => {
    if(cvLink===""){
      toast({
        title: 'Registration failed',
        description: "Please fill all the fields",
        variant: 'subtle',
        status: 'error',
        duration: 4000,
        isClosable: true,
        w: '100px'
      })  
      return;
    }
    try {
      //register data
      const registerData = {
        "name": name,
        "username": username,
        "clgName": clgName,
        "dob": dob,
        "about": about,
        "passingYear": passingYear,
        "domain": domain,
        "workExp": workExp,
        "linkedIn": linkedIn,
        "github": github,
        "cvLink": cvLink,
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      }

      console.log(config);
      console.log(registerData);

      //registering
      if(role==="requester"){
        const res = await axios.patch('http://localhost:3000/auth/requester/update', registerData, config);
        console.log("requester", res.data.message);
        dispatch(incrementRegisterStage());
      }
      else if(role==="provider"){
        const res = await axios.patch('http://localhost:3000/auth/provider/update', registerData, config);
        console.log("provider", res.data.message);
        dispatch(incrementRegisterStage());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <div className="container w-full h-full p-4 py-0 flex flex-col items-center justify-start">
        <div
          onClick={() => {
            dispatch(decrementRegisterStage());
          }}
          className="div flex w-full items-center mb-2 gap-3 justify-start px-4"
        >
          <ChevronLeftIcon />
          <p>Back</p>
        </div>
        <div className="brand flex gap-2">
          {/* <Image src="" alt="logo" /> */}
          <h1 className="text-4xl text-purple-700 font-bold font-sans">
            ReferKaro
          </h1>
        </div>
        <div className="confirm w-full flex flex-col items-center justify-center">
          <div className="div flex items-center justify-center flex-col">
            <p className="mt-10 text-sm text-slate-500">5/5</p>
            <p className="text-2xl mt-2">Upload your CV</p>
            <p className="text-lg text-slate-400">Educational Details</p>
          </div>
          <div className="input mt-4 flex flex-col items-center justify-center gap-2 w-2/5 mb-4">
            <Input
              placeholder="Upload your CV link here"
              value={cvLink}
              onChange={(e) => {
                dispatch(setCvLink(e.target.value));
              }}
            />
          </div>
          <div className="info mb-4">
            <div className="flex gap-2 px-2">
              <CheckIcon />
              <p className="text-sm text-slate-800">
                Formats include only PDF (.pdf)
              </p>
            </div>
            <div className="flex gap-2 px-2">
              <CheckIcon />
              <p className="text-sm text-slate-800">
                File size limit is upto 5 Megabytes (5 MB)
              </p>
            </div>
          </div>
        </div>
        <Button
          bgColor={"purple.500"}
          className="mt-5"
          textColor={"white"}
          _hover={{ textColor: "purple.500", bgColor: "white" }}
          onClick={() => {
            handleRegister();
          }}
        >
          Register
        </Button>
      </div>
    </>
  );
}

export default Register06