import './Header.css'

export default function Header() {
  return (
    <div className="header">
        <div className="headertitles">
            <span className = 'headertitlesmall'>React & Node</span>
            <span className = 'headertitlelarge'>Blog</span>
        </div>
        <img 
            src="https://t3.ftcdn.net/jpg/02/00/00/14/360_F_200001420_oc3FTjnYScErU0kn52shLhmeXa2BtkzX.jpg" 
            alt="profile picture" 
            className="headerimage" 
        />
    </div>
  )
}
