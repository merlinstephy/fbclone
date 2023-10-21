import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";


import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InboxIcon from '@material-ui/icons/Inbox';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function Marketsidebar() {
  return (
    <div className="marketsidebar">
      <SidebarRow
        title="Marketplace"
    />
     <div className="header__input">
    <SearchIcon />
          <input type="text" placeholder="Search Marketplace" /></div>
      <SidebarRow title="Browse All" Icon={HomeIcon} />
      <SidebarRow title="Notifications" Icon={NotificationsIcon} />
      <SidebarRow title="Inbox" Icon={InboxIcon} />
      <SidebarRow title="Buying" Icon={ShoppingBasketIcon} />
      <SidebarRow title="Selling" Icon={MonetizationOnIcon} />
      
    </div>
  );
}

export default Marketsidebar;
