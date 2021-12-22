import React from "react";
import Authors from "./Authors";
import SearchBox from "./SearchBox";

class AuthorPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: "",
            page: 1
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value, page:1})
    }

    handleNextClick = () => {
        this.setState({page:this.state.page+1})
    }

    handlePreviousClick = () => {
        this.setState({page:this.state.page-1})
     }

    render() {
        return (
            <div>
                <SearchBox label={"Search by author name"} search={this.state.search} handleSearch={this.handleSearch} />
                <Authors 
                    search={this.state.search} 
                    page={this.state.page}
                    handleNextClick={this.handleNextClick} 
                    handlePreviousClick={this.handlePreviousClick}
                />
            </div>
        )
    }

}

export default AuthorPage;