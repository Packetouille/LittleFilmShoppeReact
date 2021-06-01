import { Fragment } from "react";
import BookmarkItem from "./BookmarkItem";
import classes from "../ItemList.module.css";

const BookmarkList = (props) => {
  return (
    <Fragment>
      <div className={classes.items}>
        {props.bookmarks.map((display) => (
          <BookmarkItem
            title={display.title}
            alt={display.alt}
            imgSrc={display.imgSrc}
            price={display.price}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BookmarkList;
