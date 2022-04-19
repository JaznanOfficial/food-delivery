import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ClockLoader } from 'react-spinners';
import { css } from "@emotion/react";

const Dinner = () => {
  const [dinnerMenus, setDinnerMenus] = useState([]);
  useEffect(() => {
      fetch("/foodsMenu.json")
          .then((res) => res.json())
          .then((data) => setDinnerMenus(data));
  }, []);

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    return (
      <div className="container breakfast">
      {dinnerMenus.length === 0 && <ClockLoader color='#FF6F00' size={'300'} loading={true} css={override} display={'block'} />
      }
      <Row xs={1} md={3} className="g-4">
          {dinnerMenus.slice(12, 18).map((singleDinner) => (
              <Col key={singleDinner.id}>
                  <Card>
                      <img variant="top" alt='img not found' src={singleDinner.img} height={'300px'} width={'300px'} className='mx-auto'   />
                      <Card.Body>
                          <Card.Title>{singleDinner.name}</Card.Title>
                          <Card.Text>{singleDinner.description}</Card.Text>
                          <Card.Subtitle>Price: {singleDinner.price}</Card.Subtitle>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  </div>
    );
};

export default Dinner;