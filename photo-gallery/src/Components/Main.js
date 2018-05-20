import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from './Gallery'
import Social from './Social'
import './main.css';

function imageSet(title, link, images, thumbnail) {
  this.title = title;
  this.link = link;
  this.images = images;
  this.thumbnail = images[thumbnail-1];
}

function makeImageList(directory, fileName, numFiles){
  var images = [];
  for(var i =1; i<=numFiles; i++){
    images.push("http://maxhdz.com/Photos/" +directory+"/"+fileName+"-"+i+".jpg");
  }
  return images;
}

let portImages = makeImageList("ChrisRedwoods", "CR", 8);
let feedImages = makeImageList("Feed", "feed", 4);

//Portraits
let carlosKarina = makeImageList("Portraits/CarlosKarina", "ck", 48);
let eliFair = makeImageList("Portraits/EliFair", "eli-fair", 3);
let chrisRed = makeImageList("Portraits/ChrisRedwoods", "CR", 8);
let ucbGrad = makeImageList("Portraits/UCBGrad18", "ucg", 66);

let portraitImageSet = [
  new imageSet("Chris Redwoods", "", chrisRed, 8),
  new imageSet("Carlos + Karina", "Eli", carlosKarina, 20),
  new imageSet("ELi II", "eli", eliFair, 2),
  new imageSet("UCB Grads", "", ucbGrad, 66)
]

//Social
let twentyFirst = makeImageList("Social/21st", "bd", 72);
let arroyoSoccer = makeImageList("Social/ArroyoSoccer","as", 4);
let bwCameo = makeImageList("Social/B&WCameo", "bc", 9);
let bb = makeImageList("Social/BB", "bb", 2);
let bfd = makeImageList("Social/BFD2015", "bfd", 5);
let bms = makeImageList("Social/BMS", "bms", 5);
let bladium = makeImageList("Social/Bladium", "bl", 9);
let cf = makeImageList("Social/CF", "cf", 2);
let chrisBday = makeImageList("Social/ChrisBday17", "cb", 9);
let firstCameo = makeImageList("Social/FC", "fc", 21);
let juniorProm = makeImageList("Social/JuniorProm", "jp", 31);
let juniorPromAfter = makeImageList("Social/JuniorPromAfter", "jpa", 18);
let lakeNacimiento = makeImageList("Social/LakeNacimineto", "ln", 37);
let mp = makeImageList("Social/MP", "mp", 6);
let miniGolf = makeImageList("Social/Mini-Golf", "mg", 7);
let perroNegro = makeImageList("Social/PerroNegro", "pn", 2);
let sw = makeImageList("Social/SW", "sw", 3);
let seniorProm = makeImageList("Social/SeniorProm", "sp", 29);
let shadowCliffs = makeImageList("Social/ShadowCliffs", "sc", 16);
let summerCameo = makeImageList("Social/SummerCameo", "sc", 7);
let tahoe = makeImageList("Social/Tahoe", "t", 10);
let weddingGDL = makeImageList("Social/WeddingGDL", "gw", 19);
let whiteRoom = makeImageList("Social/White-Room", "wr", 12);
let xmas17 = makeImageList("Social/XMAS17", "xmas", 23);
let vb = makeImageList("Social/vb", "vb", 4);

let socialImageSet = [
  new imageSet("bms", "", bms, 2),
  new imageSet("bfd 2015", "", bfd, 5),
  new imageSet("untitled", "", sw, 2),
  new imageSet("junior prom", "", juniorProm, 24),
  new imageSet("junior prom after", "", juniorPromAfter, 10),
  new imageSet("senior prom", "", seniorProm, 12),
  new imageSet("untitled", "", cf, 1),
  new imageSet("pizza del perro negro", "", perroNegro, 2),
  new imageSet("tahoe 2017", "", tahoe, 5),
  new imageSet("⚽️", "", arroyoSoccer, 2),
  new imageSet("guadalajara wedding", "", weddingGDL, 14),
  new imageSet("shadow cliffs", "", shadowCliffs, 1),
  new imageSet("bladium - 2017", "", bladium, 3),
  new imageSet("untitled II", "", whiteRoom, 1),
  new imageSet("lake nacimiento", "", lakeNacimiento, 4),
  new imageSet("christmas 2017", "", xmas17, 9),
  new imageSet("chris's 21st", "", chrisBday, 6),
  new imageSet("21st", "", twentyFirst, 38),
]

//JOURNALS
let nine = makeImageList("Journals/990", "nn", 2);
let alameda = makeImageList("Journals/Alameda-AdoxColorImplosion", "adox", 5);
let canonet1 = makeImageList("Journals/Canonet-I", "cn", 6);
let canonet2 = makeImageList("Journals/Canonet-II", "cn", 11);
let fortFunston = makeImageList("Journals/FortFunston", "ff", 5);
let la = makeImageList("Journals/LA", "la", 2);
let lakeNaci = makeImageList("Journals/LakeNacimiento-Adox", "adox", 6);
let oakland = makeImageList("Journals/Oakland-Colorplus", "oak", 11);
let pacifica = makeImageList("Journals/Pacifica-Portra400","pc", 10);
let pointReyes = makeImageList("Journals/PointReyes", "pr", 4);
let sf = makeImageList("Journals/SF-Portra400", "sf", 10);
let slz = makeImageList("Journals/SLZ", "slz", 8);
let suburbs = makeImageList("Journals/Suburbs-IlfordXP2", "sub", 5);

let journalImageSet = [
  new imageSet("VWLA", "", la, 1),
  new imageSet("San Lorenzo", "", slz, 2),
  new imageSet("The Suburbs", "", suburbs, 3),
  new imageSet("San Francisco", "", sf, 2),
  new imageSet("Pacifica", "", pacifica, 2),
  new imageSet("Lake Nacimiento", "", lakeNaci, 1),
  new imageSet("San Leandro", "", canonet2, 8),
  new imageSet("Fort Funston", "", fortFunston, 2),
  new imageSet("Alameda", "", alameda, 1),
  new imageSet("Fort Funston", "", fortFunston, 2),
  new imageSet("Untitled", "", canonet1, 5),
  new imageSet("990", "", nine, 1),
  new imageSet("Point Reyes", "", pointReyes, 3),
  new imageSet("Fort Funston", "", fortFunston, 2),
  new imageSet("VWLA", "", la, 2),
]

let imageSets = [
  new imageSet("1", "Eli", portImages, 1),
  new imageSet("Carlos + Karina", "Eli", carlosKarina, 20),
  new imageSet("3", "Eli", portImages, 4),
  new imageSet("4", "Eli", portImages, 5),
  new imageSet("5", "Eli", portImages, 6),
  new imageSet("6", "Eli", portImages, 7),
  new imageSet("7", "Eli", portImages, 8),
  new imageSet("8", "Eli", portImages, 1),
  new imageSet("8", "Eli", portImages, 2),
  new imageSet("ELi II", "eli", eliFair, 2),
]

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
      <Route path='/Journals' render={(props) => <Social images={journalImageSet}/>}/>
      <Route path='/Portraits' render={(props) => <Social images={portraitImageSet}/>}/>
      <Route path='/Social' render={(props) => <Social images={socialImageSet}/>}/>
    </Switch>
  </main>
)

export default Main
