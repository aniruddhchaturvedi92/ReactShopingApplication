import React, { Component } from "react";
import {
  Button,
  Collapse,
  well,
  Form,
  Col,
  Row,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import {connect} from 'react-redux';
import {handleChange} from '../../actions/promoCodeAction';

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleChange = e => {
      this.props.handleChange(e);
  }
  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="Link"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          {this.state.open === false ? "Apply" : "Hide"} promo code
          {this.state.open === false ? " +" : " -"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInLineName">
                      <FormLabel>Promo Code </FormLabel>
                      <FormControl type="text" 
                      placeholder="Enter promo code"
                      value={this.props.PromoCode}
                      onChange={this.handleChange}></FormControl>
                    </FormGroup>
                    <Button 
                    block
                    bsStyle="success"
                    className="btn-round"
                    disabled={this.props.disabled}
                    onClick={this.props.giveDiscount}>
                    Apply </Button>
                  </Form>
                </Col>
              </Row>
            </well>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({

    promoCode : state.promoCode.value
})

export default connect(mapStateToProps,{handleChange})(PromoCode);
