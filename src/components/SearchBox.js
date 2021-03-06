import React from "react";
import { InputGroup, FormControl, Container, Row } from "react-bootstrap";
   
/**
 * A searchbox component.
 * 
 * @author Sylwia Krupa | w18015597
 */
class SearchBox extends React.Component {

    render() {
           return (
            <Container>
                <Row className="justify-content-center">
                    <InputGroup className="my-3 col-12 col-md-8">
                        <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        value={this.props.search}
                        onChange={this.props.handleSearch}
                        />
                        <InputGroup.Text id="basic-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </InputGroup.Text>
                    </InputGroup>
                </Row>
            </Container>
           )
       }
   }
   
export default SearchBox;