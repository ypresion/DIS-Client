import React from "react";
   
/**
 * A dropdown list for selecting films by language
 * 
 * The languages are hard coded here and match those in the database. There is
 * currently no 'languages' API endpoint that could be used for fetching an
 * up to date list of languages.
 * 
 * @author Sylwia Krupa
 */
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