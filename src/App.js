import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import SinglePost from "./Pages/SinglePost/SinglePost";
import Write from "./Pages/Write/Write";


function App() {
  return (
    <div className="App">
      <>
        <TopBar />
        {/* <Home /> */}
        {/* <SinglePost /> */}
        {/* <Write /> */}
        {/* <Settings /> */}
        {/* <Login /> */}
        <Register />
      </>
    </div>
  );
}

export default App;
