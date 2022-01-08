import React from "react";
import { Accordion, Container } from "react-bootstrap";

class Paper extends React.Component {


    render() {
        return(
            <Container className="px-5">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={this.props.count}>
                        <Accordion.Header>{this.props.paper.title}</Accordion.Header>
                        <Accordion.Body>
                            <p className="fw-bold">Abstract: </p>
                            {this.props.paper.abstract}
                            <p className="fw-bold">Authors: </p>
                            {this.props.paper.authors}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        )
    }

}

export default Paper;