import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function TodoLists(props) {


    return (
        <div>
            <li>
                <button className='remove_btn' onClick={() => {
                    props.onSelect(props.id)
                }}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <span>
                    {props.item}
                </span>
            </li>
        </div>
    )
}
