import React from "react";
import { Form, Button, FormControl, Row, Col } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Form inline className="search">
        <Col md={10}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 searchbar"
          />
        </Col>
        <Col md={2}>
          <Button
            type="submit"
            variant="success"
            size="lg"
            className="btn-search">
            Search
          </Button>
        </Col>
      </Form>
    </>
  );
};

export default Search;
