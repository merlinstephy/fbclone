import React, { Component } from 'react'
import { Navbar, Nav ,Container } from 'react-bootstrap'
import './Navbar.css'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import {  IconButton } from "@material-ui/core";
import MessageIcon from '@material-ui/icons/Message';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



export default class NavbarComp extends Component {
    render() {
        return (
            
    

            <Navbar bg="light" expand={false}>
            <Container fluid>
                
            
                <Nav className="justify-content-end flex-grow-1 pe-3">
                                <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
        <Link to="/Home"> <HomeIcon fontSize="medium" /></Link>
        </div>
        <div className="header__option">
        <Link to="/Friendhead">  <GroupRoundedIcon fontSize="large" /></Link>
        </div>
        <div className="header__option">
         
          <Link to="/Shotshead"> <SubscriptionsOutlinedIcon fontSize="large" /></Link>
        </div>
        <div className="header__option">

        <Nav.Link href="/Markethead">  <StorefrontOutlinedIcon fontSize="large" /></Nav.Link>
        </div>
        <div className="header__option">
         <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
         
        </div>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
        <Avatar alt="Merlin" src="/images/avatar.jpg" />
        </IconButton>
       

  

      </div>
    
    </div>

                            </Nav>
</Container>
                        
                    </Navbar>
                
                   
                
            
        )
    }
}