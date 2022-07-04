import React,{useState} from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
     
     const [show, setShow] =useState(false);

    return (
        <>
            <section className='navbar-bg'>
                 <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container">
                            <a class="navbar-brand" href="#">STCO ASSIGNMENT</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
                            onClick={ ()=> setShow(!show) }>
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <button class="btn btn-outline-success btn-style" type="submit">Sign Up</button>
                                <button class="btn btn-outline-success btn-style btn-style-border" type="submit">Log In</button>
                            </form>
                            </div>
                        </div>
                    </nav>  
             </section>
        </>
    )
}
export default Navbar;
