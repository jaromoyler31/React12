import React from 'react'
import Spinner from '../assets/FCSpinner.png'


//INTERNAL IMPORT
import Style from "./Loader.css"

const Loader = () => {
    return (
        <div className="loading-screen">
            <img className="spinner" src={Spinner}></img>
        </div>
    )
}

export default Loader;