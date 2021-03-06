import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container header">
                    <Link className="navbar-brand nav_brand" to="#">Super Foods</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" style={{fontSize: "24px"}} to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" style={{fontSize: "24px"}} to="/menu">Menu</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" style={{fontSize: "24px"}} to="/cart">Cart</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
