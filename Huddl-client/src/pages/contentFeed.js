import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'

class contentFeed extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64, paddingLeft: 100, paddingRight: 100, paddingBottom: 200 }}>
                    <h1>About Us</h1>
                    <br></br>
                    By helping one volunteer, you help 100 refugees.
                    <br></br><br></br>
                    Humanitarian aid workers are routinely exposed to traumatic events linked to the cause of mental health issues including <b>PTSD, depression, burnout and anxiety. </b> But increasingly, work stress including <b>extremely heavy workloads, long hours and limited time for self-care </b>are being highlighted as major causes. Among volunteers, mental health issues can be even higher. Often from affected communities, volunteers experience the same loss and grief as those they are working to support <b>but without the same training, support or structure as professional workers. </b>Not only does this negatively impact the quality of care for the refugees but it also causes <b>high turnover rates</b>, which consequently is a greater cost on NGOs.
                    <br></br><br></br>
                    At the global level, there is now increasing recognition of the importance of ensuring the well-being and safety of humanitarian workers and volunteers. However, too often the appropriate support and care systems are <b>not in place, especially for national or local staff. </b>The prevailing culture of silence, feelings of guilt and perceived stigma around mental health, leads many to continue working without seeking treatment. To reduce stress, burnout and to promote the well-being of workers and volunteers, simple and cost-effective initiatives need to be put in place before, during and after deployment.
                    <br></br><br></br>
                    This is where we come in - <b>Huddl</b> is a crisis preparation platform for volunteers entering crisis zones, providing mental health support in the form of <b>telecounseling</b> which connects providers with volunteers on the ground for biweekly sessions during their stay. We will allow only those certified in counseling, from therapists to psychiatrists, to provide these biweekly coaching sessions.
                    <br></br><br></br>
                    We are a team of 5 diverse members coming from different professional backgrounds and regions of the world. Our international team provides volunteers with a companion they can lean on in their journey. Huddl was built in association with the <b>University of Southern California</b> as a <b>non-profit</b> organization that aims to increase access to care for volunteers everywhere in the world.
                    <br></br><br></br>
                    No one is focusing their efforts on this high-impact group and we hope to be the first of many to do so. 
                    <br></br><br></br>
                    As we say at Huddl, we hope you will <b>help us help others.</b>
                </div>

                <SiteMap />
            </div>
        )
    }

}

export default contentFeed