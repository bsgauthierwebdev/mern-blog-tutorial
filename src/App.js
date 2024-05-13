import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import SinglePost from "./Pages/SinglePost/SinglePost";
import Write from "./Pages/Write/Write";


function App() {
  return (
    <div className="App">
      <>
        <TopBar />
        {/* <Home /> */}
        {/* <SinglePost /> */}
        <Write />
      </>
    </div>
  );
}

export default App;
