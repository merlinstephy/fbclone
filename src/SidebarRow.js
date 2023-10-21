import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}

      {Icon && <Icon />}
      <h4><b>{title}</b></h4>
    </div>
  );
}

export default SidebarRow;
