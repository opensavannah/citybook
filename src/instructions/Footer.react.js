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

  // componentDidMount() {
  //   let listOfContributors = ['Chelsey Beck', 'Brendan Hegarty', 'Patricia Metheuse Stewart'];
  //   console.log('listOfContributors: ' + listOfContributors)
  //   listOfContributors.forEach((person) => {
  //     console.log('person: ' + person);
  //     let para = document.createElement('p');
  //     console.log('para: ' + para);
  //     let name = document.createTextNode(person);
  //     console.log('name: ' + name);
  //     para.appendChild(name);
  //     console.log(para);
  //     document.getElementById('contributor-list').appendChild(para);
  //   });
  // }

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
              <div id="contributor-list">
                <p>Chelsey Beck</p>
                <p>Brendan Hegarty</p>
                <p>Patricia Metheuse Stewart</p>
                <p>Adrian Oldham</p>
                <p>Julia Muller</p>
                <p>Zakri Kneebone</p>
                <p>Rachel Gardner</p>
                <p>Penny Clarke</p>
                <p>Nick Helmholdt</p>
                <p>Jenny McCord</p>
                <p>Kevin Lawver</p>
                <p>Aaron Pompei</p>
                <p>Chris Parrish</p>
                <p>Saja Aures</p>
                <p>Catherine Maguire</p>
                <p>Michael DeVane</p>
                <p>Brian Young</p>
                <p>Josef Siebert</p>
                <p>Muhammad Burhan</p>
                <p>Luanne Serieux-Lubin</p>
                <p>Rob Lingle</p>
                <p>Brandon Hunter</p>
                <p>Karen Buschow</p>
                <p>Nick Palumbo</p>
                <p>Sarah Walters</p>
                <p>Gary Skogilind</p>
                <p>Cole Woodyard</p>
                <p>CJ Beck</p>
                <p>Amy Livingood</p>
                <p>Carl V. Lewis</p>
                <p>Luke Golden</p>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}
