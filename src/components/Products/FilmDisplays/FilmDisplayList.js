import { Fragment } from "react";
import FilmDisplayItem from "./FilmDisplayItem";
import classes from "../ItemList.module.css";

const FilmDisplayList = (props) => {
  return (
    <Fragment>
      <div className={classes.items}>
        {props.displays.map((display) => (
          <FilmDisplayItem
            key={display.id}
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

export default FilmDisplayList;
