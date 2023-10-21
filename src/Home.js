import "./Home.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import NavbarComp from "./Navbar";





function Home() {
  return (
    <div className="home">
      <NavbarComp/>
      

      <div className="home__body">
        <Sidebar />
        <Feed />
        <Widget/>
        
        
      </div>
    </div>
  );
}

export default Home;


