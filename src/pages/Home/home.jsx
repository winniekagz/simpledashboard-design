import React, { useEffect, useState } from 'react'
import Sidebar from "../../components/sidebar/sidebar"
import Chart from "../../components/charts/chart"
import {userData} from "../../dummydata"
import FeaturedIfo from '../../components/FeaturedInfo/FeaturedIfo'
import Widgetsm from '../../components/Widgetsm/widgetsm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import "./Home.css"
import CSSTransition from "react-transition-group"
import Aos from "aos";
import "aos/dist/aos.css"

// import {AreaChat} from '../../components/Areachart/areaChart'

function Home() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className='container'>
            <div className='main'>
                <Sidebar/>
                <div className='home'>
                    <FeaturedIfo data-aos="flip-down" />
                      
                    <div className='graphh' data-aos="fade-down" >
                    
                    <Chart data={userData} dataKey="Active User" title="user  analytics"/>
                    </div>
                    
                    <div data-aos="fade-up" className='homeWidgets'>
                        <Widgetsm data-aos="flip-left"/>

                        <WidgetLg data-aos="flip-left"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
