import React, { useState } from 'react'
import './list.css'
import TodoLists from '../Components/TodoLists';

export default function List() {
    const [inputItem, setInputItem] = useState("");
    const [item, setItem] = useState([]);

    const getInputval = (e) => {
        setInputItem(e.target.value)
    }


    const listofItems = () => {
        if (inputItem.trim().length === 0) {
            alert("Enter a Task then click on add.")
            return;
        }
        setItem((oldItem) => {
            return ([...oldItem, inputItem])
        });
        setInputItem("");
    }

    const deleteItem = (id) => {
        console.log("working");

        setItem((oldItem) => {
            return (
                oldItem.filter((arrElement, index) => {
                    return index !== id
                })
            )
        })
    }

    return (
        <div className='main_div'>
            <div className="list-warapper">
                <h1 className='list_title'>ToDo List</h1>
                <div className="list-content">
                    <input type="text" placeholder='Add tasks' onChange={getInputval} value={inputItem} />
                    <button type='submit' className='add_btn' onClick={listofItems}> + </button>
                    <ul>
                        {
                            item.map((itemVal, index) => {
                                return (
                                    <TodoLists item={itemVal} key={index}
                                        id={index} onSelect={deleteItem} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}
