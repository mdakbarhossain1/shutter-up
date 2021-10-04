import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import bannarImage from '../../images/young-photographer-banner.png'
import ShowServices from '../ShowServices/ShowServices';
import ShowGallery from '../ShowGallery/ShowGallery';
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {

    // Use State For services
    const [servicess, setServicess] = useState([]);
    // Use State For Gallery Images
    const [gallerys, setGallerys] = useState([]);

    // Data Load for hero services section
    useEffect(() => {
        fetch('heroservices.JSON')
            .then(res => res.json())
            .then(data => setServicess(data))
    }, []);

    // data load for Gallery Section
    useEffect(() => {
        fetch('homeGalleryData.JSON')
            .then(res => res.json())
            .then(data => setGallerys(data))
    }, [])






    return (
        <div>
            <div className="hero-section">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="hero-info">
                                <h1>We Are Professional <br />
                                    Photographer </h1>
                                <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                                <Link to="/services"><button> Enroll Our Course </button></Link>
                            </div>
                        </Col>
                        <Col md={4} className="bannar-image">
                            <img src={bannarImage} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="text-center">
                <h1 className="text-center my-3 py-2">Our Services</h1>
                {/* service section  */}
                <Row className="py-2 my-2">
                    {
                        servicess.map(services => <ShowServices key={services.id} services={services}></ShowServices>)
                    }
                </Row>

                {/* Gallery Section  */}
                <h1 className="text-center my-3 py-2">Gallery</h1>
                <Row className="g-2 my-2 py-2">
                    {
                        gallerys.map(image => <ShowGallery key={image.id} image={image}></ShowGallery>)
                    }

                </Row>
            </Container>

        </div>
    );
};

export default Home;