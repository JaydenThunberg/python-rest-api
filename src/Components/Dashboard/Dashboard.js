//this will have add pet inputs, table outline, and map for table
import React, { Component } from 'react';


class Dashboard extends Component {
    // Renders the entire Dashboard on the DOM
    addPet = () => {
        console.log('addPet clicked')
    }
    render() {
        return (
          <div className="Dashboard">
            <div>
              <h3>Add Pet</h3>
              <div>
                <input placeholder="Pet Name" />
                <input placeholder="Pet Color" />
                <input placeholder="Pet Breed" />
                <select>
                  <option>Owner Name</option>
                </select>
                <button onClick={this.addPet}>Submit</button>
              </div>
            </div>
          </div>
        );
    }
}

export default Dashboard;