import React, { Component } from "react";
import { Button, Collapse, well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render()
   {
    return (
      <div>
          <React.StrictMode>
        <Button
          className="item-details-button"
          bsstyle="Link"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          {this.state.open === false ? "Show" : "Hide"} item details
          {this.state.open === false ? " +" : " -"}
        </Button>
        
        <Collapse in={this.state.open}>
          <div>
            <well>
            <br/>
              <Media>          
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                  />                      
              
              <Media.Body>
                  <p> Red & Black chair with full comfortable and advance functionality</p>
                  <Row className="show-grid"> 
                  <Col md={6}>
                  <strong>Rs {this.props.price}</strong>
                  <br/>
                  <strong className="price-strike">Rs {this.props.price} </strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                  </Row>
              </Media.Body>
              </Media>
            </well>
          </div>
        </Collapse>
        </React.StrictMode>
      </div>
    );
  }
}
