import React, { Component } from 'react';
import './gallery.css';
import PhotoFrame3 from './PhotoFrame3';
class Gallery extends Component {
  render() {
    let images = this.props.images;
    images = images.map(image => {
      return(
        <PhotoFrame3 imgUri={image} />
      );
    });


    return (
      <div className="gallery-container">
        {images}
      </div>
    );
  }
}

export default Gallery;
