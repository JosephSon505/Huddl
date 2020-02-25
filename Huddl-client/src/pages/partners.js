import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class partners extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64, paddingLeft: 100, paddingRight: 100, paddingBottom: 200 }}>
                    <h1>Partners</h1>
                    <br></br><br></br>
                    We're in the process of launching our beta test in Lesvos, Greece and growing our network.
                    <br></br><br></br>
                    If you're interested in joining us, please contact us at <b>hellohuddl@gmail.com</b>
                </div>
            </div>
        )
    }

}

export default partners;