import React, { Component } from 'react';
import './photofull3.css';
import { NavLink } from 'react-router-dom';

class PhotoFull3Link extends Component {
  render() {
    return (
        <div className="photo-container-full-third">
          <NavLink to="/">
            <img src={this.props.imgUri} />
            <p className="caption">{this.props.caption}</p>
          </NavLink>
        </div>
    );
  }
}

export default PhotoFull3Link;
