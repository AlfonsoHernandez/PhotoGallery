import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from './Gallery'
import Social from './Social'
import './main.css';

function imageSet(title, link, images, thumbnail) {
  this.title = title;
  this.link = link;
  this.images = images;
  this.thumbnail = thumbnail;
}

let portImages = [
  "http://maxhdz.com/Photos/EliPurple/ep-2.jpg",
  "http://maxhdz.com/Photos/ChrisRedwoods/CR-8.jpg",
  "http://maxhdz.com/Photos/EliPointReyes/ep-4.jpg",
  "http://maxhdz.com/Photos/EliTahoe/eli-tahoe1jpg.jpg",
  "http://maxhdz.com/Photos/EliBalboa/EB-12.jpg",
  "http://maxhdz.com/Photos/EliBayTrail/_DSC0065.jpg"
]


let imageSets = [
  new imageSet("1", "Eli", portImages, portImages[0]),
  new imageSet("2", "Eli", portImages, portImages[1]),
  new imageSet("3", "Eli", portImages, portImages[2]),
  new imageSet("4", "Eli", portImages, portImages[3]),
  new imageSet("5", "Eli", portImages, portImages[5]),
  new imageSet("6", "Eli", portImages, portImages[0]),
  new imageSet("7", "Eli", portImages, portImages[0]),
  new imageSet("8", "Eli", portImages, portImages[0]),
  new imageSet("9", "Eli", portImages, portImages[0]),
]

let feedImages = [
  "http://maxhdz.com/Feed/feed-1.jpg",
  "http://maxhdz.com/Feed/feed-2.jpg",
  "http://maxhdz.com/Photos/SB18/sb-2.jpg",
  "http://maxhdz.com/Feed/feed-3.jpg",
  "http://maxhdz.com/Photos/SB18/sb-59.jpg",
  "http://maxhdz.com/Feed/feed-4.jpg",
  "http://maxhdz.com/Photos/SB18/sb-67.jpg",
  "http://maxhdz.com/Photos/SB18/sb-69.jpg",
  "http://maxhdz.com/Photos/SB18/sb-79.jpg",
  "http://maxhdz.com/Photos/SB18/sb-71.jpg",
  "http://maxhdz.com/Photos/SB18/sb-43.jpg",
  "http://maxhdz.com/Photos/SB18/sb-44.jpg"
];

let socialImages = [
  "http://maxhdz.com/Photos/Film/21st/bd-38.jpg",
  "http://maxhdz.com/Photos/Film/ChrisBday17/cb-6.jpg",
  "http://maxhdz.com/Photos/Film/XMAS17/xmas-9.jpg",
  "http://maxhdz.com/Photos/Film/LakeNacimineto/ln-4.jpg",
  "http://maxhdz.com/Photos/Film/Backseat-2/bs-2.jpg",
  "http://maxhdz.com/Photos/Film/White-Room/wr-1.jpg",
  "http://maxhdz.com/Photos/Film/ShadowCliffs/sc-1.jpg",
  "http://maxhdz.com/Photos/Film/CF/cf-1.jpg",
  "http://maxhdz.com/Photos/Film/JuniorProm/jp-24.jpg",
  "http://maxhdz.com/Photos/Film/vb/vb-1.jpg"
]

const Main = () => (
  <main>
    <Switch>
      <Route path='/Feed' render={(props) => <Gallery images={feedImages}/>}/>
      <Route path='/Journals' render={(props) => <Social images={imageSets}/>}/>
      <Route path='/Portraits' render={(props) => <Gallery images={portImages}/>}/>
      <Route path='/Social' render={(props) => <Social images={imageSets}/>}/>
    </Switch>
  </main>
)

export default Main
