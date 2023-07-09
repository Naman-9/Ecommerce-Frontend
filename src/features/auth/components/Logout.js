import React, { useEffect } from 'react'
import { selectLoggedInUser, signOutAsync } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Logout = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);

    useEffect((userId) => {
        dispatch(signOutAsync(userId));
    })
  return (
    <>
    {!user && < Navigate to="/" replace= {true} ></Navigate>}
    </>

  )
}

export default Logout