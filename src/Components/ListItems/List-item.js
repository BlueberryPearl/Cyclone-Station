import React from "react";
import { toast, ToastContainer } from "react-toastify";
import InlineEdit from "../InlineEdit";
import DescriptionEditor from "../DescriptionEditor";
import './ListItems.css'
import PenSvg from "./PenSvg";


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
            <div className="list-item-colour-and-hex" onClick={() => {
                navigator.clipboard.writeText(colour);
                toast('Copied');
            }}>
                <div className="list-item-colour-block" style={{ backgroundColor: colour }}></div>
                <p className="list-item-hex">{colour}</p>
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
            {emptyTitle ? <p title="Edit" onClick={addTitle} className="add-title"> Title <PenSvg colour="#C00D9C" /></p> : <InlineEdit value={props.title}
                setValue={updateTitle} />}
            <div className="colourBar">{colourBar}</div>
            {emtyDescription ? <p title="Edit" onClick={addDescription} className="add-title"> Description <PenSvg colour="#C00D9C" /></p> : <DescriptionEditor value={props.description}
                setValue={updateDescription} />}

            <button title="Delete" className="remove" onClick={deleteItem}>&times;</button>

        </div>
    )
}