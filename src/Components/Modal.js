import React from "react";
import { toast, ToastContainer } from "react-toastify";

// this is the modal component for saving a colour theme and adding a title and description to it.
export default function Modal(props) {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")



    let colourBar = props.colours.map(colour => {
        return (
            <div className="modal-colour-and-hex" onClick={() => {
                navigator.clipboard.writeText(colour);
                toast('Copied');
            }}>
                <div className="modal-colour-block" style={{ backgroundColor: colour, color: colour }}>xxxx</div>
                <p className="modal-hex">{colour}</p>
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
                        <input onChange={(event) => { setTitle(event.target.value) }} value={title} placeholder="Title"></input>
                    </div>
                    <div className="description">
                        <textarea onChange={(event) => { setDescription(event.target.value) }} value={description} placeholder="Type your description here.">
                        </textarea>
                    </div>

                </div>
                <div className="modal-buttons">
                    <button onClick={props.handleClose}>
                        Cancel
                    </button>
                    <button onClick={() => {
                        props.save(props.colours, title, description);
                        props.handleClose();
                    }}>Save</button>
                </div>

            </div>

        </div >
    )
}