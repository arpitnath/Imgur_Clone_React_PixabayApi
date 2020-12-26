import React, { useState } from "react";
import { Button, Col, Form, FormControl } from "react-bootstrap";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const SearchFn = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <>
      <Form onSubmit={SearchFn} inline className="search">
        <Col md={10}>
          <FormControl
            onChange={(e) => setText(e.target.value)}
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
