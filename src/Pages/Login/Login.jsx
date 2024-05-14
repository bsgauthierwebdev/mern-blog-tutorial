import './Login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="logintitle">Login</span>
        <form className="loginform">
            <label>Email</label>
            <input type="text" className="logininput" placeholder = 'Email' />
            <label>Password</label>
            <input type="password" className="logininput" placeholder = 'Password' />
            <button className="loginbutton">Login</button>
        </form>
        <button className="loginregisterbutton">Register</button>
    </div>
  )
}
