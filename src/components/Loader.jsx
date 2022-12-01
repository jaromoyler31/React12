import React from 'react'
import Spinner from '../assets/FCSpinner.png'


const Loader = () => {
    return (
        <div className="loading-screen">
            <img className="spinner" src={Spinner}></img>
        </div>
    )
}

export default Loader;