import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Breakfast.css";
import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";

const Breakfast = () => {
    const [breakfastMenus, setBreakFastMenus] = useState([]);
    useEffect(() => {
        fetch("/foodsMenu.json")
            .then((res) => res.json())
            .then((data) => setBreakFastMenus(data));
    }, []);

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    return (
        <div className="container breakfast">
            {breakfastMenus.length === 0 && <ClockLoader color='#FF6F00' size={'300'} loading={true} css={override} display={'block'} />}
            <Row xs={1} md={3} className="g-4">
                {breakfastMenus.slice(0, 6).map((singleBreakfast) => (
                    <Col key={singleBreakfast.id}>
                        <Card>
                            <img variant="top" alt='img not found'  src={singleBreakfast.img} height={'300px'} width={'300px'} className='mx-auto' />
                            <Card.Body>
                                <Card.Title>{singleBreakfast.name}</Card.Title>
                                <Card.Text>{singleBreakfast.description}</Card.Text>
                                <Card.Subtitle>Price: {singleBreakfast.price}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Breakfast;
