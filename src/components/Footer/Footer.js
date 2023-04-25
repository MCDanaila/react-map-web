import React from 'react';
import './Footer.css';
import logoUZH from '../../assets/media/uzh_logo.png';
import logoSIB from '../../assets/media/sib_logo.png';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = (props) => {
    console.log('[Footer.js] -> render');
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className='col'>
                    <table className="footer_table" width='270'>
                        <tr valign='top'>
                            <td colSpan='2' className="title">
                                <b>MICROBEATLAS</b>
                            </td>
                        </tr>
                        <tr className="image">
                            <td align='center' style={{ paddingRight: '5px', height: '30px' }}>
                                <img alt='' src={logoUZH} height='26' />
                            </td>
                            <td>
                                <a href="http://www.uzh.ch" target='_col'>University of Zurich</a>
                            </td>
                        </tr>
                        <tr className="image">
                            <td align='center' style={{ paddingRight: '5px', height: '30px' }}>
                                <img alt='' src={logoSIB} height='22' />
                            </td>
                            <td>
                                <a href="http://www.isb-sib.ch" target='_col'>Swiss Institute of Bioinformatics</a>
                            </td>
                        </tr>
                    </table>
                </Col>
                <Col>
                    <table border='0' className="footer_table" width='110'>
                        <tr>
                            <td colSpan='2' className="title">
                                <b><a href="http://www.uzh.ch">INFO</a></b>
                            </td>
                        </tr>
                        <tr style={{ paddingTop: '5px' }} className="link"><td ><a href="http://www.uzh.ch">News</a></td></tr>
                        <tr style={{ paddingTop: '5px' }} className="link"><td ><a href="http://www.uzh.ch">Contributors</a></td></tr>
                        <tr style={{ paddingTop: '5px' }} className="link"><td ><a href="http://www.uzh.ch">Contact</a></td></tr>
                    </table>
                </Col>
                <Col>
                    <table border='0' className="footer_table" width='150'>
                        <tr>
                            <td colSpan='2' className="title">
                                <b><a href="http://www.uzh.ch">RESOURCES</a></b>
                            </td>
                        </tr>
                        <tr><td style={{ paddingTop: '5px' }}><a href="http://www.uzh.ch">Software</a></td></tr>
                        <tr><td style={{ paddingTop: '5px' }}><a href="http://www.uzh.ch">Publications</a></td></tr>
                    </table>
                </Col>
                <Col>
                    <table border='0' className="footer_table" width='200'>
                        <tr>
                            <td colSpan='2' className="title">
                                <b>VERSION</b>
                            </td>
                        </tr>
                        <tr><td style={{ paddingTop: '5px' }}><b>microbeAtlas 1.0</b></td></tr>
                        <tr><td style={{ paddingTop: '5px' }}><a href="https://github.com/jfmrod/MAPseq">MAPseq</a></td></tr>
                        <tr><td style={{ paddingTop: '5px' }}><a href="http://www.uzh.ch">Licencing</a></td></tr>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;