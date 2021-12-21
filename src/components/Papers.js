import React from "react";
import Paper from "./Paper";

class Papers extends React.Component {

    constructor(props) {
        super(props)
        this.state = { results : [] }
    }

    render() {
        let noData = "" 
        if (this.state.results.length === 0) {
            noData = <p>No data</p>
        }

        return (
            <div>
                {noData}
                {this.state.results.map( (paper, i) => (<Paper paper={paper} />) )}
            </div>
        )
    }

    componentDidMount() {
        let url;
        if (this.props.randomPaper) {
            url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?id=random"
        } else {
            url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/papers"

        }

        if (this.props.authorid !== undefined) {
            url += "?authorid=" + this.props.authorid
        }
    
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

export default Papers;