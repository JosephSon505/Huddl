import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class aboutus extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64 }}>
                    <h1>About Us</h1>
                </div>
            </div>
        )
    }

}

export default aboutus;