import React from 'react'
import '../../index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//chakra imports
import { Input, Tabs, TabList, TabPanels, Tab, TabPanel, Button,Radio, RadioGroup, useToast } from '@chakra-ui/react'

// redux
import { setEmail, setPassword, setRole, incrementRegisterStage, setLoggedIn } from '../../features/authSlice';
import { useSelector, useDispatch } from 'react-redux'

const SignupLogin = () => {

    //hooks
    const navigate = useNavigate();
    const toast = useToast();
    //redux
    const dispatch = useDispatch();

    //variables
    const email = useSelector((state) => state.auth.email);
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const password = useSelector((state) => state.auth.password);
    const role = useSelector((state) => state.auth.role);

    //functions
    const handleLogIn = async() => {
        if(email==="" || password===""){
            toast({
                title: 'Login Failed',
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
            const loginData = {
                email: email,
                password: password,
            }
            if(role==="requester"){
                const res = await axios.post('http://localhost:3000/auth/requester/login', loginData);
                //console.log(res.data.token);
                localStorage.setItem('token', res.data.token);
                console.log("before setLoggedIn");
                dispatch(setLoggedIn(loggedIn));
                console.log("after setLoggedIn");
                navigate('/');
            }
            else if(role==="provider"){
                const res = await axios.post('http://localhost:3000/auth/provider/login', loginData);
                localStorage.setItem('token', res.data.token);
                console.log("before setLoggedIn");
                dispatch(setLoggedIn(loggedIn));
                console.log("after setLoggedIn");
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast({
                title: 'Login Failed',
                description: `${error.response.statusText}`,
                variant: 'subtle',
                status: 'error',
                duration: 4000,
                isClosable: true,
                w: '100px'
              }) 
        }
    }

    const handleSignUp = async() => {
        if(email==="" || password==="" || role===""){
            toast({
                title: 'Login Failed',
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
            const registerData = {
                email: email,   
                password: password,
            }
            if(role==="requester"){
                const res = await axios.post('http://localhost:3000/auth/requester/register', registerData);
                //console.log(res.data.token);
                localStorage.setItem('token', res.data.token);
                navigate('/requester-update');
                dispatch(incrementRegisterStage());
            }
            else if(role==="provider"){
                const res = await axios.post('http://localhost:3000/auth/provider/register', registerData);
                localStorage.setItem('token', res.data.token);
                navigate('/provider-update');
                dispatch(incrementRegisterStage());
            }
        } 
        catch (error) {
            console.log(error);
            toast({
                title: 'Login Failed',
                description: `${error.response.statusText}`,
                variant: 'subtle',
                status: 'error',
                duration: 4000,
                isClosable: true,
                w: '100px'
              }) 
        }
    }


  return (
    <>
      <div className="container flex h-screen w-full items-center justify-around">
        <div className="Signup left h-5/6 w-1/2 overflow-hidden rounded-xl flex flex-col justify-between">
          <div className="flex flex-col p-8">
            <p className="text-white font-bold text-3xl font-sans">
              Welcome to JobBridge
            </p>
            <p className="text-white font-sans text-sm mt-2">
              Your Gateway to Dream Job.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between p-8 mb-16">
            <p className="text-white font-bold text-3xl font-sans">
              Seamless Connection
            </p>
            <p className="text-white font-sans text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="right w-1/3">
          <div className="brand flex gap-2 mb-4">
            {/*<img src="../" alt="logo" />*/}
            <h1 className="font-bold text-lg">ReferKaro</h1>
          </div>
          <Tabs>
            <TabList className="flex items-center justify-center gap-4 p-2 bg-[#E8E0FF] rounded-xl w-full">
              <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-1/2"
              >
                Login
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-1/2"
              >
                Register
              </Tab>
            </TabList>
            <div className="email mt-4">
              <p className="mb-2">Email Id</p>
              <Input
                mb={2}
                p={4}
                fontSize="0.75em"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div className="pw mt-4">
              <p className="mb-2">Password</p>
              <Input
                mb={2}
                p={4}
                fontSize="0.75em"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
            <RadioGroup className="flex items-center justify-center gap-16 mt-2 mb-6">
              <Radio
                size="lg"
                colorScheme="purple"
                name="role"
                value="requester"
                onChange={() => {
                  dispatch(setRole("requester"));
                }}
              >
                Requester
              </Radio>
              <Radio
                size="lg"
                colorScheme="purple"
                name="role"
                value="provider"
                onChange={() => {
                  dispatch(setRole("provider"));
                }}
              >
                Provider
              </Radio>
            </RadioGroup>
            <TabPanels>
              <TabPanel>
                <>
                  <div className="submit mt-2">
                    <div className="input"></div>
                    <Button
                      className="w-full p-2 h-auto"
                      colorScheme="purple"
                      size="md"
                      onClick={handleLogIn}
                    >
                      Login
                    </Button>
                  </div>
                </>
              </TabPanel>
              <TabPanel>
                <>
                  <div className="submit mt-8">
                    <Button
                      className="w-full p-2 h-auto"
                      colorScheme="purple"
                      size="md"
                      onClick={() => {
                        handleSignUp();
                      }}
                    >
                      SignUp
                    </Button>
                  </div>
                </>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default SignupLogin