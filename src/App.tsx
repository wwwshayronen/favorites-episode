import React, { Fragment } from "react";
import FetchData from "./FetchData";
import HomePage from "./HomePage";

function App(): JSX.Element {
  return (
    <Fragment>
      <FetchData />
      <HomePage />
    </Fragment>
  );
}

export default App;
