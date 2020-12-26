import React, { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import Search from "../components/Search";
import ImgCard from "../components/ImgCard";

const HomeScreen = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Container>
        <Search searchText={(text) => setTerm(text)} />
        {isLoading ? (
          <Alert varient="info">Loading..</Alert>
        ) : (
          <Row>
            {images.map((image) => (
              <Col
                key={image.id}
                sm={12}
                md={6}
                lg={3}
                xl={4}
                className="imgContainer">
                <ImgCard image={image} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
