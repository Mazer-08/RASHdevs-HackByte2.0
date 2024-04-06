import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


// redux
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './features/testSlice'
import ListCard from './components/ListCard'
import UserSideBar from './components/UserSideBar'

function App() {
  const toast = useToast();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const value = useSelector((state) => state.test.value);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast({
        title: "Login to continue",
        variant: "subtle",
        status: "info",
        duration: 4000,
        isClosable: true,
        w: "100px",
        });
      navigate("/signup");
    }
}, []);

  return (
    <div className='w-full h-full flex gap-6'>
      <ListCard/>
      <UserSideBar/>
    </div>
  )
}

export default App
