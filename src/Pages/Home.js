import React from "react";
import 'react-toastify/dist/ReactToastify.css';
//https://www.npmjs.com/package/react-toastify
import Modal from "../Components/Modal";
import List from "../Components/List";
import Time from "../Components/Time"
import Place from "../Components/Place";
import Colour from "../Components/Colour";
import { nanoid } from "nanoid";



export default function Home() {


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

    const [listItem, setListItem] = React.useState({ title: "", description: "" })
    function updateProps(modalTitle, modalDescription) {
        setListItem(() => ({ title: modalTitle, description: modalDescription }))
    }

    const [list, setList] = React.useState(() => {
        const themeData = JSON.parse(localStorage.getItem('My-Themes'));
        return themeData ? themeData : []
    });
    function addItem() {
        setList(prevList => {
            let newItem = {
                theme: colour.value,
                title: listItem.title,
                description: listItem.description,
                id: nanoid()
            }

            const newList = [newItem, ...prevList]
            return (newList)
        })
    }




    //saving list to local storage

    React.useEffect(() => {
        localStorage.setItem('My-Themes', JSON.stringify(list))
    }, [list])



    //Editing the title and description section
    function updateListItem(itemId, editedTitle, editedDescription) {
        setList(oldList => oldList.map(oldItem => {
            return oldItem.id === itemId ? { ...oldItem, title: editedTitle, description: editedDescription } : oldItem
        }))
    }

    //Deleting an item from the list

    function remove(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList)
    }


    //refreshing the title and description

    //React.useEffect(setListItem(() => ({ title: "", description: "" })), [listItem])



    return (
        <div className="main">
            <List list={list}
                update={updateListItem}
                delete={remove} />
            <div className="Hero">
                <div className="modal&colour">
                    {modal && <Modal
                        show={modal}
                        handleClose={hideModal}
                        colours={colour.value}
                        save={addItem}
                        updateProps={updateProps}
                        listItem={listItem}
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