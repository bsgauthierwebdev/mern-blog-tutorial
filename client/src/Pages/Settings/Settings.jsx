import Sidebar from '../../Components/Sidebar/Sidebar'
import './Settings.css'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingswrapper">
            <div className="settingstitle">
                <span className="settingsupdatetitle">
                    Update Your Account
                </span>
                <span className="settingsdeletetitle">
                    Delete Account
                </span>
            </div>
            <form className="settingsform">
                <label>Profile Picture</label>
                <div className="settingsprofilepicture">
                    <img 
                        src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/137220000_10223095316664057_6371425550700973653_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8HbDi_z4asoQ7kNvgHsr-q0&_nc_ht=scontent-iad3-2.xx&oh=00_AYByLMai6rdEN3sdLqmr06uPiH7SRemaFmRX2uyppONYjQ&oe=6668D1B4" 
                        alt="Profile" 
                    />
                    <label htmlFor="fileinput">
                        <i className="settingsprofilepictureicon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id = 'fileinput' style = {{display: 'none'}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder = 'Username' />
                <label>Email</label>
                <input type="email" placeholder = 'user@emailaddress.com' />
                <label>Password</label>
                <input type="password" placeholder = 'Password' />
                <button className="settingssubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
