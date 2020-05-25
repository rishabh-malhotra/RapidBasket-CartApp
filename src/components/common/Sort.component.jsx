import React from "react";
class SortComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleSorting=this.handleSorting.bind(this);
    }

    handleSorting(event){
        console.log(event.target.value);
        event.target.value==="asc"?this.props.handleSort(0):this.props.handleSort(1);
    }

    render() {
        return (
            <div className="pull-right">
                <div className="form-inline">
                        <label htmlFor="sort">Sort by:</label>
                        <select style={{width:"70%"}} 
                            className="form-control"
                            id="sort"
                            onChange={(event)=>this.handleSorting(event)}
                        >
                            <option value="init">- Select -</option>
                            <option value="asc">Lowest price</option>
                            <option value="desc">Highest price</option>
                        </select>
                    </div>
                </div>
        )
    }
}

export default SortComponent;

// onChange={this.onChange.bind(this)}