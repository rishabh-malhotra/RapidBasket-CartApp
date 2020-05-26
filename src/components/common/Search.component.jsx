import React from "react";
import { Form, FormControl } from "react-bootstrap";

const Search = (props) => {


    let handleSearch = (event) => {
      
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