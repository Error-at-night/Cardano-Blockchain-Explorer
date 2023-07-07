// React Imports
import { useContext } from 'react';

// React Router Dom Imports
import { Form } from 'react-router-dom';

// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';

// Context
import { Context } from '../../Layout/Layout';

// Sass
import '../../Sass/CardanoBlockchainExplorer.scss'

// HeroIcons
import BarIcon  from "@heroicons/react/24/solid/Bars2Icon";

// Components
import CountdownTimer from "../CountDownTimer"

const CardanoBlockchainExplorer = () => {
    const { handleSubmit, setAddress, address } = useContext(Context);
    return ( 
        <Container fluid="lg" className="my-4 p-4 cardano-blockchain-explorer">
            {/* // first row */}
            <Row className="first-row">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h2>Cardano Blockchain Explorer</h2>
                    <p className="mb-4">Scroll down to the address details section to check the address details</p>
                    <Form onSubmit={handleSubmit}>
                        <input type="search" value={address}
                            placeholder='Enter Cardano Address'
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input type="button" value="Search" />
                    </Form>
                </Col>
            </Row>
            {/* // second row */}
            <Row className="second-row mt-4 py-3 px-3 justify-content-sm-around align-items-center">
                <Col xs={12} sm={5} md={5} lg={2} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>ADA Price</p>
                            <p className='price'>$ 0.293217</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={5} md={5} lg={3} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>Market Cap</p>
                            <p className='price'>10, 281, 522, 462</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={5} md={5} lg={3} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>Total stake pools</p>
                            <p className='price'>3178</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={5} md={5} lg={3} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>Total Transactions</p>
                            <p className='price'>70, 573, 992</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={5} md={5} lg={2} className="column me-0 me-lg-3 mb-3 mb-lg-0 mt-0 mt-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>Epoch</p>
                            <p className='price'>422</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={5} md={5} lg={3} className="column me-0 me-lg-3 mb-3 mb-lg-0 mt-0 mt-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>Rewards Distributed</p>
                            <p className='price'>10.33m in Epoch 420</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={5} md={5} lg={3} className="column me-0 me-lg-3 mt-0 mb-3 mb-lg-0 mt-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>Total ADA Stake</p>
                            <p className='price'>22.79b</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={5} md={5} lg={3} className="column mt-0 mt-lg-3 py-2">
                    <div className='d-flex align-items-center ada-container'> 
                        <BarIcon width={20} height={25} className="barIcon"/>
                        <div className="ms-3">
                            <p className='ada'>Current Epoch Ends In</p>
                            <div>
                                <p className='price'><CountdownTimer/></p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default CardanoBlockchainExplorer;