import React from "react";
import Papers from "./Papers";

class Author extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
    }

    handleClick = () => {
        this.setState({display:!this.state.display})
    }

    render() {
        let details = "";

        if (this.state.display) {
            details = 
                <Papers authorid={this.props.author.author_id} />
        }

        return(
            <div onClick={this.handleClick}>
                <p>{this.props.author.first_name} {this.props.author.last_name}</p>
                {details}
            </div>
        )
    }
}

export default Author;