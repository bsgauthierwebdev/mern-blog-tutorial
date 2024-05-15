import React from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
    const user = false

  return (
    <div className = 'topbar'>
        <div className="topleft">
            <i className="topicon fa-brands fa-square-facebook"></i>
            <i className="topicon fa-brands fa-square-twitter"></i>
            <i className="topicon fa-brands fa-square-instagram"></i>
            <i className="topicon fa-brands fa-linkedin"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitem">
                    <Link to = '/' className = 'link'>HOME</Link>
                </li>
                <li className="toplistitem">
                    <Link to = '/about' className = 'link'>ABOUT</Link>
                </li>
                <li className="toplistitem">
                    <Link to = '/contact' className = 'link'>CONTACT</Link>
                </li>
                <li className="toplistitem">
                    <Link to = '/write' className = 'link'>WRITE</Link>
                </li>
                <li className="toplistitem">
                    {user && 'LOGOUT'}
                </li>
            </ul>
        </div>
        <div className="topright">
            {
                user ? (
                    <img 
                        className = 'topimage'
                        src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/137220000_10223095316664057_6371425550700973653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8HbDi_z4asoQ7kNvgEwXCLE&_nc_ht=scontent-lga3-2.xx&oh=00_AYCS-sJelXjfAbzXeP75yBBxTPMWEg1GO8ZO0JrOcqyzaw&oe=66670FB4" 
                        alt="profile" 
                    />
                ) : (
                    <ul className = 'toplist'>
                        <li className="toplistitem">
                            <Link to = '/login' className = 'link'>LOGIN</Link>
                        </li>
                        <li className="toplistitem">
                            <Link to = '/register' className = 'link'>REGISTER</Link>                           
                        </li>
                    </ul>
                    
                )
            }
            
            <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
