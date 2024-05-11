import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">
                ABOUT ME
            </span>
            <img 
                src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/137220000_10223095316664057_6371425550700973653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8HbDi_z4asoQ7kNvgEwXCLE&_nc_ht=scontent-lga3-2.xx&oh=00_AYCS-sJelXjfAbzXeP75yBBxTPMWEg1GO8ZO0JrOcqyzaw&oe=66670FB4" 
                alt="profile" 
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">
                CATEGORIES
            </span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                <li className="sidebarlistitem">Health</li>
                <li className="sidebarlistitem">Sports</li>
                <li className="sidebarlistitem">Cinema</li>
                <li className="sidebarlistitem">Tech</li>
            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">
                FOLLOW US
            </span>
            <div className="sidebarsocial">
                <i className="sidebaricon fa-brands fa-square-facebook"></i>
                <i className="sidebaricon fa-brands fa-square-twitter"></i>
                <i className="sidebaricon fa-brands fa-square-instagram"></i>
                <i className="sidebaricon fa-brands fa-linkedin"></i>
            </div>
        </div>
    </div>
  )
}
