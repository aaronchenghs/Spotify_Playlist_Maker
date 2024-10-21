import React from "react";
import "./_Home.styles.css";
import { CopyFooter } from "../Common/CopyFooter/CopyFooter";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the BPM App.</p>

      {CopyFooter}
    </div>
  );
};

export default Home;
