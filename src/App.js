import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from 'react-router-dom'

import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import SinglePost from "./Pages/SinglePost/SinglePost";
import Write from "./Pages/Write/Write";


function App() {
  const user = false

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route exact path = '/post/:postId' element = {<SinglePost />} />
        <Route 
          exact path = '/write' 
          element = {user ? <Write /> : <Register />} 
        />
        <Route 
          exact path = '/settings' 
          element = {user ? <Settings /> : <Register />} 
        />
        <Route 
          exact path = '/register'
          element = {user ? <Home /> : <Register />}
        />
        <Route 
          exact path = '/login'
          element = {user ? <Home /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
