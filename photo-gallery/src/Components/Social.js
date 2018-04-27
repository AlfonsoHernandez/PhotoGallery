import React, { Component } from 'react';
import './social.css';
import PhotoFull3Link from './PhotoFull3Link';
class Social extends Component {
  render() {
    let images = this.props.images;

    let imageCount = images.length;
    let imagesPerCol = imageCount/3;

    var col1 = [];
    var col2 = [];
    var col3 = [];

    for(var i = imageCount-1; i>0; i-=3){
      col1.push(images[i]);
      col2.push(images[i-1]);
      col3.push(images[i-2]);
    }




    col1 = col1.map(image => {
      return(
        <PhotoFull3Link caption={image.title} imgUri={image.thumbnail} />
      );
    });

    col2 = col2.map(image => {
      return(
        <PhotoFull3Link caption={image.title} imgUri={image.thumbnail} />
      );
    });

    col3 = col3.map(image => {
      return(
        <PhotoFull3Link caption={image.title} imgUri={image.thumbnail} />
      );
    });


    return (
      <div className="social-container">
        <div className="col-3">
          {col1}
        </div>
        <div className="col-3">
          {col2}
        </div>
        <div className="col-3">
          {col3}
        </div>
      </div>
    );
  }
}

export default Social;
