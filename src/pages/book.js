import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "./book.css"

const Book = () => {
    return (<div className = "container-row">
        <div id = "screenContainer">
            <button className = "screens">First Screen</button>
            <button className = "screens">Second Screen</button>
            <button className = "screens">Third Screen</button>
        </div>
    </div>);
}

export default Book;