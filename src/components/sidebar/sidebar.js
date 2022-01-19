import React, { useState } from 'react'
import "./sidebar.css"
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";
  import MenuIcon from '@material-ui/icons/Menu';
  
  import { Link } from "react-router-dom";
 

function Sidebar() {
  

  

    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                     
                    <h2 className='sidebarTitle'>DashBoard</h2>
                    <ul className='sidebarList' >
                        <Link to="/" className='link'>
                            <li className='si-li-item active'style={{color:"white"}}>
                                <LineStyle  className="sidebarIcon"/>
                                Home
                            </li>

                            <li className='si-li-item '>
                                <Timeline  className="sidebarIcon"/>
                                analytics
                            </li>

                            <li className='si-li-item '>
                                <TrendingUp  className="sidebarIcon"/>
                                sales
                           </li>
                        </Link>
                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h2 className='sidebarTitle'>Quick Menu</h2>
                    <ul className='sidebarList'>
                        <Link to="/users" className='link'>
                            <li className='si-li-item '>
                                <PermIdentity className='sidebarIcon'/>
                                Users
                            </li>
                            </Link>
                            <Link to="/products" className='link'>
                            <li className='si-li-item '>
                                <Storefront className='sidebarIcon'/>
                                products
                            </li>
                            </Link>

                          
                            

                           
                            <li className='si-li-item '>
                                <AttachMoney className='sidebarIcon'/>
                                transactions
                            </li>
                            <li className='si-li-item'>
                                <Storefront className='sidebarIcon'/>
                                products
                            </li>

                            <li className="si-li-item">
                                <BarChart className="sidebarIcon" />
                                    Reports
                            </li>
                        
                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className="si-li-item">
                            <MailOutline className="sidebarIcon" />
                            mail
                        </li>

                        <li className="si-li-item">
                            <DynamicFeed className="sidebarIcon" />
                            feedback
                        </li>

                        <li className="si-li-item">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <div className='sidebarTitle'>Staff</div>
                    <ul className='sidebarList'>
                        <li className="si-li-item">
                            <Timeline className="sidebarIcon" />
                            analytics
                        </li>

                        <li className="si-li-item">
                            <WorkOutline className="sidebarIcon" />
                            manage
                        </li>

                        <li className="si-li-item">
                            <Report className="sidebarIcon" />
                            reports
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )


}

export default Sidebar
