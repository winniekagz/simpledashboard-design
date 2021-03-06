import React from 'react'
import "./Product.css"
import Chart from "../../components/charts/chart"
import {productData} from "../../dummydata"
import { Publish } from "@material-ui/icons";
import Sidebar from "../../components/sidebar/sidebar"
import {Link} from "react-router-dom";
import image from "../../components/image/airpods.jpg"
import image2 from "../../components/image/airpod2.jpg"

function Product() {
    return (
        <div className="product">
            <div className='main'>
                <div><Sidebar/></div>
                <div style={{padding:"15px",width:"80vw"}}>
                <div className="productTitleContainer">
                    <h1 className="productTitle">Products</h1>
                    <Link to="/newproduct">
                        <button className='Addprodbtn'>add product</button>
                    </Link>
                </div> 
                <div className="productTop">
                    <div className="productTopLeft">
                        <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                    </div> 
                    <div className='productTopRight'>
                        <div className="productInfoTop">
                            <img src={image} alt="" className="productInfoImg" />
                            <span className="productName">Apple Airpods</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id:</span>
                                <span className="productInfoValue">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">sales:</span>
                                <span className="productInfoValue">5123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">active:</span>
                                <span className="productInfoValue">yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">in stock:</span>
                                <span className="productInfoValue">no</span>
                            </div>
                        </div>
                    </div>   
                    <div className="productBottom">
                        <form classname="productForm">
                            <div className="productFormLeft">
                                <label>Product Name</label>
                                <input type="text" placeholder="Apple AirPod" />
                                <label>In Stock</label>
                                <select name="inStock" id="idStock">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <label>Active</label>
                                <select name="active" id="active">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="productFormRight">
                                <div className="productUpload">
                                    <img src={image2} alt="" className="productUploadImg" />
                                    <label for="file">
                                        <Publish/>
                                    </label>
                                    <input type="file" id="file" style={{display:"none"}} />
                                </div>
                                <button className="productButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>   
                </div>      
            </div>
        </div>
    )
}

export default Product
