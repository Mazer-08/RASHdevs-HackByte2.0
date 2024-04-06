import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Input, Tabs, TabList, TabPanels, Tab, TabPanel, Button,Radio, RadioGroup } from '@chakra-ui/react'
import '../../index.css'
import axios from 'axios';

// redux
import { setKey, setEmail, setPassword, setRole, setName, setUsername, setDob, setAbout, setClgName, setPassingYear, setDomain, setWorkExp, setLinkedIn, setGithub, setCvLink, incrementRegisterStage } from '../../features/authSlice';
import { useSelector, useDispatch } from 'react-redux'

const SignupLogin = () => {
    const navigate = useNavigate();
    //redux
    const dispatch = useDispatch();

    //variables
    const email = useSelector((state) => state.auth.email);
    const password = useSelector((state) => state.auth.password);
    const key = useSelector((state) => state.auth.key);

    //functions
    const handleLogIn = async() => {
        try {
            const loginData = {
                email: email,
                password: password,
            }
            const res = await axios.post('http://localhost:3000/auth/requester/login', loginData);
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignUp = () => {
        dispatch(incrementRegisterStage())
    }


  return (
    <>
      <div className="container flex h-screen w-full items-center justify-around">
        <div className="Signup left h-5/6 w-1/2 overflow-hidden rounded-xl flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center p-8">
            <p className="text-white font-bold text-3xl font-sans">
              Welcome to JobBridge
            </p>
            <p className="text-white font-sans text-sm mt-1">
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
              <h1 className='font-bold text-lg'>ReferKaro</h1>
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
            <TabPanels>
              <TabPanel>
                <>
                  <div className="submit mt-2">
                  <div className="input">
            <RadioGroup className='flex items-center justify-center gap-16 mt-2 mb-6'>
                <Radio size='lg' colorScheme='purple' name='role' value='user' onChange={()=>{dispatch(setRole("User"))}}>User</Radio>
                <Radio size='lg' colorScheme='purple' name='role' value='provider' onChange={()=>{dispatch(setRole("Provider"))}}>Provider</Radio>
            </RadioGroup>
        </div>
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
                      onClick={() => {handleSignUp()}}
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