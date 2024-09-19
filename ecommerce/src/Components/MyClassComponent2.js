import React, { Component } from 'react';

export default class MyClassComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sname: "Thanushree"
    };
  }

  render() {
    return (
      <div>
        <br />
        <center>
          <iframe
            width="760"
            height="415"
            src="https://www.youtube.com/embed/bXlQ3Mw4uGc?si=JsvHGz--ovr1lud7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </center>
        <center>
          <h3>Welcome {this.state.sname}, to React "state"</h3>
        </center>
      </div>
    );
  }
}
