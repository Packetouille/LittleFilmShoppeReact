import { Fragment } from "react";
import "./App.css";
import BOOKMARKS from "./assets/data/Bookmarks_Data";
import DISPLAYS from "./assets/data/Displays_Data";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main displays={DISPLAYS} bookmarks={BOOKMARKS} />
      <Footer />
    </Fragment>
  );
};

export default App;
