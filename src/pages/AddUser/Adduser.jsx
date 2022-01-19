import React from 'react'
import "./Adduser.css"
import image from "../../components/image/back1.jpg"

function Adduser() {
    return (
    <div className='container'>
            <div className="newUser">
                <h1 className="newUserTitle">Please register below</h1>
                
                    

                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Username</label>
                            <input type="text" placeholder="john" className="inputbox"/>
                        </div>
                        <div className="newUserItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="username"  className="inputbox"/>
                        </div>
                            <div className="newUserItem">
                            <label>Email</label>
                            <input className="inputbox" type="email" placeholder="user@gmail.com"  />
                        </div>
                        <div className="newUserItem">
                            <label>Password</label>
                            <input type="password" placeholder="password" className="inputbox" />
                        </div>
                            <div className="newUserItem">
                            <label>Phone</label>
                            <input type="text" placeholder="0712345678" className="inputbox" />
                        </div>
                            <div className="newUserItem">
                            <label>Address</label>
                            <input type="text" placeholder="nairobi"  className="inputbox"/>
                        </div>
                        <div className="newUserItem">
                            <label>Gender</label>
                            <div className="newUserGender">
                                <input type="radio" name="gender" id="male" value="male" />
                                <label for="male">Male</label>
                                <input type="radio" name="gender" id="female" value="female" />
                                <label for="female">Female</label>
                                <input type="radio" name="gender" id="other" value="other" />
                                <label for="other">Other</label>
                            </div>
                        </div>
                        <div className="newUserItem">
                            <label>Active</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <button className="newUserButton">submit</button>
                    </form>
                </div>
                
            
    </div>
    )
}

export default Adduser
