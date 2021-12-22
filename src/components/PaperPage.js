import React from "react";
import Papers from "./Papers";
import SearchBox from "./SearchBox";
import SelectAward from "./SelectAward";

class PaperPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            award: "",
            search: ""
        }
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value})
    }

    handleAwardSelect = (e) => {
        this.setState({award:e.target.value})
    }

    render() {
        return (
            <div>
                <SearchBox label={"Search by author name or paper title"} search={this.state.search} handleSearch={this.handleSearch} />
                <SelectAward award={this.state.award} handleSelect={this.handleAwardSelect}/>
                <Papers award={this.state.award} search={this.state.search} />
            </div>
        )
    }
    
}

export default PaperPage;