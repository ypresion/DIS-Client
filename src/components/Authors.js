import React from "react";
import Author from "./Author";

class Authors extends React.Component {

    constructor(props) {
        super(props)
        this.state = { results : [] }
    }

    render() {
        let noData = "" 
        if (this.state.results.length === 0) {
            noData = <p>No author data available.</p>
        }

        let filteredResults = this.state.results;
        if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
            filteredResults = this.state.results.filter(this.filterSearch);
        }

        return (
            <div>
                {noData}
                {filteredResults.map( (author, i) => (<Author author={author} />) )}
            </div>
        )
    }

    componentDidMount() {
        const url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/authors"
    
        fetch(url)
        .then( (response) => { 
            if (response.status === 200) {
                return response.json() 
              } else {
                throw Error(response.statusText);
              }
        })
        .then( (data) => {
            this.setState({results:data})
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });
    }

    filterSearch = (s) => {
        return (
            s.first_name.toLowerCase().includes(this.props.search.toLowerCase()) 
            || s.last_name.toLowerCase().includes(this.props.search.toLowerCase())
        )
    }
}

export default Authors;