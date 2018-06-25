import React, { Component } from 'react';
import './fullscreenimage.css';

class FullScreenImage extends Component {
  render() {
    return (
        <div className="full-screen-container">
        <div className="exit">
          <img src="exit.png" onClick={this.props.closeFullScreen} />
        </div>
          <div className="image-container">
            <img className="full-screen" src={this.props.imgUri} />
          </div>
        </div>
    );
  }
}

export default FullScreenImage;
