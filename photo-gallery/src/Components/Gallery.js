import React, { Component } from 'react';
import './gallery.css';
import PhotoFrame3 from './PhotoFrame3';
class Gallery extends Component {
  render() {
    let images = [
      "http://maxhdz.com/Photos/Journals/LA/la-2.jpg",
      "http://maxhdz.com/Photos/Journals/FortFunston/ff-2.jpg",
      "http://maxhdz.com/Photos/Journals/Alameda-AdoxColorImplosion/adox-1.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-3.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-2.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-1.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-4.jpg",
    ];
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
