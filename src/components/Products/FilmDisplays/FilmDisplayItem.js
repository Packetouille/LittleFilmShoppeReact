import { Fragment } from "react";
import classes from "../Item.module.css";

const FilmDisplayItem = (props) => {
  return (
    <Fragment>
      <div className={classes["item-name"]}>{props.title}</div>
      <img className={classes["item-img"]} src={props.imgSrc} alt={props.alt} />
      <div className={classes["item-details"]}>
        <span className={classes["item-price"]}>${props.price}</span>
        <button className={`${classes["btn"]} ${classes["item-btn"]}`} type="button">
          ADD TO CART
        </button>
      </div>
    </Fragment>
  );
};

export default FilmDisplayItem;