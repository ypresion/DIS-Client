import React from "react";
import Author from "./Author";

class Authors extends React.Component {

    constructor(props) {
        super(props)
        this.state = { results : [] }
    }

    render() {
        console.log(this.state.results);
        return (
            <div>
                {this.state.results.map( (author, i) => (<Author author={author} />) )}
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
}

export default Authors;