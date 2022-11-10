import React from 'react'
import useRedirectLogout from '../../customHook/useRedirectLogout'

const Profile = () => {
    useRedirectLogout('/login')
  return (
    <div>Profile</div>
  )
}

export default Profile