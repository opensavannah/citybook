import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import '../../styles/instructions.scss';

const ScrollLink = Scroll.Link;
export default class Header extends Component {
  render() {
    return (
      <section className="page-header">
        <div className="container">
          <Row>
            <Col xs={12}>
              <div className="organization-name">
                <h3>An <a href="http://opensavannah.org/" className="org-name">Open Savannah</a> Project</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={3}>
              <div className="center-logo">
                <object type="image/svg+xml" className="img-responsive main-logo" data="../../img/CityBookLogo.svg">
                  <img src="../../img/CityBookLogo.png" alt="CityBook Logo" />
                </object>
              </div>
              <h1 className="project-name">SavBook</h1>
              <h2 className="project-tagline">SavBook is a mobile web app that serves as your one-stop-shop for locating and making actual contact with resources and community contacts for your Savannah neighborhood.</h2>
              <a href="#/books/b6eb47a2-020e-4be1-844a-6a1a2979e8c5" target="_blank" className="btn btn-lg btn-block btn-blue">Open SavBook <Glyphicon glyph='new-window'/></a>
              <h3 className="project-status">Project Status: Beta</h3>
              <a href="http://forum.opensavannah.org/t/wiki-making-ongoing-contributions-to-savbook/112/" className="btn btn-lg btn-block btn-blue">Contribute to SavBook <Glyphicon glyph='heart' /></a>
            </Col>
            <Col xsHidden smHidden sm={8} smOffset={1} className="iframe-container">
              <Col sm={6} smOffset={3}>
                <span className='demo-phone-camera'></span>
                <span className='demo-phone-speaker'></span>
                <iframe className='demo-iframe' src="#/books/b6eb47a2-020e-4be1-844a-6a1a2979e8c5" width="100%" height="550px" frameBorder="0"></iframe>
                <span className='demo-iframe-bottom-line'></span>
              </Col>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
