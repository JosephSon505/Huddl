import React, { Component } from 'react'

// Material UI Imports
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    // backgroundColor: '#f2f2f2',
    opacity: '1.0',
    // borderRadius: '20px'
}

var sides = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: 0,
    padding: '5%'
}

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
        ].join(','),

        h1: {
            fontSize: 5.5,
        },
        h2: {
            fontSize: 2.5,
        },
        h3: {
            fontSize: 1.5,
        },
    },
});
theme = responsiveFontSizes(theme);

export class InfoPanels extends Component {
    constructor() {
        super();

        this.state = {
            infoPanels: [{
                heading: "1 ➞ 100",
                subHeading: 'With alarming rates of anxiety, PTSD, burnout and other mental health disorders,',
                text: 'volunteers need help in order to perform at their highest potential. There currently aren\'t enough efforts to care for them, which negatively impacts the quality of care for the refugees and  causes high turnover rates.'
            }, {
                heading: "Are you a mental health provider?",
                subHeading: 'Join the Huddl.',
                text: 'We hope to provide volunteers with 1-hour video coaching sessions with a mental health provider every other week. This is a great opportunity to directly aid the refugee crisis with the knowledge you’ve acquired in your career. Contact us at hellohuddl@gmail.com to get involved.'
            },
            {
                heading: "Are you a volunteer?",
                subHeading: 'Talk to a mental health professional this week.',
                text: 'In a recent study, 72.8% of rescue workers on Lesvos reported low levels of well-being, with over showing symptoms of burnout syndrome. Telecounseling has been proven to help alleviate stress and combat burnout. Help us enable you to become the most effective volunteer you can be.'
            }]
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
                    <ThemeProvider theme={theme}>
                        <div style={panelContainer}>
                            <div style={sides}
                                className="addLine">
                                <Typography variant='h1'>
                                    {heading}
                                </Typography>
                            </div>
                            <div style={sides}>
                                <Typography variant='h2'>
                                    {subHeading}
                                </Typography>
                                <Typography variant='h3'>
                                    {text}
                                </Typography>
                            </div>
                        </div>
                    </ThemeProvider>
                )
                counter++;
            } else {
                rows.push(
                    <ThemeProvider theme={theme}>
                        <div style={panelContainer}>
                            <div style={sides}
                                className="addLine">
                                <Typography variant='h2'>
                                    {subHeading}
                                </Typography>
                                <Typography variant='h3'>
                                    {text}
                                </Typography>
                            </div>
                            <div style={sides}>
                                <Typography variant='h1'>
                                    {heading}
                                </Typography>
                            </div>
                        </div>
                    </ThemeProvider>
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
