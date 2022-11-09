import {useSelector} from 'react-redux'
import {selectIsLoggedIn} from '../../redux/features/auth/authSlice'



export const ShowOnLogin = ({children})=>{
    const issLoggedIn  = useSelector(selectIsLoggedIn)
    if(issLoggedIn){
        return <>{children}</> 
    }
    else{
      return  null
    }
}

export const ShowOnLogout = ({children})=>{
    const issLoggedIn  = useSelector(selectIsLoggedIn)

    if(!issLoggedIn){
        return<>{children}</>
    }
    else{
      return  null
    }
}