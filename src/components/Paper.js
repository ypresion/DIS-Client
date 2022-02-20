import React from "react";
import { Accordion, Container, Button } from "react-bootstrap";
import { GlobalStateContext } from "../GlobalStateProvider";

/**
 * A paper component.
 * 
 * It will render a component which, when clicked, displays 
 * paper details. If the user is authorised, it will also 
 * display buttons that allow them to add/remove given 
 * papers from their reading list.
 * 
 * @author Sylwia Krupa | w18015597
 */
const Paper = (props) => {

    const [state, dispatch] = React.useContext(GlobalStateContext);

    //Add new paper to the reading list
    const addToReadingList = () => {
        let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('authToken'));
        formData.append('add', props.paper.paper_id);

        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: formData
        })
            .then((response) => {
                if ((response.status === 200) || (response.status === 204)) {
                    addToState(props.paper)
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch((err) => {
                console.log("something went wrong ", err)
            });
    }

    //Remove item from the reading list
    const removeFromReadingList = () => {
        let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"

        let formData = new FormData();
        formData.append('token', localStorage.getItem('authToken'));
        formData.append('remove', props.paper.paper_id);

        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: formData
        })
            .then((response) => {
                if ((response.status === 200) || (response.status === 204)) {
                    removeFromState(props.paper)
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch((err) => {
                console.log("something went wrong ", err)
            });
    }

    const addToState = (paper) => {
        let updated = state.readingList;
        updated.push({paper_id: paper.paper_id});
        //Add paper to global state
        dispatch({ readingList: updated })
        //Add paper to local storage
        localStorage.setItem('readingList', JSON.stringify(updated))
    }

    const removeFromState = (paper) => {
        let filtered = state.readingList.filter((item) => item.paper_id !== paper.paper_id);
        //Remove paper from global state
        dispatch({ readingList: filtered })
        //Remove paper from local storage
        localStorage.setItem('readingList', JSON.stringify(filtered))
    }

    //Check whether the paper given is on the reading list 
    const isOnReadingList = (paper) => {
        return state.readingList.some((item) => { return item.paper_id === paper.paper_id; })
    }

    const add = <Button onClick={addToReadingList} variant="primary">Add to Reading List</Button>;
    const remove = <Button onClick={removeFromReadingList} variant="danger">Remove from Reading List</Button>;

    //Render a paper element with additional buttons for adding or deleting it
    //from reading list if the user is logged in.
    return (
        <Container className="px-5">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={props.count}>
                    <Accordion.Header>{props.paper.title}</Accordion.Header>
                    <Accordion.Body>
                        <p className="fw-bold">Abstract: </p>
                        {props.paper.abstract}
                        <br />
                        <p className="fw-bold">Authors: </p>
                        {props.paper.authors}
                        <br />
                        {state.authorised && isOnReadingList(props.paper) && remove}
                        {state.authorised && !isOnReadingList(props.paper) && add}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default Paper;