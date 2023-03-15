import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function FavoriteModal(props) {
    const green = require('../../images/theGreen/theGreen2.jpg');
    const sol = require('../../images/Sol/SolCover.jpg');
    const identity = require('../../images/Identity/IdentityCover.jpg');
    const theU = require('../../images/TheU/TheUCover.jpg');

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="xl">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Compare Apartments
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container fluid>
        <Row className="justify-content-center">
            <Col xs={2} className="border"></Col>
            <Col xs={2} className="border"><b>The Green at West Village</b></Col>
            <Col xs={2} className="border"><b>Sol at West Village</b></Col>
            <Col xs={2} className="border"><b>Identity Apartment</b></Col>
            <Col xs={2} className="border"><b>The U Apartment</b></Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={2} className="border"></Col>
            <Col  xs={2} className="border d-flex justify-content-center align-items-center">
                <div style={{width: "100%"}}>
                    <img style={{width: "100%"}} src={green} alt={"no img"}></img>
                </div>
            </Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">
                 <div style={{width: "100%"}}>
                    <img style={{width: "100%"}} src={sol} alt={"no img"}></img>
                </div>
            </Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">
                <div style={{width: "100%"}}>
                    <img style={{width: "100%"}} src={identity} alt={"no img"}></img>
                </div>
            </Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">
                <div style={{width: "100%"}}>
                    <img style={{width: "100%"}} src={theU} alt={"no img"}></img>
                </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col style={{ height: '80px' }} xs={2} className="border d-flex justify-content-center align-items-center"><b>Rent</b></Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">$1100-$1500</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">$1100-$1500</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">$1100-$1500</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">$1100-$1500</Col>
          </Row>

          <Row className="justify-content-center">
            <Col style={{ height: '80px' }} xs={2} className="border d-flex justify-content-center align-items-center"><b>Central A/C</b></Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
          </Row>

          <Row className="justify-content-center">
            <Col style={{ height: '80px' }} md={2} className="border d-flex justify-content-center align-items-center"><b>Location</b></Col>
            <Col md={2} className="border d-flex justify-content-center align-items-center">West Davis</Col>
            <Col md={2} className="border d-flex justify-content-center align-items-center">West Davis</Col>
            <Col md={2} className="border d-flex justify-content-center align-items-center">Central Davis</Col>
            <Col md={2} className="border d-flex justify-content-center align-items-center">North Davis</Col>
          </Row>

          <Row className="justify-content-center">
            <Col style={{ height: '80px' }} xs={2} className="border d-flex justify-content-center align-items-center"><b>Close to Unitrans</b></Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">❌</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">❌</Col>
          </Row>

          <Row className="justify-content-center">
            <Col style={{ height: '80px' }} xs={2} className="border d-flex justify-content-center align-items-center"><b>Pet-friendly</b></Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">✔️</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">❌</Col>
            <Col xs={2} className="border d-flex justify-content-center align-items-center">❌</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default FavoriteModal;

