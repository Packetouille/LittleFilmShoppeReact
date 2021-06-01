import { Fragment } from "react";
import FilmDisplayList from '../FilmDisplays/FilmDisplayList';
import Card from '../UI/Card';

const Main = (props) => {
  return (
  <Card>
    <FilmDisplayList displays={props.displays} />
    <div>Bookmarks</div>
  </Card>
  );
};

export default Main;