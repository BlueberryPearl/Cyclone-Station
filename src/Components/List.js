import React from "react";
import ListItem from "./List-item";




export default function List(props) {
    let newList = props.list.map(item => {
        return (<ListItem
            key={item.id}
            theme={item.theme}
            title={item.title}
            description={item.description}
            update={props.update}
            itemId={item.id}
            delete={props.delete} />)

    })
    console.log(newList)
    return (
        <div className="sidebar">
            <h2 className="menu-title">My saved themes</h2>
            <div className="sidebar-themes">{newList}</div>
        </div>
    )
}