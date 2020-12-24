import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ImgCard = ({ image }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image.webformatURL} />
        <Card.Body>
          <Card.Title>{image.tags}</Card.Title>
          <Card.Text>
            <ListGroup horizontal className="list">
              <ListGroup.Item className="list-li">
                views {image.views}
              </ListGroup.Item>
              <ListGroup.Item className="list-li">
                likes {image.likes}
              </ListGroup.Item>
              <ListGroup.Item className="list-li">
                comments {image.comments}
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImgCard;
