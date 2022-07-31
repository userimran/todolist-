import React from "react";
import Todolist from './Todolist';
import { useState } from "react/cjs/react.development";

const Apps = () => {
    const [inputList, setinputList] = useState("");
    const [items, setItems] = useState([]);

    const listofItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setinputList("");
    };

    const deleteItems = id => {
        // console.log(id);
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>todo List</h1>
                    <br />
                    <input type="text" placeholder="Add a items" value={inputList} onChange={(event) => setinputList(event.target.value) } />
                    <button onClick={listofItem}> + </button>
                    <ol>
                        {
                            items.map((itemVal, index) => {
                                return <Todolist key={index} id={index} text={itemVal} functionName={deleteItems} />;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Apps;