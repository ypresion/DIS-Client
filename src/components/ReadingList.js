import React from "react";
import Paper from "./Paper";

/**
 * Reading list component.
 * 
 * It will render a list of papers present in the user's 
 * reading list.
 * 
 * @author Sylwia Krupa | w18015597
 */
class ReadingList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            papers: [],
            readingList: this.props.papers
        }
    }

    componentDidMount() {
        this.fetchAllPapers();
    }

    render() {
        //Only render papers on the reading list
        let filteredResults = this.state.papers.filter((paper) => (this.onReadingList(paper.paper_id)));
        return (
            <div>
                {filteredResults.map((paper, i) => (
                    <Paper key={i} count={i} paper={paper} onList="true"/>
                )
                )}
            </div>
        )
    }

    onReadingList(paper_id) {
        return this.props.papers.some((item) => { return item.paper_id === paper_id; })
    }

    //Fetch all paper data 
    fetchAllPapers() {
        let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/papers"
        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText);
                }
            })
            .then((data) => {
                this.setState({ papers: data.results })
            })
            .catch((err) => {
                console.log("something went wrong ", err)
            });
    }

}

export default ReadingList;