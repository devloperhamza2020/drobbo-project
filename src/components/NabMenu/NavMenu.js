import React from 'react';
import "./NavMenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavMenu = () => {
    return (
        <div>
            <nav class="navmenu navbar navbar-expand-sm navbar-light">
                <div class="container">
                    <div className="d-flex align-items-center parent">
                        <div className="bg-dark d-flex align-items-center ps-4 py-1 category">
                            <button className="border-0 bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <FontAwesomeIcon className="text-white" icon={faBars} />
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Shop By Category
                                        </a>
                                        <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item text-light" href="#">Computer</a></li>
                                            <li><a class="dropdown-item text-light" href="#">Phones</a></li>
                                            <li><a class="dropdown-item text-light" href="#">Clothes</a></li>
                                            <li><a class="dropdown-item text-light" href="#">Shoes</a></li>
                                            <li><a class="dropdown-item text-light" href="#">Jewelery</a></li>
                                            <li><a class="dropdown-item text-light" href="#">Bags</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="user text-dark pe-3">
                            <FontAwesomeIcon className="fs-2 me-3" icon={faShoppingCart} />
                            <FontAwesomeIcon className="fs-2" icon={faUserCircle} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavMenu;