import React from "react";
import FilmDisplayList from "../Products/FilmDisplays/FilmDisplayList";
import BookmarkList from "../Products/Bookmarks/BookmarkList";
import Card from "../UI/Card";

const Main = (props) => {
  return (
    <Card>
      <FilmDisplayList displays={props.displays} />
      <BookmarkList bookmarks={props.bookmarks} />
    </Card>
  );
};

export default Main;
