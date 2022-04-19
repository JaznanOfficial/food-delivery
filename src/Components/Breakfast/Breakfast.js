import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Breakfast = () => {
    const [breakfastMenus, setBreakFastMenus] = useState([]);
    useEffect(() => {
        fetch("/foodsMenu.json")
            .then((res) => res.json())
            .then((data) => setBreakFastMenus(data));
    }, []);
    return (
        <div className="container">
            <Row xs={1} md={3} className="g-4">
                {breakfastMenus.map((singleBreakfast) => (
                    <Col
                    key={singleBreakfast.id}
                    >
                        <Card>
                            <Card.Img variant="top" src={singleBreakfast.img} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Breakfast;
