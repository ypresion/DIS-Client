import React from "react";
import { GlobalStateContext } from "../GlobalStateProvider";
import ReadingList from "./ReadingList";

/**
 * Reading list page component.
 * 
 * It will render a page containing the user's reading list if 
 * they are authorised.
 * 
 * @author Sylwia Krupa | w18015597
 */
const ReadingListPage = () => {

    const [state, dispatch] = React.useContext(GlobalStateContext);

    const readingList = <ReadingList />;
    const unauthorised = <h2>Not authorised! Please log in to access this page.</h2>;

    return (
        <div>
            {state.authorised ? readingList : unauthorised}
        </div>
    );

}

export default ReadingListPage;