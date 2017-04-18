import React, { Component } from 'react';
import '../../styles/instructions.scss';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      showModal: true
    });
  };

  close() {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <section className="page-footer">
        <div className="container">
          <Row>
            <Col xs={12}>
              <p className="footer-text"><Glyphicon glyph="copyright-mark" /> 2017 - <a href="http://opensavannah.org/" className="footer-link">Open Savannah</a>, a <a href="https://www.codeforamerica.org/join-us/volunteer-with-us" className="footer-link">Code for America Brigade</a>. Built with <Glyphicon glyph="heart"/> by <span className="footer-link" onClick={this.open}>these awesome contributors</span>.</p>
            </Col>
          </Row>
        </div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>SavBook.io Contributors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Contributor name goes here</p>
            <p>Contributor name goes here</p>
            <p>Contributor name goes here</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}
