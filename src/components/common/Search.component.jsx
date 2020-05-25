import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = (props) => {


    let handleSearch = (event) => {
        console.log("propasdasdasssssss",props)
        console.log("EVENT--------------------",event.target)
        console.log(event.target.value)
        event.preventDefault();
        props.onSearchProduct(event.target.value);

    }
    return (
        <React.Fragment>
            <Form inline>
                <FormControl type="text" placeholder="Search" aria-label="Search"   className="form-control mr-sm-2" value={props.searcht} onChange={(event) => handleSearch(event)} />
            </Form>
        </React.Fragment>
    );
}

export default Search;