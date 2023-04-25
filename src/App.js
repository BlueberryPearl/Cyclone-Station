import React from "react";
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/LandingPage/Landing-page"
import Layout from "./Pages/Layout";
import SavedThemes from "./Pages/SavedThemes/SavedThemes";
import { HashRouter, Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";

export default function App() {

    const [list, setList] = React.useState(() => {
        const themeData = JSON.parse(localStorage.getItem('My-Themes'));
        return themeData ? themeData : []
    });
    function addItem(colours, title, description) {
        setList(prevList => {
            let newItem = {
                theme: colours,
                title: title,
                description: description,
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
    function updateItem(itemId, editedTitle, editedDescription) {
        setList(oldList => oldList.map(oldItem => {
            return oldItem.id === itemId ? { ...oldItem, title: editedTitle, description: editedDescription } : oldItem
        }))
    }

    //Deleting an item from the list

    function removeItem(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList)
    }




    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route path="Home" element={<Home addItem={addItem} />} />
                    <Route path="SavedThemes" element={<SavedThemes updateItem={updateItem}
                        removeItem={removeItem}
                        list={list} />} />
                    <Route path="/" element={<LandingPage />} />
                </Route>
            </Routes>
        </HashRouter>

    )
}