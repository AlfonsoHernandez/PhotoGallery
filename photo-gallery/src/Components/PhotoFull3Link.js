import React, { Component } from 'react';
import './photofull3.css';

class PhotoFull3Link extends Component {
  render() {
    return (
        <div className="photo-container-full-third">
          <a href="#">
            <img src={this.props.imgUri} />
            <p className="caption">{this.props.caption}</p>
          </a>
        </div>
    );
  }
}

export default PhotoFull3Link;
