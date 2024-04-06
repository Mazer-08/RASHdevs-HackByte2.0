import React from 'react'
import { Input, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'
import '../../index.css'

// redux
import { setKey, incrementRegisterStage } from '../../features/authSlice';
import { useSelector, useDispatch } from 'react-redux'

const SignupLogin = () => {

    const key = useSelector((state) => state.auth.key);
    const dispatch = useDispatch();

  return (
    <>
        <div className="container flex h-screen w-full items-center justify-evenly">
            <div className="Signup left h-5/6 w-1/3 overflow-hidden rounded-xl">
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-white font-bold text-3xl font-sans'>Welcome to JobBridge</div>
                    <p className='text-white font-sans text-sm -mt-1'>Your Gateway to Dream Job.</p>
                </div>
                <div>

                </div>
            </div>
            <div className="right w-1/3">
            <Tabs>
                <TabList className='flex items-center justify-center gap-4 p-2 bg-[#E8E0FF] rounded-xl w-full'>
                    <Tab _selected={{ color: 'white', bg: 'purple.500' }} className='rounded-lg w-1/2'>Login</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.500' }} className='rounded-lg w-1/2'>Register</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <>
                            <div className="email mt-4">
                                <p className='mb-2'>Email Id</p>
                                <Input
                                    mb={2}
                                    p={4}
                                    fontSize="0.75em"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="pw mt-4">
                                <p className='mb-2'>Password</p>
                                <Input
                                    mb={2}
                                    p={4}
                                    fontSize="0.75em"
                                    type="text"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <div className="pw-guidelines"></div>
                            <div className="submit mt-8">
                            <Button className='w-full p-2 h-auto' colorScheme='purple' size='md' onClick={()=>{dispatch(incrementRegisterStage())}}>
                                Create Account
                            </Button>
                            </div>
                        </>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </div>
        </div>
    </>
  )
}

export default SignupLogin