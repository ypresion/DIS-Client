import React from "react";

class Paper extends React.Component {

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
                <div>
                    <p>{this.props.paper.abstract}</p>
                    <p>{this.props.paper.authors}</p>
                </div>
        }

        return(
            <div onClick={this.handleClick}>
                <p>{this.props.paper.title}</p>
                {details}
            </div>
        )
    }
}

export default Paper;