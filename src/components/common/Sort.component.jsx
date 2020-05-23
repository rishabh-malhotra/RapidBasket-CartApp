import React from "react";
class SortComponent extends React.Component {
    render() {
        return (
            <div className="pull-right">
                <div className="form-inline">
                        <label htmlFor="sort">Sort by:</label>
                        <select style={{width:"70%"}} 
                            className="form-control"
                            id="sort"
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