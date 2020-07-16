import React, { Component } from 'react';
import Nav from "../Nav/Nav";
class Home extends Component {
    render() {
        return (
          <>
            <Nav />
            <header>
              <h1>Pet Hotel</h1>
            </header>
          </>
        );//end return
    }//end render
}//end class

export default Home;