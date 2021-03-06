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
                                <div className='subtitle'>
                                    Home
                                </div>
                            </li>

                            <li className='si-li-item '>
                                <Timeline  className="sidebarIcon"/>
                                <div className='subtitle'>
                                    Analytics
                                </div>
                            </li>

                            <li className='si-li-item '>
                                <TrendingUp  className="sidebarIcon"/>
                                <div className='subtitle'>
                                    Sales
                                </div>
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
                                <div className='subtitle'>
                                    Users
                                </div>
                            </li>
                            </Link>
                            <Link to="/products" className='link'>
                            <li className='si-li-item '>
                                <Storefront className='sidebarIcon'/>
                                <div className='subtitle'>
                                    Products
                                </div>
                            </li>
                            </Link>

                          
                            

                           
                            <li className='si-li-item '>
                                <AttachMoney className='sidebarIcon'/>
                                <div className='subtitle'>
                                    Transactions
                                </div>
                            </li>
                            <li className='si-li-item'>
                                <Storefront className='sidebarIcon'/>
                                <div className='subtitle'>
                                    Products
                                </div>
                            </li>

                            <li className="si-li-item">
                                <BarChart className="sidebarIcon" />
                                <div className='subtitle'>
                                    Reports
                                </div>
                            </li>
                        
                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className="si-li-item">
                            <MailOutline className="sidebarIcon" />
                            <div className='subtitle'>
                                    mail
                                </div>
                        </li>

                        <li className="si-li-item">
                            <DynamicFeed className="sidebarIcon" />
                            <div className='subtitle'>
                                    feedback
                                </div>
                        </li>

                        <li className="si-li-item">
                            <ChatBubbleOutline className="sidebarIcon" />
                            <div className='subtitle'>
                            Messages
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='sidebarMenu'>
                    <div className='sidebarTitle'>Staff</div>
                    <ul className='sidebarList'>
                        <li className="si-li-item">
                            <Timeline className="sidebarIcon" />
                            <div className='subtitle'>
                                    analytics
                                </div>
                        </li>

                        <li className="si-li-item">
                            <WorkOutline className="sidebarIcon" />
                            <div className='subtitle'>
                                    manage
                                </div>
                        </li>

                        <li className="si-li-item">
                            <Report className="sidebarIcon" />
                            <div className='subtitle' >
                                    reports
                                </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )


}

export default Sidebar
