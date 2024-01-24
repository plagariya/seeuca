import React from 'react'
import { Link } from 'react-router-dom'

function TheHeader() {
    return (
        <nav>
            <div>
                <ul>
                    <li> <Link to="">Home</Link></li>
                    <li> <Link to="/about-us">AboutUs</Link></li>
                    <li> <Link to="/service-us">ServicesUs</Link></li>
                    <li> <Link to="/career">Career</Link></li>
                    <li> <Link to="/contact">ContactUs</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default TheHeader