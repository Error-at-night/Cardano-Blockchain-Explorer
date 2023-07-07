// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';

// react imports
import { useContext } from 'react';

// Context
import { Context } from '../../Layout/Layout';

// Sass
import "../../Sass/CardanoAddressDetails.scss"

// Components
import Error from "../Error";

const CardanoAddressDetails = () => {
    const { data, error } = useContext(Context);
    return (
        <>
            <Container fluid="lg" className="my-4 p-4 cardano-address-details">
                <h2 className="mb-4">Address Details</h2>
                {error && <Error error={error}/>}
                {data &&
                    <div>
                        <Row className="justify-content-between">
                            {/* <Col xs={12} sm={12} md={6} lg={5} className="">
                                <h4>Transaction Hash</h4>
                                <p id=""><span>{data.txHash}</span></p>
                            </Col> */}
                            <Col xs={12} sm={4} md={4} lg={4} className="mb-4">
                                <h4>Transaction Index</h4>
                                <p>{data.txIndex}</p>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4} className="mb-4">
                                <h4>Type</h4>
                                <p>{data.type}</p>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4} className="mb-4">
                                <h4>Block TIme</h4>
                                <p>{data.blockTime}</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            <Col xs={12} sm={4} md={4} lg={4} className="mb-4">
                                <h4>Block Height</h4>
                                <p>{data.blockHeight}</p>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4} className="mb-4">
                                <h4>Quantity</h4>
                                <p>{data.amountQuantity}</p>
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <h4>Unit</h4>
                                <p>{data.amountUnit}</p>
                            </Col>
                        </Row>
                    </div>
                }
                </Container>
        </>
    );
}
 
export default CardanoAddressDetails;