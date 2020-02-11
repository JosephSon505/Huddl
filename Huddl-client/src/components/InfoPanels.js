import React, { Component } from 'react'

// Styles

var panelViewContainer = {
    width: '95VW',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

var panelContainer = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '80VH',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    marginBottom: '1%',
    backgroundColor: '#f2f2f2',
    opacity: '1.0',
    borderRadius: '20px'
}

var sides = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    padding: '5%'
}


export class InfoPanels extends Component {
    constructor() {
        super();

        this.state = {
            infoPanels: [{
                heading: "1 ➞ 100",
                subHeading: 'With alarming rates of anxiety, PTSD, burnout and other mental health disorders,',
                text: 'volunteers need help in order to perform at their highest potential and currently, there are not enough efforts to care for them. Not only does this negatively impact the quality of care for the refugees but also causes high turnover rates, which consequently is a greater cost on NGOs.'
            },
            {
                heading: "Our partners",
                subHeading: 'NGOs from around the world',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
            },
            {
                heading: "Are you a mental health provider?",
                subHeading: 'Join the Huddl.',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
            },
            {
                heading: "Are you a volunteer?",
                subHeading: 'consectetuer adipiscing elit.',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
            },]
        }
    }


    loadPanels = (arr) => {
        var counter = 1
        var rows = []
        for (let i = 0; i < arr.length; i++) {
            let object = arr[i]
            var heading = object.heading
            var subHeading = object.subHeading
            var text = object.text
            if (counter % 2 === 1) {
                rows.push(
                    <div style={panelContainer}>
                        <div style={sides}
                            className="addLine">
                            <div className="header">
                                {heading}
                            </div>
                        </div>
                        <div style={sides}>
                            <div className="subHeader">
                                {subHeading}
                            </div>
                            <div className="text">
                                {text}
                            </div>
                        </div>
                    </div>
                )
                counter++;
            } else {
                rows.push(
                    <div style={panelContainer}>
                        <div style={sides}
                            className="addLine">
                            <div className="subHeader">
                                {subHeading}
                            </div>
                            <div className="text">
                                {text}
                            </div>
                        </div>
                        <div style={sides}>
                            <div className="header">
                                {heading}
                            </div>
                        </div>
                    </div>
                )
                counter++;
            }

        }
        return rows
    }

    render() {
        return (
            <div style={panelViewContainer}>
                {this.loadPanels(this.state.infoPanels)}
            </div>
        )
    }
}

export default InfoPanels
