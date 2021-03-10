import React, { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import Search from "../components/Search";
import ImgCard from "../components/ImgCard";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";


const HomeScreen = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const cloudimageConfig = {
  token: "auuxvwhdvq",
  baseURL: "https:auuxvwhdvq.cloudimg.io/v7/",
  presets: {
      xs: '(max-width: 575px)', // up to 575    PHONE
      sm: '(min-width: 576px)', // 576 - 767    PHABLET
      md: '(min-width: 768px)', // 768 - 991    TABLET
      lg: '(min-width: 992px)', // 992 - 1199   SMALL_LAPTOP_SCREEN
      xl: '(min-width: 1200px)' // from 1200    USUALSCREEN
  },
  placeholderBackground: "url('https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333_960_720.png') 50% 50% no-repeat"
}

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
    console.log(images)
  return (
    <>
      <Container>
      <CloudimageProvider config={cloudimageConfig}>
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
        </CloudimageProvider>
      </Container>
    </>
  );
};

export default HomeScreen;
