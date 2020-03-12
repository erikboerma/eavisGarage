import React from "react";
// import { withGlobalState } from 'react-globally';
// import NavbarPage from "./navbar/navbar";
import FeaturesPage from "./main/FeaturesPage";
import MasksPage from "./workImage/workImage";
import ContactPage from "./contact/contactPage";

const Home = () => (
    <div>
    
        <FeaturesPage/>
    <br />
        <MasksPage />
    <br />
        <ContactPage />
    </div>
  
  );
  
  
  
  export default Home;