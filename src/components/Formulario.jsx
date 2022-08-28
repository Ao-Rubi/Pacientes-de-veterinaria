import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Formulario = () => {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Header className='fw-semibold'>Llene el formulario para crear una cita</Card.Header>

                    <Card.Body>
                        <Row>

                            <Col xs={6} md={6} lg={6}>
                                <Row>
                                    <Col xs={12} md={12} lg={12} className="pb-4 mb-2">Nombre de mascota:</Col>
                                    <Col xs={12} md={12} lg={12} className="pb-4 mb-1">Nombre de dueño:</Col>
                                    <Col xs={12} md={12} lg={12} className="pb-4 mb-3">Fecha:</Col>
                                    <Col xs={12} md={12} lg={12}>Sintomas:</Col>
                                </Row>
                            </Col>

                            <Col xs={6} md={6} lg={6}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="nombreMascota">
                                        <Form.Control type="text" placeholder="Nombre de mascota" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="nombreDuenio">
                                        <Form.Control type="text" placeholder="Nombre del dueño" />
                                    </Form.Group>

                                    <Row>
                                        <Col xs={5} md={5} lg={5}>
                                            <Form.Group className="mb-3" controlId="fecha">
                                                <Form.Control type="date" />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={7} md={7} lg={7}>
                                            <Form.Group className="mb-3 d-flex align-items-center" controlId="hora">
                                                <Form.Label className='me-4'>Hora:</Form.Label>
                                                <Form.Control type="time"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group controlId="sintomas">
                                        <Form.Control as="textarea" rows={1} />
                                    </Form.Group>

                                </Form>
                            </Col>

                        </Row>

                        {/* <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <div className='d-flex justify-content-around mt-4'>
                                <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicPassword">
                                    <Form.Label className='me-4'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicPassword">
                                    <Form.Label className='me-4'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form> */}

                    </Card.Body>

                    <Card.Footer className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit">Agregar nueva cita</Button>
                    </Card.Footer>

                </Card>
            </Container>    
        </div>
    );
};

export default Formulario;