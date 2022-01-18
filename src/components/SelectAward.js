import React from "react";
import { Form, Container, Row } from "react-bootstrap";
   
/**
 * A dropdown list for selecting papers by award
 * 
 * The awards are queried from the API so that they are up 
 * to date.
 * 
 * @author Sylwia Krupa | w18015597
 */
class SelectAward extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            results: []
        }
    }

    componentDidMount() {
        let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/awards";
    
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

    render() {
           return (
            <Container>
                <Row className="mb-3 mx-1 col-8 col-md-4">
                    <Form.Select aria-label="Award" onChange={this.props.handleSelect} value={this.props.award}>
                        <option value=''>Filter by Award</option>
                        {this.state.results.map((award, i) => (<option key={i} value={award.award_type_id}> {award.name}</option> ))}
                    </Form.Select>
                </Row>
            </Container>
           )
       }
   }
   
export default SelectAward;