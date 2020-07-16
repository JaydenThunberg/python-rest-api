//this will have add pet inputs, table outline, and map for table
import React from 'react';

function Dashboard() {
    // Renders the entire Dashboard on the DOM
    const addPet = () => {
        console.log('addPet clicked')
    }
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
                    <button onClick={addPet}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;