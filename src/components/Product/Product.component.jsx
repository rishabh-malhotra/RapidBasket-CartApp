import React,{Component} from "react";

class Product extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        
    }


    render(){
        return(
            <div className="card">
                <div className="card-header">
                </div>
                <div className="card-detail"> 
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger">Add To Cart</button>
                </div>
            </div>
        );
    }
}


export default Product;