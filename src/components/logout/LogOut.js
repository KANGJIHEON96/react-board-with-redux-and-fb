import React from 'react'
import { logout } from '../../helpers/auth';
import { useHistory } from 'react-router';
import './logout.css';


function LogOut() {
    const history = useHistory();
    
        const onLogOutClick = () => {
            
            logout()
            alert('로그아웃 되었습니다')
            history.push('/login')
            
        }

    
    return (
            <button className="logOutButton" onClick = {onLogOutClick}>로그아웃</button>
    )
    }

export default LogOut;