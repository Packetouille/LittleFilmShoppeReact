import { Fragment } from "react";
import "./App.css";
import BOOKMARKS from "./assets/data/Bookmarks_Data";
import DISPLAYS from "./assets/data/Displays_Data";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";

const App = () => {
  const homePageHandler = () => {
    console.log('home clicked!');
  };

  const aboutPageHandler = () => {
    console.log('about clicked!');
  };

  const shoppePageHandler = () => {
    console.log('shoppe clicked!');
  };

  return (
    <Fragment>
      <Header onHomeHandler={homePageHandler} onAboutHandler={aboutPageHandler} onShoppeHandler={shoppePageHandler} />
      <Main displays={DISPLAYS} bookmarks={BOOKMARKS} />
      <Footer />
    </Fragment>
  );
};

export default App;
