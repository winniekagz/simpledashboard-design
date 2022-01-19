import React from 'react'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./user.css";
  import image from "../../components/image/main.jpg"
import Sidebar from '../../components/sidebar/sidebar';

function User() {
    return (
    <div className="user">
        
      <div  style={{width:"100%"}}><Sidebar/></div>
      
        <div style={{width:"100%" ,margin:"0%", float:"right"}}>
            <div className="userTitleContainer"  >
            <h1 className="userTitle">update User</h1>
            <Link to="/newuser">
                <button className="userAddButton">Create</button>
            </Link>
            </div>
            
            <div className="userContainer">
        
        
            <div className="userShow">
            {/*  */}
                <div className="userShowTop">
                    <img src={image} alt="" className="userShowImg"/>
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Winnie kagendo</span>
                        <span className="userShowUserTitle">fullstack developer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">winniekagz</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">0712345678</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">WINKAGZ@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">Nairobi</span>
                    </div>
                </div>
            </div>
            

            <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="full name"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="user@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="07123445667"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="nairobi"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={image}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">submit</button>
            </div>
          </form>
        </div>
        </div>
      </div>
      </div>
      
      
      

            
    
    )
}

export default User
