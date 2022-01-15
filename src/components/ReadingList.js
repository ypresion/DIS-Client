import React from "react";
import Paper from "./Paper";

class ReadingList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            papers: [],
            readingList: []
        }
    }

    componentDidMount() {
        this.fetchAllPapers();
        this.fetchReadingList();
    }

    render() {
        let filteredResults = this.state.papers.filter((paper) => (this.onReadingList(paper.paper_id)));
        return (
            <div>
                {filteredResults.map((paper, i) => (
                    <Paper key={i} count={i} paper={paper} />
                )
                )}
            </div>
        )
    }

    onReadingList(paper_id) {
        return this.state.readingList.some((item) => { return item.paper_id === paper_id; })
    }

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

    fetchReadingList() {
        let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"
        let formData = new FormData();
        formData.append('token', localStorage.getItem('authToken'));

        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: formData
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText);
                }
            })
            .then((data) => {
                this.setState({ readingList: data.results })
            })
            .catch((err) => {
                console.log("something went wrong ", err)
            });
    }
}

export default ReadingList;