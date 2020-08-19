import React from 'react';
import './Navbar.scss';


const Navbar = ()=>{
    return(
        <div>
            <ul class="PrimaryNav with-indicator">
                <li class="Nav-item"><a href="/">Home</a></li>
                <li class="Nav-item"><a href="/about">About</a></li>
                <li class="Nav-item"><a href="/clients">Clients</a></li>
                <li class="Nav-item"><a href="/contact">Contact</a></li>
                <li class="Nav-item"><a href="/signin">Signin</a></li>
            </ul>
        </div>
    )
}

export default Navbar;

