import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import useRedirectLogout from '../../customHook/useRedirectLogout'
import { SAVE_USER, SET_NAME } from '../../redux/features/auth/authSlice'
import { getUserProfile } from '../../services/authService'

const Profile = () => {
    const[profile , setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setIsLoading(true)
        async function getUser(){
            const data = await getUserProfile()
            console.log(data)
        
        setProfile(data)
        setIsLoading(false)
        await dispatch(SAVE_USER(data))
        await dispatch(SET_NAME(data.name))
        }
        getUser()
    }, [dispatch])
    
  return (
    <Layout>
    <div>Profile</div>
    </Layout>
  )
}

export default Profile