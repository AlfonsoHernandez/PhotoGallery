import React, { Component } from 'react';
import './social.css';
import PhotoFull3Link from './PhotoFull3Link';
class Social extends Component {
  render() {
    let images = [
      "http://maxhdz.com/Photos/Journals/LA/la-2.jpg",
      "http://maxhdz.com/Photos/Journals/FortFunston/ff-2.jpg",
      "http://maxhdz.com/Photos/Journals/Alameda-AdoxColorImplosion/adox-1.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-3.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-2.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-1.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-4.jpg",
      "http://maxhdz.com/Photos/Journals/PointReyes/pr-3.jpg",
      "http://maxhdz.com/Photos/Journals/FortFunston/ff-2.jpg",
    ];

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
        <PhotoFull3Link caption="Point Reyes Station" imgUri={image} />
      );
    });

    col2 = col2.map(image => {
      return(
        <PhotoFull3Link caption="Untitled II" imgUri={image} />
      );
    });

    col3 = col3.map(image => {
      return(
        <PhotoFull3Link caption="Redwood Regional Park" imgUri={image} />
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
