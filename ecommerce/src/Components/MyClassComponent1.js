  import React, { Component } from 'react';

export default class MyClassComponent1 extends Component {
  render()
  {
    return (
      <div>
        <center>
          <h2>Student Data</h2>
        </center>
        <center>
        <table border = "2">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Thanu</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sharan</td>
            </tr>
            <tr>
              <td> 3 </td>
              <td> Srinivasa </td>
            </tr>
            <tr>
              <td> 4 </td>
              <td> Nagamani</td>
            </tr>
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}
