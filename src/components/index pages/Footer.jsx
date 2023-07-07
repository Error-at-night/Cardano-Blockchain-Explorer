// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';

// React Router Dom imports
import { Link } from 'react-router-dom';

// Context
import { Context } from '../../Layout/Layout';

// Sass
import "../../Sass/Footer.scss"

const Footer = () => {
    return ( 
        <Container fluid="xxl" className="mt-4 mb-5 p-4 footer">
            <Row className="">
                <Col xs={12} sm={12} md={4} lg={4} className="mb-2 mb-md-0">
                    <h4>Cardano</h4>
                    <p className="feature">Feature rich blockchain explorer and analytics platform for Cardano</p>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="mt-2 mt-md-0 mb-4 mb-md-0">
                    <h4>Useful links</h4>
                    <div><Link>Typhon wallet</Link></div>
                    <div><Link>Cardano Dev Portal</Link></div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="">
                    <h4>Cardanoscan</h4>
                    <div><Link>Contact Us</Link></div>
                    <div><Link>Terms and Conditions</Link></div>
                    <div><Link>Privacy Policy</Link></div>
                </Col>
            </Row>
            <Row className="align-items-center mt-4 mt-md-3">
                <Col xs={12} sm={12} md={4} lg={4}>
                    <h4>Social Links</h4>
                    <div><Link><i className="fa-brands fa-twitter"></i><span className="ms-2">Twitter</span></Link></div>
                    <div><Link><i className="fa-brands fa-facebook"></i><span className="ms-2">Facebook</span></Link></div>
                    <div><Link><i className="fa-brands fa-instagram"></i><span className="ms-2">Instragram</span></Link></div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="mt-4 mt-md-0 mb-4">
                    <h4>Official Pools</h4>
                    <div> ❤ <Link> CSN2</Link></div>
                    <div> ❤ <Link> CSN1</Link></div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="coinGecko">
                    <p>Price and MarketCap info provided by <Link>CoinGecko</Link> </p>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Footer;