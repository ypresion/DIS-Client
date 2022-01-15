import React from "react";
import { GlobalStateContext } from "../GlobalStateProvider";
import ReadingList from "./ReadingList";


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