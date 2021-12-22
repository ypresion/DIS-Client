import React from "react";
import Authors from "./Authors";
import SearchBox from "./SearchBox";

class AuthorPage extends React.Component {

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
                <SearchBox label={"Search by author name"} search={this.state.search} handleSearch={this.handleSearch} />
                <Authors search={this.state.search} />
            </div>
        )
    }

}

export default AuthorPage;