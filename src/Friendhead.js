
import './Home.css';
import Friend from './Friend';
import Friendsidebar from './Friendsidebar';
import NavbarComp from "./Navbar";




function Friendhead() {
    return (
      <div className="home">
        <NavbarComp/>
        
  
        <div className="home__body">
          <Friendsidebar />
          <Friend />
          
          
          
        </div>
      </div>
    );
  }
  
  export default Friendhead;
  
  
  