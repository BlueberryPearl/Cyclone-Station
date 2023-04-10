import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../Modal";
import 'react-toastify/dist/ReactToastify.css';
import './Colour.css'



export default function Colour(props) {

    const [colour, setColour] = React.useState({ value: ['', '', '', ''], activated: false })

    //Generating random colour section

    function colourGenerator() {
        const element = "0123456789ABCDEF";
        let hex = "";
        for (var i = 0; i < 6; i++) {
            hex = hex + element[Math.floor(Math.random() * 16)];
        }
        const hexCode = "#" + hex;
        return hexCode

    }

    //Setting the colours section

    function setColours() {
        setColour(prevCol => {
            const newColour = prevCol.value.map(() => colourGenerator())
            return { value: newColour, activated: true }
        })
    }



    //Modal section

    const [modal, setModal] = React.useState(false)
    const showModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }


    let newColours = colour.value.map(item => {
        return (
            <div onClick={() => {
                navigator.clipboard.writeText(item);
                toast('Copied');
            }} className='colour-And-Hex' key={item} title="Copy">
                <div className="colour-block" style={{ backgroundColor: item }}></div>
                <p className="hex">{item}</p>
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
        <div className="Colour">
            {modal && <Modal
                show={modal}
                handleClose={hideModal}
                colours={colour.value}
                save={props.addItem}
            />}

            {colour.activated && <button className="save-button" onClick={showModal} >Save</button>}

            {colour.activated && <div className="colours">{newColours}</div>}
            <button className="buttons" onClick={setColours}>Choose My Colours</button>
        </div>
    )

}


