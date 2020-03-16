import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact";
import logo from "../../assets/eavisDoorsLogo.png";
import "../style.css";

const FeaturesPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5 Oswald">
        <img src={logo} />
        <br />
        Eavis Garage Door Specialists<br /><h3>Your neighborhood Garage Door expert</h3>
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        With over 65 years of experience, Eavis Garage Doors has proudly served all of South Jersey, Delaware
        Valley, and Pennsylvania since 1950. We repair all brands and models
        of garage doors and openers. We provide efficient and reliable
        residential and commercial garage door services. Whether you need a
        broken spring repaired or a new garage door and opener, Eavis Garage
        Door is the company for you. We sell, install, service, and repair
        garage doors and openers.</p> 
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">Eavis Garage
        Door company is an authorized dealer for LiftMaster®, Amarr®, Clopay®, and Wayne
        Dalton®.
      </p>

      <MDBRow>
        <MDBCol lg="2" className="text-center">
          
        </MDBCol>
        <MDBCol lg="10">
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Service and Repair</h5>
              <p className="grey-text">
                The certified garage door technicians at Eavis Garage Doors can
                repair, install, and maintain any brand and model of garage
                door. When it comes to servicing garage doors, we are the
                trusted experts. When your garage door malfunctions or wears, we
                are the company to call. We provide punctual and knowledgeable
                service.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">
                Why choose Eavis Garage Doors specialists
              </h5>
              <ul className="grey-text">
                <li>All work guaranteed</li>
                <li>Family owned & operated for over 3 Generations</li>
                <li>No hidden fees and competitive pricing</li>
                <li>Fully licensed & insured</li>
                <li>No sub-contractors, ALL FAMILY</li>
                <li>24 hour Emergency service available</li>
              </ul>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Services</h5>
              <ul className="grey-text">
                <li>Garage Door Openers Repair</li>
                <li>Garage Door Fixes and Replacement</li>
                <li>Garage Door Weather Seal Replacement</li>
                <li>Complete Garage Door Replacement</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesPage;
