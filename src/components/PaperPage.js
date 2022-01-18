import React from "react";
import Papers from "./Papers";
import SearchBox from "./SearchBox";
import SelectAward from "./SelectAward";

/**
 * Paper page component.
 * 
 * It will render a list of paper components, along with 
 * a search box and a select component. 
 * 
 * @author Sylwia Krupa | w18015597
 */
class PaperPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            award: "",
            search: "",
            page: 1
        }
        this.handleAwardSelect = this.handleAwardSelect.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value})
    }

    handleAwardSelect = (e) => {
        this.setState({award:e.target.value})
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
                <SearchBox label={"Search by author name or paper title"} search={this.state.search} handleSearch={this.handleSearch} />
                <SelectAward award={this.state.award} handleSelect={this.handleAwardSelect}/>
                <Papers 
                    award={this.state.award} 
                    search={this.state.search} 
                    page={this.state.page}
                    handleNextClick={this.handleNextClick} 
                    handlePreviousClick={this.handlePreviousClick}
                />
            </div>
        )
    }
    
}

export default PaperPage;