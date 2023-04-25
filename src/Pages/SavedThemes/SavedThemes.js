import React from "react";
import ListItem from "../../Components/ListItems/List-item";
import './SavedThemes.css'

export default function SavedThemes(props) {
    let newList = props.list.map(item => {
        return (<ListItem
            key={item.id}
            theme={item.theme}
            title={item.title}
            description={item.description}
            update={props.updateItem}
            itemId={item.id}
            delete={props.removeItem} />)

    })



    return (
        <main className="main-st">
            {newList.length === 0 ?
                (<div className="empty-themes"><p>No saved themes.</p></div>) :
                (<div className="savedThemes">
                    {newList}
                </div>)}
        </main>
    )
}