import React, { useReducer } from "react";
import FilmDisplayList from "../Products/FilmDisplays/FilmDisplayList";
import BookmarkList from "../Products/Bookmarks/BookmarkList";
import Button from '../UI/Button';
import Card from "../UI/Card";
import classes from "./Main.module.css";

const itemReducer = (state, action) => {
  if (action.item === "FILM_DISPLAYS") {
    return { item: "FILM_DISPLAYS" };
  }
  if (action.item === "BOOKMARKS") {
    return { item: "BOOKMARKS" };
  }
  return { item: "FILM_DISPLAYS" };
};

const Main = (props) => {
  const [itemDisplayState, dispatchItemDisplay] = useReducer(itemReducer, {
    item: "FILM_DISPLAYS",
  });

  const displaysHandler = () => {
    dispatchItemDisplay({ item: "FILM_DISPLAYS" });
  };

  const bookmarksHandler = () => {
    dispatchItemDisplay({ item: "BOOKMARKS" });
  };

  return (
    <Card>
      <div className={classes.items}>
        <Button type="button" onClick={displaysHandler}>Film Displays</Button>
        <Button type="button" onClick={bookmarksHandler}>Bookmarks</Button>
        {itemDisplayState.item === "FILM_DISPLAYS" ? (
          <FilmDisplayList displays={props.displays} />
        ) : itemDisplayState.item === "BOOKMARKS" ? (
          <BookmarkList bookmarks={props.bookmarks} />
        ) : null}
      </div>
    </Card>
  );
};

export default Main;
