import React from 'react'
import './TopBar.css'

export default function TopBar() {
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
                <li className="toplistitem">HOME</li>
                <li className="toplistitem">ABOUT</li>
                <li className="toplistitem">CONTACT</li>
                <li className="toplistitem">WRITE</li>
                <li className="toplistitem">LOGOUT</li>
            </ul>
        </div>
        <div className="topright">
            <img 
                className = 'topimage'
                src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/137220000_10223095316664057_6371425550700973653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8HbDi_z4asoQ7kNvgEwXCLE&_nc_ht=scontent-lga3-2.xx&oh=00_AYCS-sJelXjfAbzXeP75yBBxTPMWEg1GO8ZO0JrOcqyzaw&oe=66670FB4" 
                alt="profile" 
            />
            <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
