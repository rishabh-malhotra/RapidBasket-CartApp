import React , { Component } from "react";
import {Form,FormControl,Button} from "react-bootstrap";

class Search extends Component{

    constructor(){
        super();
    }
    render(){
        return(
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>

        );
    }
}

export default Search;