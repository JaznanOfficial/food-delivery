import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ClockLoader } from 'react-spinners';
import { css } from "@emotion/react";


const Lunch = () => {
  const [lunchMenus, setLunchMenus] = useState([]);
  useEffect(() => {
      fetch("/foodsMenu.json")
          .then((res) => res.json())
          .then((data) => setLunchMenus(data));
  }, []);


  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    return (
      <div className="container breakfast">
      {lunchMenus.length === 0 && <ClockLoader color='#FF6F00' size={'300'} loading={true} css={override} display={'block'} />}
      <Row xs={1} md={3} className="g-4">
          {lunchMenus.slice(6, 12).map((singleLunch) => (
              <Col key={singleLunch.id}>
                  <Card>
                      <img variant="top" alt='img not found'  src={singleLunch.img} height={'300px'} width={'300px'} className='mx-auto'  />
                      <Card.Body>
                          <Card.Title>{singleLunch.name}</Card.Title>
                          <Card.Text>{singleLunch.description}</Card.Text>
                          <Card.Subtitle>Price: {singleLunch.price}</Card.Subtitle>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  </div>
    );
};

export default Lunch;