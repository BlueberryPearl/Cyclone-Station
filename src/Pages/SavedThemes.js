import React from "react";
import List from "../Components/List";

export default function SavedThemes(props) {
    return (
        <div>
            <h1>This is the themes page</h1>
            <List list={props.list}
                update={props.updateItem}
                delete={props.removeItem} />
        </div>
    )
}