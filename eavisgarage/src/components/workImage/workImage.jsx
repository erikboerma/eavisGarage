import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import commercialOne from "../../assets/commercialOne.jpg";
import commercialTwo from "../../assets/commercialTwo.jpg";
import singleLarge from "../../assets/singleLarge.jpg";
import threeDoors from "../../assets/threeDoors.jpg";
import twoDoors from "../../assets/twoDoors.jpg";
import twoDoors1 from "../../assets/twoDoors1.jpg";





class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
          <MDBView hover zoom>
            <img src={commercialOne} className="img-fluid z-depth-4" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
              <MDBView hover zoom>
            <img src={commercialTwo} className="img-fluid z-depth-4-half"
              alt="" />
              </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
          <MDBView hover zoom>
            <img src={singleLarge} className="img-fluid z-depth-4" alt="" />
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
          <MDBView hover zoom>
            <img src={threeDoors} className="img-fluid z-depth-4" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
          <MDBView hover zoom>
            <img src={twoDoors} className="img-fluid z-depth-4" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
          <MDBView hover zoom>
            <img src={twoDoors1} className="img-fluid z-depth-4" alt="" />
          </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;