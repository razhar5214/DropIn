import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../images/map-of-nyc2.png'
import AutoSearch from './AutoSearch'
import Navbar from './Navbar'
import UserNavbar from './user/UserNavbar'
import '../styles/Landing.css'

export default function Landing(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const localStorageItem = localStorage.getItem('isLoggedIn')

    useEffect(() => {
        if (localStorageItem == 'yes') {
            setIsLoggedIn(true)
        }
    },[])

    console.log('Landing Props: ', props);

    function updateAddress(addressFromAutoSearch) {
        props.updateAddress(addressFromAutoSearch) //sending it up to App.js
    }

    function updateCoordinates(coordsFromAutoSearch) {
        props.updateCoordinates(coordsFromAutoSearch) //sending it up to App.js
    }

    return (

        <div className='landing-page'>

            {isLoggedIn ? <UserNavbar /> : <Navbar />}

            <div>
                <img className='landing-background' src={BackgroundImage} alt='' />
            </div>

            <div className='landing-search'>
                <h1 className='landing-title'>DROP-IN</h1>

                <AutoSearch updateAddress={updateAddress} updateCoordinates={updateCoordinates} />

            </div>

        </div >

    )
}