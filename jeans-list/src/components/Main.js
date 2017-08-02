import React, { Component } from 'react';
import ListItems from './ListItems.js';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-header">
          <h2>Jean&#39;s List</h2>
          <p className="List-intro">
            This is a big list of items. Here are some text first:
          </p>
        </div>
        <div className="List">
          <ul>
            <ListItems />
          </ul>
          <img src="./06-train-cat-shake-hands.jpg" alt="" width="400px"/>
        </div>
      </div>
    );
  }
}

export default Main;
