import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

var styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontweight: 800
  }
};
export default class PickupSavings extends Component {
  render() {     
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
                <Tooltip id="tootip">
           <p> Test Tooltip</p>
          </Tooltip>
            }
          >
            <div style={styles.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} ms={6}>
          Rs {this.props.price}
        </Col>
      </Row>
    );
  }
}
