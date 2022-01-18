import React from "react";
import Papers from "./Papers";
import { Container, Row } from "react-bootstrap";
import hero from '../hero.jpg'

/**
 * Homepage component.
 * 
 * It will render an appropriate image and a randomly
 * selected DIS paper.
 * 
 * @author Sylwia Krupa | w18015597
 */
class HomePage extends React.Component {

 render() {
     return (
        <Container>
            <Row className="justify-content-center">
                <img src={hero} className="rounded mb-4 col-10 col-md-8" />
                <Papers randomPaper={true}/>
            </Row>
        </Container>
     )
  }
}

export default HomePage;