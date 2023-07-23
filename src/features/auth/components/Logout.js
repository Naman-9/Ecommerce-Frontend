import React, { useEffect } from 'react'
import { selectLoggedInUser, signOutAsync } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    console.log("Rendering Logout component");
    dispatch(signOutAsync());
  });

  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
}

export default Logout