import React, { Component } from 'react';
import FullScreenImage from './FullScreenImage';
import './photoframe3.css';

class PhotoFrame3 extends Component {
  constructor(){
      super();
      this.state = {
        showFullScreen: false
      };
  }

  toggleFullScreen() {
    console.log("Togggle");
    this.setState({
      showFullScreen: !this.state.showFullScreen
    });
  }

  render() {
    return (
      <div className="photo-container-third">
        <div className="photo">
        <img
          onClick={this.toggleFullScreen.bind(this)}
          src={this.props.imgUri}
        />
        </div>
        {this.state.showFullScreen ?
            <FullScreenImage
              imgUri={this.props.imgUri}
              closeFullScreen={this.toggleFullScreen.bind(this)}
            />
            : null
        }
      </div>
    );
  }
}

export default PhotoFrame3;
