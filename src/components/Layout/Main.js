import React, { useReducer } from "react";
import Home from '../Pages/Home';
import Shoppe from '../Pages/Shoppe';
import Card from "../UI/Card";

const itemReducer = (state, action) => {
  if (action.page === "home") {
    return { page: "home" };
  }
  if (action.page === "about") {
    return { page: "about" };
  }
  if (action.page === "shoppe") {
    return { page: "shoppe" };
  }
  return { page: "home" };
};

const Main = (props) => {
  const [pageDisplayState, dispatchPageDisplay] = useReducer(itemReducer, {
    page: "shoppe",
  });

  const pageHandler = (event) => {
    dispatchPageDisplay({ page: "shoppe" });
  };

  return (
    <Card>
      {(pageDisplayState.page === 'home') ? <Home /> 
        : (pageDisplayState.page === 'shoppe') ? <Shoppe displays={props.displays} bookmarks={props.bookmarks} /> : null}
    </Card>
  );
};

export default Main;
