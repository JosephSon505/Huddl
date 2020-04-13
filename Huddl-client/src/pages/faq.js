import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'

class faq extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{ paddingTop: 64, paddingLeft: 100, paddingRight: 100, paddingBottom: 200 }}>
                    <h1>FAQ</h1>
                    <br></br><br></br>
                    <b>How can I join? (as a mental health provider)</b>
                    <br></br>
                    Thank you for your interest! You can sign up as a provider through the platform in order to commit the mandated two hours a month to our platform.
                    <br></br>
                    You can sign up as a user to gain access to both the community forum and teleservices through your NGO. Please email hellohuddl@gmail.com in order for us to verify your eligibility and we will help you make an account.

                    <br></br><br></br><br></br>

                    <b>Are sessions confidential and private?</b>
                    <br></br>
                    All sessions are private and confidential similar to a regular in-person coaching session.
                
                    <br></br><br></br><br></br>

                    <b>What’s the commitment of the provider?</b>
                    <br></br>
                    We ask for a commitment of biweekly sessions for one year with each session being at most an hour long.

                    <br></br><br></br><br></br>

                    <b>How can I help?</b>
                    <br></br>
                    If you enjoyed your experience with the platform and want to help us out, you can share our platform with other providers and follow us on our social media to help us scale our impact.
                
                    <br></br><br></br><br></br>

                    <b>How long is each session?</b>
                    <br></br>
                    As a volunteer, you can utilize the hour-long sessions in the manner that suits you best. Sessions can be shorter than an hour based on volunteers’ preferences.

                    <br></br><br></br><br></br>

                    <b>How can I join? (as a humanitarian aid worker)</b>
                    <br></br>
                    You can sign up as a user to gain access to both the community forum and teleservices through your NGO. Please email hellohuddl@gmail.com in order for us to verify your eligibility and we will help you make an account.

                    <br></br><br></br><br></br>

                    <b>Do I have to pay?</b>
                    <br></br>
                    Huddl is committed to providing our services for free to long-term aid workers.

                </div>
                <SiteMap />
            </div>
        )
    }

}

export default faq;