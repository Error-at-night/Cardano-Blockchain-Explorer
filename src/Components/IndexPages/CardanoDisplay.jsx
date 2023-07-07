// Bootstrap Imports
import { Container, Row, Col } from "react-bootstrap";

// Components
import CardanoBlockchainExplorer from "./CardanoBlockchainExplorer";
import Footer from "./Footer";
import CardanoAddressDetails from "./CardanoAddressDetails";
import ScrollToTopButton from "../ScrollToTopButton";

const CardonDisplay = () => {
    return ( 
        <Container fluid="lg">
            <ScrollToTopButton/>
            <Row className="">
                <Col>
                    <CardanoBlockchainExplorer/>
                </Col>
            </Row>
            <Row className="">
                <Col>
                    <CardanoAddressDetails/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    );
}
 
export default CardonDisplay;
