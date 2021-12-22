import React from "react";
import Papers from "./Papers";
import SearchBox from "./SearchBox";

class PaperPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value})
    }

    render() {
        return (
            <div>
                <SearchBox label={"Search by author name or paper title"} search={this.state.search} handleSearch={this.handleSearch} />
                <Papers search={this.state.search} />
            </div>
        )
    }
    
}

export default PaperPage;