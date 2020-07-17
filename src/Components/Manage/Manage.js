//this have add owner input, table outline for owners(th: name, number of pets, action), and map for owners
import React from 'react';

function Manage() {
    // Renders the entire Manage on the DOM
    const addOwner = () => {
        console.log('add owner clicked')
    }
    return (
        <div className="Manage">
            <h3>Add Owner</h3>
            <input placeholder="Owner name" />
            <button onClick={addOwner}>Submit</button>
        </div>
    );
}

export default Manage;