import React, { Component } from 'react';
import PropComponent from './Components/PropComponent';

export default class App extends Component {
    state = {
        Name: "Thanu",
        Subject: "Fullstackdevelopment",
        section: "sectionD"
    }
    render() {
        return (
            <div>
                I am {this.state.Name} I learn {this.state.Subject}
                <PropComponent />
            </div>
        );
    }
}