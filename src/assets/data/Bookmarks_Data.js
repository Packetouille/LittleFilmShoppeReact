import aliensImgSrc from '../images/bookmarks/Aliens Bookmark 3.png';
import rearWindowImgSrc from '../images/bookmarks/Rear Window Bookmark 3.png';
import flyImgSrc from '../images/bookmarks/The Fly Bookmark 3.JPG'

const BOOKMARKS = [
  {
    id: Math.random(),
    title: "Aliens",
    imgSrc: aliensImgSrc,
    price: 20,
  },
  {
    id: Math.random(),
    title: "Rear Window",
    imgSrc: rearWindowImgSrc,
    price: 20,
  },
  {
    id: Math.random(),
    title: "The Fly",
    imgSrc: flyImgSrc,
    price: 20,
  },
];

export default BOOKMARKS;
