import React from 'react'

//chakra imports
import { Button, Input, useToast } from '@chakra-ui/react'
import { ChevronLeftIcon, CheckIcon } from '@chakra-ui/icons'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { incrementRegisterStage, decrementRegisterStage, setName, setUsername, setDob } from '../../features/authSlice'

const Register02 = () => {

  //hooks
  const toast = useToast();
  //redux
  const dispatch = useDispatch();

  //variables
  const name = useSelector((state) => state.auth.name);
  const username = useSelector((state) => state.auth.username);
  const dob = useSelector((state) => state.auth.dob);

  //function
  const handleContinue = () => {
    if(name==="" || username==="" || dob===""){
      toast({
        title: 'Registration Failed',
        description: "Please fill all the fields",
        variant: 'subtle',
        status: 'error',
        duration: 4000,
        isClosable: true,
        w: '100px'
      })   
      return;
    }
    dispatch(incrementRegisterStage());
  }

  return (
    <div className="w-full h-full p-4 py-0 flex flex-col items-center justify-start">
      <div className="div self-start">
        <div
          onClick={() => {
            dispatch(decrementRegisterStage());
          }}
          className="div flex w-full items-center mb-2 gap-3 justify-start px-4"
        >
          <ChevronLeftIcon />
          <p>Back</p>
        </div>
      </div>
      <div className="brand flex gap-2">
        {/* <Image src="" alt="logo" /> */}
        <h1 className="text-4xl text-purple-700 font-bold font-sans">
          ReferKaro
        </h1>
      </div>
      <div className="confirm">
        <div className="div flex flex-col items-center justify-center">
          <p className="mt-10 text-sm text-slate-500">1/5</p>
          <p className="text-2xl mt-2">Fill your details</p>
          <p className="text-lg text-slate-400">Basic Details</p>
        </div>
        <div className="input mt-4">
          <label className="font-semibold" htmlFor="name">
            Name
          </label>
          <Input
            className="mt-2 mb-6"
            focusBorderColor="purple.400"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => {
              dispatch(setName(e.target.value));
            }}
          />
          <label className="font-semibold" htmlFor="username">
            Username
          </label>
          <Input
            className="mt-2 mb-6"
            focusBorderColor="purple.400"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e) => {
              dispatch(setUsername(e.target.value));
            }}
          />
        </div>
        <div className="info">
          <div className="flex gap-2 px-2">
            <CheckIcon />
            <p className="text-sm text-slate-800">
              Can contain letters (a-z), numbers (0-9) and periods (.)
            </p>
          </div>
          <div className="flex gap-2 px-2">
            <CheckIcon />
            <p className="text-sm text-slate-800">
              Cannot contain an ampersand (&), equals (=) sign.
            </p>
          </div>
        </div>
        <div className="div">
          <h1 className="font-semibold mt-6">DOB</h1>
          <Input
            className="mt-2"
            type="date"
            value={dob}
            onChange={(e) => {
              dispatch(setDob(e.target.value));
            }}
          />
        </div>
      </div>
      <Button
        bgColor={"purple.500"}
        className="mt-5"
        textColor={"white"}
        _hover={{ textColor: "purple.500", bgColor: "white" }}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}

export default Register02