import { Fragment } from "react";
import "./App.css";
import BOOKMARKS from "./assets/data/Bookmarks_Data";
import DISPLAYS from "./assets/data/Displays_Data";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
};

export default App;
