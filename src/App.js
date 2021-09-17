import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Newsfeed from "./components/newsfeed/newsfeed";
import Sidebar from "./components/sidebar/sidebar";
// import Post from "./components/post/post";
import Widgets from "./components/widgets/widgets";

function App() {
  return (
    <>
      <div className="container-fluid mx-auto">
        <Navbar />
      </div>
      <div className="container-fluid mx-auto pt-5 mt-5">
        <div className="row">
          <div className="col-md-3 sidebar pe-0">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <Newsfeed />
          </div>
          <div className="col-md-3 ps-5 widgets pe-0">
            <Widgets />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
