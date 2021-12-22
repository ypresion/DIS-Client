import React from "react";
   
class SelectAward extends React.Component {

    render() {
           return (
            <label>
                Award:
                <select value={this.props.award} onChange={this.props.handleSelect}>
                    <option value="">Any</option>
                    <option value="1">Best paper</option>
                    <option value="2">Pretty paper</option>
                </select>
            </label>
           )
       }
   }
   
export default SelectAward;