import React from "react";
// import { withGlobalState } from 'react-globally';
// import NavbarPage from "./navbar/navbar";
import FeaturesPage from "./main/FeaturesPage";
import MasksPage from "./workImage/workImage";
import ContactPage from "./contact/contactPage";

const Home = () => (
    <div>
    <div id="features" className="fix">
    
        <FeaturesPage/>
        </div>
    <br />
    <div id="work" className="fix">
        <MasksPage />
        </div>
    <br />
    <div id="contact" className="fix">
        <ContactPage />
        </div>
    </div>
  
  );
  
  
  
  export default Home;