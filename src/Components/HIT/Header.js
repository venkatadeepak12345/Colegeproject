import React from 'react'
import logoimg from "./assests/chennai-cit-logo.svg"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container-fluid">
        <nav
            className="navbar navbar-expand-sm bg-success"
        >
            <div className="container">
                <a className="navbar-brand" href="#"></a>
                <img src={logoimg} alt=''/>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-end navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/" aria-current="page"
                                >Home
                                <span className="visually-hidden">(current)</span></NavLink
                            >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/table">Table</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                href="/branches"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Branches</NavLink
                            >
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <NavLink className="dropdown-item" to="/artifical"
                                    >Artifical Intelligence & Data Science</NavLink
                                >
                                <NavLink className="dropdown-item" to="/computer"
                                    >Computer Science & Engineering</NavLink
                                >
                                <NavLink className="dropdown-item" to="/mechanical"
                                    >Mechanical Engineering</NavLink
                                >
                                <NavLink className="dropdown-item" to="/civil"
                                    >Civil Engineering</NavLink
                                >
                                <NavLink className="dropdown-item" to="/medical"
                                    >Bio-Medical & Engineering</NavLink
                                >
                                <NavLink className="dropdown-item" to="/electrical"
                                    >Electrical & Electronics Engineering</NavLink
                                >
                                
                            </div>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>   
                    </ul>
                    
                           
                        
                        
                    
                    
                    
                 
                </div>

               
            </div>
            
        </nav>
        
    </div>
    
  )
}

export default Header