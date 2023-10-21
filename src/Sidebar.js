import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Merlin J"
        src="/images/avatar.jpg"
      />
     
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Groups" Icon={GroupIcon} />
     <SidebarRow title="Events" Icon={EventIcon} />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Games" Icon={SportsEsportsIcon} />
     <SidebarRow title="See More" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
