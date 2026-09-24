import React, { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
   const [loggedInUser, setLoginInfoUser] = useState('');
   const navigate = useNavigate();
   useEffect(() => {
    setLoginInfoUser(localStorage.getItem('loggedInUser'))
   }, [])

   const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout')
    setTimeout(() => {
      navigate('/login');
    }, 1000)
   }

   const fetchProducts = async () => {
    try {
      const url = "http://localhost:8000/products"
      const response = await fectch(url);
      cons
    } catch (err) {
      handleError(err)
    }
   }
             
   useEffect(() => {
    fetchProducts()
   },[])

  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>

      <ToastContainer/>
    </div>
  )
}

export default Home
