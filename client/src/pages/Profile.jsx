import React from 'react'
import Header from '../components/Header'
import User from '../components/User'
import About from '../components/About'
import { useSelector } from 'react-redux'
import Sigin from '../components/Modals/Sigin'

const Profile = () => {
    const user = useSelector(state => state.auth.user)
  return (
    <div>
    {JSON.stringify(user.user) === '{}' &&
        <Sigin />}
    
    <User />
    <About /></div>
  )
}

export default Profile