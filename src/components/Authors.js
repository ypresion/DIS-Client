import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Author from "./Author";

/**
 * An authors component.
 * 
 * It will render a list of author components and allow 
 * to filter through them by award or search by name.
 * 
 * @author Sylwia Krupa | w18015597
 */
class Authors extends React.Component {

    constructor(props) {
        super(props)
        this.state = { results : [] }
    }

    render() {
        //Handle no data returned
        let noData = "" 
        if (this.state.results.length === 0) {
            noData = <p>No author data available.</p>
        }

        //Handle search
        let filteredResults = this.state.results;
        if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
            filteredResults = this.state.results.filter(this.filterSearch);
        }

        //Add pagination - display 10 author components per page
        let buttons = ""
        if (this.props.page !== undefined) {
            const pageSize = 10
            let pageMax = this.props.page * pageSize
            let pageMin = pageMax - pageSize

            buttons = (
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col className="col-1"><Button variant="outline-primary" onClick={this.props.handlePreviousClick} disabled={this.props.page <= 1}>Previous</Button></Col>
                        <Col className="col-2 text-center"><span>Page {this.props.page} of {Math.ceil(filteredResults.length / pageSize)}</span></Col>
                        <Col className="col-1"><Button variant="outline-primary" onClick={this.props.handleNextClick} disabled={this.props.page >= Math.ceil(filteredResults.length / pageSize)}>Next</Button></Col>
                    </Row>
                </Container>
             )
             filteredResults = filteredResults.slice(pageMin,pageMax)
         }

        return (
            <div>
                {noData}
                {filteredResults.map( (author, i) => (<Author key={i} count={i} author={author} />) )}
                {buttons}
            </div>
        )
    }

    //Fetch author data
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
            this.setState({results:data.results})
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