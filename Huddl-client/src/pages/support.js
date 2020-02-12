import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class support extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64 }}>
                    <h1>Support</h1>
                </div>
            </div>
        )
    }

}

export default support;