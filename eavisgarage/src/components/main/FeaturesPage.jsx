import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        Expert Residential and Commercial Garage Door Services
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Eavis Garage Doors has proudly served all of South Jersey, Delaware Valley, and Pennsylvania since 1950. We can repair all brands and model of garage doors and openers. We provide efficient and reliable residential and commercial garage door services. Whether you need a broken spring repaired or a new garage door and opener, Eavis Garage Door is the company for you.

We sell, install, service, and repair garage doors and openers. With over 65 years of experience, our garage door company is an authorized LiftMaster ®, Amarr ®, Clopay ®, and Wayne Dalton® dealer.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Service and Repair</h5>
                <p className="grey-text">
                  The certified garage door technicians at Eavis Garage Doors can repair, install, and maintain any brand and model of garage door. When it comes to servicing garage doors, we are the trusted experts. When your garage door malfunctions or wears, we are the company to call. We provide punctual and knowledgeable service.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Finance</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  enim ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;