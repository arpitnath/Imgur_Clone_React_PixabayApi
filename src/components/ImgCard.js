import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import Img from "react-cloudimage-responsive";


const ImgCard = ({ image }) => {
  const [incrementLikes, setIncrementLikes] = useState(image.likes);

  const incLikes = () => {
    image.likes = image.likes + 1;
    setIncrementLikes(image.likes);
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className="cardimg">
        <Img variant="top" src={image.webformatURL} />
        <Card.Body>
          <Card.Title>{image.tags}</Card.Title>
          <Card.Text className="card_body">
            <ListGroup horizontal className="list">
              <ListGroup.Item className="list-li">
                views {image.views}
              </ListGroup.Item>
              <ListGroup.Item className="list-li">
                <Button onClick={incLikes}>likes {incrementLikes}</Button>
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
