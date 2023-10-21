import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";



import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MovieIcon from '@material-ui/icons/Movie';
import ExploreIcon from '@material-ui/icons/Explore';
import SaveIcon from '@material-ui/icons/Save';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';

import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';


function Friendsidebar() {
  return (
    <div className="friendsidebar">
      <SidebarRow
        title="Friends"
    />
    
      
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Friend Requests" Icon={PermIdentityRoundedIcon} />
      <SidebarRow title="Suggesstions" Icon={PermIdentityRoundedIcon} />
      <SidebarRow title="All Friends" Icon={PermIdentityRoundedIcon} />
      <SidebarRow title="Birthday" Icon={CakeRoundedIcon} />
      <SidebarRow title="Custom Lists" Icon={PermIdentityRoundedIcon} />
    </div>
  );
}

export default Friendsidebar;
