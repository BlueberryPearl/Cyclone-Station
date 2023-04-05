import React from "react";
import { toast, ToastContainer } from "react-toastify";


export default function Modal(props) {
    const [titleVal, setTitleVal] = React.useState("")
    function changeTitle(event) {
        setTitleVal(event.target.value)
        props.updateProps(newTitle, newDescription)
    }
    const [descriptionVal, setDescriptionVal] = React.useState("")
    function changeDescription(event) {
        setDescriptionVal(event.target.value)
        props.updateProps(newTitle, newDescription)
    }

    let newTitle = titleVal
    let newDescription = descriptionVal

    let colourBar = props.colours.map(colour => {
        return (
            <div className="modal-colour-block" onClick={() => {
                navigator.clipboard.writeText(colour);
                toast('Copied');
            }}>
                <div className="modal-colour" style={{ backgroundColor: colour, color: colour }}>xxxx</div>
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



    return (
        <div className="modal-background">


            <div className="modal-container">

                <button className="x" onClick={props.handleClose}>&times;</button>


                <div className="modal-main">
                    <h1>Save this colour theme</h1>
                    <div className="colours">{colourBar}</div>
                    <div className="title">
                        <input onChange={changeTitle} value={titleVal} placeholder="Title"></input>
                    </div>
                    <div className="description">
                        <textarea onChange={changeDescription} value={descriptionVal} placeholder="Type your description here.">
                        </textarea>
                    </div>

                </div>
                <div className="modal-buttons">
                    <button onClick={props.handleClose}>
                        Cancel
                    </button>
                    <button onClick={() => {
                        props.save();
                        props.handleClose();
                    }}>Save</button>
                </div>

            </div>

        </div >
    )
}