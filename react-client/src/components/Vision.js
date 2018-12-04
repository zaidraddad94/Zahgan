import React from 'react'
import zahgan from './zahgan.jpg';
import Mission from './pages/Mission'
import location from './pages/location'
import vision from './pages/vision'


const Vision = () => {

    return (


        <div class="container">
            <br />
            <div class="row">
                <div class="col-md-3 col-sm-6 ">
                    <div class="service-box">
                        <div class="service-icon red">
                            <div class="front-content">
                                <i class="glyphicon glyphicon-grain"></i>
                                <h3>mission</h3>
                            </div>
                        </div>
                        <div class="service-content">
                            <h3>mission</h3>
                            <p>Our mission is to provide the best event services
                        <br />
                                <u> <a href="/Mission">read more</a></u>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 ">
                    <div class="service-box">
                        <div class="service-icon red">
                            <div class="front-content">
                                <i class="glyphicon glyphicon-globe	"></i>
                                <h3>vision</h3>
                            </div>
                        </div>
                        <div class="service-content">
                            <h3>vision</h3>
                            <p> We look forward to provide the best event management for both the hosts and visitors
                        <br />
                                <u>
                                    <a href="/vision">read more</a>
                                </u>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="service-box ">
                        <div class="service-icon red">
                            <div class="front-content">
                                <i class="glyphicon glyphicon-map-marker"></i>
                                <h3>location</h3>
                            </div>
                        </div>
                        <div class="service-content">
                            <h3>location</h3>
                            <p>Our team will be happy to meet you
                                <br /><u><a href="/location"> Our location</a></u>

                            </p>                </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="service-box">
                        <div class="service-icon red">
                            <div class="front-content">
                                <i class="glyphicon glyphicon-earphone"></i>
                                <h3>Help</h3>
                            </div>
                        </div>
                        <div class="service-content">
                            <h3>Help</h3>
                            <p>
                                Do you need help? <br /> Our team will be happy to help you contact us at
                            <br />
                                <u> 06-xxxxxxx </u>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Vision