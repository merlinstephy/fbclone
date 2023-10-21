
import './Home.css';
import Shots from "./Shots";
import NavbarComp from "./Navbar";
import Sidebarvideo from "./Sidebarvideo";



function Shotshead() {
    return (
      <div className="home">
        <NavbarComp/>
        
  
        <div className="home__body">
          <Sidebarvideo />
          <Shots/>
          
          
          
        </div>
      </div>
    );
  }
  
  export default Shotshead;
  
  
  