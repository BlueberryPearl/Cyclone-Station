import React from "react";
import { toast, ToastContainer } from "react-toastify";
import InlineEdit from "./InlineEdit";
import DescriptionEditor from "./DescriptionEditor";


export default function ListItem(props) {

    const [emptyTitle, setEmptyTitle] = React.useState(props.title === "")
    function addTitle() {
        setEmptyTitle(false)
    }

    const [emtyDescription, setEmptyDescription] = React.useState(props.description === "")
    function addDescription() {
        setEmptyDescription(false)
    }
    let colourBar = props.theme.map(colour => {
        return (
            <div className="list-item-block" onClick={() => {
                navigator.clipboard.writeText(colour);
                toast('Copied');
            }}>
                <div className="list-item-colour" style={{ backgroundColor: colour, color: colour }}>xxxx</div>
                <p>{colour}</p>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark" />
            </div>
        )
    })


    function updateTitle(title) {
        props.update(props.itemId, title, props.description)
        if (title === "") {
            setEmptyTitle(true)
        }
    }

    function updateDescription(description) {
        props.update(props.itemId, props.title, description)
        if (description === "") {
            setEmptyDescription(true)
        }
    }

    function deleteItem() {
        props.delete(props.itemId)
    }

    //  no title or description section



    return (
        <div className="list-item">
            {emptyTitle ? <p title="Edit" onClick={addTitle} className="add-title"> Title <img className="edit-icon" src="./Assests/pen-solid.svg"></img></p> : <InlineEdit value={props.title}
                setValue={updateTitle} />}
            <div>{colourBar}</div>
            {emtyDescription ? <p title="Edit" onClick={addDescription} className="add-title"> Description <img className="edit-icon" src="./Assests/pen-solid.svg"></img></p> : <DescriptionEditor value={props.description}
                setValue={updateDescription} />}

            <button title="Delete" className="remove" onClick={deleteItem}>&times;</button>

        </div>
    )
}