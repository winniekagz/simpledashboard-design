import React from 'react'
import "./Topbar.css"
import image from "../image/main.jpg"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
    return (
        <div className="topbar">
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>kagz</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer" >
                       
                            <NotificationsNone/>
                            <span className="tbIconBadge">
                                2
                            </span>
                    </div>
                    <div className="topbarIconContainer">
                       
                            <Language/>
                            <span className="tbIconBadge">
                                2
                            </span>
                    </div>
                    <div className="tbIconContainer">
                       
                            <Settings/><span className="tbIconBadge">2</span>
                            {/* <span className="tbIconBadge">2</span> */}
                    </div>
                    {/* <img src={image} alt="" className='topAvatar'/> */}
                </div>
                

            </div>
            
        </div>
    )
}

export default Topbar
