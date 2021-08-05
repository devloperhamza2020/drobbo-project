import React from 'react';
import imgLogo from "../img/logo.png";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <img src={imgLogo} alt="" />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div class="form-group">
                                <div class="input-group d-flex align-items-center">
                                    <input class="form-control border-1 input-f" id="email" name="email" type="search" placeholder="Search" />
                                    <FontAwesomeIcon className="icon-f me-3" icon={faSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;