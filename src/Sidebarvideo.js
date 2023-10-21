import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";


import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MovieIcon from '@material-ui/icons/Movie';
import ExploreIcon from '@material-ui/icons/Explore';
import SaveIcon from '@material-ui/icons/Save';


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Video"
    />
     <div className="header__input">
      <SidebarRow
        Icon={SearchIcon}></SidebarRow>
        <input type="text" placeholder="Search Videos" /></div>
      
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Live" Icon={LiveTvIcon} />
      <SidebarRow title="Reels" Icon={VideoLibraryIcon} />
      <SidebarRow title="Shows" Icon={MovieIcon} />
      <SidebarRow title="Explore" Icon={ExploreIcon} />
      <SidebarRow title="Saved Videos" Icon={SaveIcon} />
    </div>
  );
}

export default Sidebar;
