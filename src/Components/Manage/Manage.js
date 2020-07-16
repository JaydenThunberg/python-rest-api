//this have add owner input, table outline for owners(th: name, number of pets, action), and map for owners
import React, { Component } from 'react';

class Manage extends Component {
    // Renders the entire Manage on the DOM
    addOwner = () => {
        console.log('add owner clicked')
    }
    render() {
        return (
            <div className="Manage">
                <h3>Add Owner</h3>
                <input placeholder="Owner name" />
                <button onClick={this.addOwner}>Submit</button>
            </div>
        );
    }
}

export default Manage;