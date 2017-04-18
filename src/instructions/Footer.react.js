import React, { Component } from 'react';
import '../../styles/instructions.scss';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class Footer extends Component {

  render() {
    return (
      <section className="page-footer">
        <div className="container">
          <Row>
            <Col xs={12}>
              <p className="footer-text"><Glyphicon glyph="copyright-mark" /> 2017 - <a href="http://opensavannah.org/" className="footer-link">Open Savannah</a>, a <a href="https://www.codeforamerica.org/join-us/volunteer-with-us" className="footer-link">Code for America Brigade</a>. Built with <Glyphicon glyph="heart"/> by <span className="footer-link">these awesome contributors</span>.</p>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
