// Bootstrap Imports
import { Container, Row, Col } from "react-bootstrap";

// react imports
import { useContext } from "react";

// Components
import CardanoBlockchainExplorer from "./CardanoBlockchainExplorer";
import Footer from "./Footer";
import CardanoAddressDetails from "./CardanoAddressDetails";
import ScrollToTopButton from "../ScrollToTopButton";
import { Context } from "../../Layout/Layout";

const CardonDisplay = () => {
    const { data } = useContext(Context)
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