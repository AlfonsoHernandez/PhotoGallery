import React, { Component } from 'react';
import './photoframe3.css';

class PhotoFrame3 extends Component {
  render() {
    return (
      <div className="photo-container-third">
        <img src={this.props.imgUri} />
      </div>
    );
  }
}

export default PhotoFrame3;
