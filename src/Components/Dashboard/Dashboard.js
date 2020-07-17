//this will have add pet inputs, table outline, and map for table
import React from 'react';
//material-ui for temporary table
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';

function Dashboard() {
  // Renders the entire Dashboard on the DOM
  const addPet = () => {
    console.log('addPet clicked')
  }
  const deletePet = () => {
    console.log('deletePet clicked')
  }
  const checkInPet = () => {
    console.log('checkInPet clicked')
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
        <div>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Owner</TableCell>
                  <TableCell align="left">Pet</TableCell>
                  <TableCell align="left">Breed</TableCell>
                  <TableCell align="left">Checked in</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
              {.map((item) => (
                <TableRow key={item.?}>
                  <TableCell scope="row">{item.owner}</TableCell>
                 <TableCell align="right">{item.breed}</TableCell> 
                <TableCell align="left">{item.checkedIn}</TableCell>
                  <TableCell align="left">
                  <button onClick={deletePet}>Delete</button>
                  <button onClick={checkInPet}>Checked In</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
              <TableBody>
                <TableRow>
                  <TableCell scope="row">Jayden</TableCell>
                  <TableCell align="left">Miles</TableCell>
                  <TableCell align="left">Miniature Poodle</TableCell>
                  <TableCell align="left">no</TableCell>
                  <TableCell align="left">
                    <Button onClick={deletePet}>Delete</Button>
                    <Button onClick={checkInPet}>Checked In</Button>
                    </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div >
    </div >
  );//end return
}//end function

export default Dashboard;