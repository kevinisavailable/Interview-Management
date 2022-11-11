import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { SET_LOGIN} from '../redux/features/auth/authSlice'
import {getLoginStatus} from '../services/authService'
import { useEffect } from 'react'

const useRedirectLogout = (path) => { 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const reditectLoggedOutUser =async()=>{
            const isLoggedIn = await getLoginStatus()
            dispatch(SET_LOGIN(isLoggedIn))

            if(!isLoggedIn){
                toast.error("Session Expired ,Please Login Again")
                navigate(path)
                return
            }
        }

        reditectLoggedOutUser()
    }, [navigate , path ,dispatch])
    
}

export default useRedirectLogout