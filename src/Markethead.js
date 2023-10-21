
import './Home.css';
import NavbarComp from "./Navbar";
import Marketsidebar from './Marketsidebar';
import Market from './Market';




function Markethead() {
    return (
      <div className="home">
        <NavbarComp/>
        
  
        <div className="home__body">
          <Marketsidebar />
          <Market />
          
          
          
        </div>
      </div>
    );
  }
  
  export default Markethead;
  
  
  