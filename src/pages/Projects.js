import React, {useEffect, useState} from 'react';
import {Row, Col, Container, Image, Button, Modal} from 'react-bootstrap'

import { useEasybase } from 'easybase-react';

function Projects(){
    document.title = "Projects - Benjamin Bazan"

    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

    useEffect(() => {
        const mounted = async() => {
            const ebData = await db("PROJECTS").return()
            .orderBy({by: "type", sort: "asc"}, {by: "title", sort: "asc"}).all();

            setEasybaseData(ebData);
        }

        mounted();
    }, [db])

    const [show, setShow] = useState(false);
    const [img, setImg] = useState("");

    const handleClose = () => {
        setShow(false);
        setImg("");
    }

    function handleShow(i){
        setImg(i);
        setShow(true);
        
    
    }

    return(
        <Container>
            {easybaseData.map(ele =>
                <Row key={ele.title} >
                    <Col xs={12} sm={12} md={5} className="my-auto mb-3">
                        <Image src={ele.image} alt="Project Thumbnail" onClick={() => handleShow(ele.image)}fluid/>
                    </Col>
                    <Col xs={12} sm={12} md={7} >
                        {ele?.site ? (
                            <Row>
                                <h2><a href={ele.site}>{ele.title}</a></h2> 
                            </Row>
                        ) : (
                            <Row>
                                <h2>{ele.title}</h2>
                            </Row>
                        )}
                        <Row>
                            <p>{ele.comments}</p>
                        </Row>
                    </Col>
                    <hr/>
                </Row>
                
            )}
            
            <Modal show={show} onHide={handleClose} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title className="text-primary">Project Image</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Image src={img} alt="Enlarged Thumbnail" fluid/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default Projects;