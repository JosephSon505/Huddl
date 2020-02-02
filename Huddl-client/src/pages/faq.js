import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class faq extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64 }}>
                    <h1>FAQ</h1>
                </div>
            </div>
        )
    }

}

export default faq;