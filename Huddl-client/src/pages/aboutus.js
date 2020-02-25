import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class aboutus extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64, paddingLeft: 100, paddingRight: 100, paddingBottom: 200 }}>
                    <h1>About Us</h1>
                    <br></br><br></br>
                    By helping one volunteer, you help 100 refugees. With alarming rates of anxiety, PTSD, burnout, and other mental health disorders, volunteers need help in order to perform at their highest potential and currently, there are not enough efforts to care for them. Not only does this negatively impact the quality of care for the refugees but it also causes high turnover rates, which consequently is a greater cost on NGOs. 
                    <br></br><br></br>
                    We aim to tackle these issues. Huddl is a crisis preparation platform for volunteers entering crisis zones, providing mental health support in the form of telecounseling which connects providers with volunteers on the ground for biweekly sessions during their stay. We will allow only those certified in counseling, from therapists to psychiatrists, to provide these biweekly coaching sessions.
                    <br></br><br></br>
                    We are a team of 5 diverse members coming from different professional backgrounds and regions of the world. Our international team provides volunteers with a companion they can lean on in their journey. Huddl was built in association with the University of Southern California as a non-profit organization that aims to increase access to care for volunteers everywhere in the world.
                    <br></br><br></br>
                    No one is focusing their efforts on this high-impact group and we hope to be the first to do so. As we say at Huddl, we hope you will help us help others.
                </div>
            </div>
        )
    }

}

export default aboutus