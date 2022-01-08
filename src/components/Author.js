import React from "react";
import Papers from "./Papers";
import { Container, Row, Accordion } from "react-bootstrap";

class Author extends React.Component {

    render() {

        return(
            <Container>
                <Row className="justify-content-center">
                    <Accordion className="col-12 col-md-10" defaultActiveKey="0">
                        <Accordion.Item eventKey={this.props.count}>
                            <Accordion.Header>{this.props.author.first_name} {this.props.author.last_name}</Accordion.Header>
                            <Accordion.Body>
                                <p className="fw-bold">Author's Papers: </p>
                                <Papers authorid={this.props.author.author_id} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        )
    }
}

export default Author;