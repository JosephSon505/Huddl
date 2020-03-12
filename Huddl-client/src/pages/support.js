import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'

class support extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64, paddingLeft: 100, paddingRight: 100, paddingBottom: 200 }}>
                <h1>Support Us</h1>
                    <br></br><br></br>
                    Join us in our mission to improve aid workers’ performance in crisis situations. 
                    <br></br><br></br>
                    Your donation will be used to sustain our platform for years to come. We have costs in running this virtual platform, licensing and the coordination of the providers and volunteers. We are committed to helping alleviate mental health pressures of volunteers, resulting in them performing at their highest ability. 
                    <br></br><br></br>
                    Help us, help others by donating to Huddl.
                </div>
                <SiteMap />
            </div>
        )
    }

}

export default support;