//this have add owner input, table outline for owners(th: name, number of pets, action), and map for owners
import React from 'react';

//material-ui for temporary table
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';


function Manage() {
    // Renders the entire Manage on the DOM
    const addOwner = () => {
        console.log('add owner clicked')
    }

    const deleteOwner = () => {
        console.log('delete owner clicked')
    }
    return (
        <div className="Manage">
            <div>
                <h3>Add Owner</h3>
                <input placeholder="Owner name" />
                <button onClick={addOwner}>Submit</button>
            </div>
            <div>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Number of Pets</TableCell>
                                <TableCell align="left">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* <TableBody>
                    {.map((item) => (
                      <TableRow key={item.?}>
                        <TableCell scope="row">{item.name}</TableCell>
                        <TableCell align="right">{item.numPets}</TableCell> 
                        <TableCell align="left"><button onClick={deleteOwner}>Delete</button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                        <TableBody>
                            <TableRow>
                                <TableCell scope="row">Jayden</TableCell>
                                <TableCell align="left">1</TableCell>
                                <TableCell align="left">
                                    <Button onClick={deleteOwner}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Manage;