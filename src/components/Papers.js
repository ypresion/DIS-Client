import React from "react";
import Paper from "./Paper";
import { Container, Row, Col, Button } from "react-bootstrap";

/**
 * Papers component.
 * 
 * It will render a list of paper components which can be 
 * filetered and searched through. 
 * 
 * @author Sylwia Krupa | w18015597
 */
class Papers extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            results: []
        }
    }

    render() {
        //Handle no data returned
        let noData = "" 
        if (this.state.results.length === 0) {
            noData = <p>No papers data available.</p>
        }

        //Handle search and filter by award
        let filteredResults = this.state.results;
        if ((this.props.award !== undefined)) {
            filteredResults = filteredResults.filter(this.filterByAward);
        }
        if ((filteredResults.length > 0) && (this.props.search !== undefined)) {
            filteredResults = filteredResults.filter(this.filterSearch);
        }

        //Add pagination - display 10 paper components per page
        let buttons = ""
        if (this.props.page !== undefined) {
            const pageSize = 10
            let pageMax = this.props.page * pageSize
            let pageMin = pageMax - pageSize

            buttons = (
                <Container>
                    <Row className="my-3 justify-content-around align-items-center">
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
                {filteredResults.map( (paper, i) => (<Paper key={i} count={i} paper={paper} />) )}
                {buttons}
            </div>
        )
    }

    componentDidMount() {
        this.fetchPapers();
    }
    
    //Fetch papers based on props provided
    fetchPapers = () => {
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
            this.setState({results:data.results})
        })
        .catch ((err) => { 
            console.log("something went wrong ", err) 
        });
    }

    filterSearch = (paper) => {
        return (
            paper.title.toLowerCase().includes(this.props.search.toLowerCase()) 
            || paper.authors.toLowerCase().includes(this.props.search.toLowerCase())
        )
    }

    filterByAward = (paper) => {
        let awardId = paper.awards.match(/\d/g).join("");
        return awardId.includes(this.props.award) || this.props.award==="";
    }
    
}

export default Papers;