import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = (props) =>{
    
let handleSearch = (event) =>{
    console.log(event.target.value)
    event.preventDefault();
    
}
        return (
            <React.Fragment>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" OnChange={handleSearch}/>
                </Form>
            </React.Fragment>
        );
}

export default Search;