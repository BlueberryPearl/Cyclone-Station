import React from "react";
import 'react-toastify/dist/ReactToastify.css';
//https://www.npmjs.com/package/react-toastify
import Modal from "../../Components/Modal";
import List from "../../Components/List";
import Time from "../../Components/Time"
import Place from "../../Components/Place";
import Colour from "../../Components/Colour";




export default function Home(props) {


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

    //Saving to the list section:





    //refreshing the title and description

    //React.useEffect(setListItem(() => ({ title: "", description: "" })), [listItem])



    return (
        <div className="main">
            <List list={props.list}
                update={props.updateItem}
                delete={props.removeItem} />
            <div className="Hero">
                <div className="modal&colour">
                    {modal && <Modal
                        show={modal}
                        handleClose={hideModal}
                        colours={colour.value}
                        save={props.addItem}
                    />}
                    <div className="colour-section">

                        <div className="theme-bar">
                            {colour.activated && <button className="save-button" onClick={showModal} >Save</button>}

                            <Colour colours={colour.value}
                                activated={colour.activated} />

                        </div>


                        <button className="buttons" onClick={setColours}>Choose My Colours</button>
                    </div>
                </div>
                <hr />
                <Time />
                <hr />
                <Place />
                <hr />
            </div>
        </div>
    )
}