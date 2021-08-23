import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./components/navbar/navbar";
import Newsfeed from "./components/newsfeed/newsfeed";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="container-fluid mx-auto">
      <Navbar />
      <div className="d-flex pt-5">
        <Sidebar />
        <Newsfeed />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
