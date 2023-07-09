import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../authSlice'
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
  

  return children;
}

export default Protected;