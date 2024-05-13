import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
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
        <Settings />
      </>
    </div>
  );
}

export default App;
