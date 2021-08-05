import React from 'react';
import './Product.css';
import product1 from '../img/p-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
    return (
        <div className="container">
            <h3 className="text-left text-dark fw-bold">All Categories Product</h3>
            <hr />
            <div className="row my-4">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="card w-100">
                        <img src={product1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Acer Laptop</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary me-5">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></a>
                            <i class="fas fa-star text-warning fs-5 ms-3 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-heart text-danger fs-5 me-2"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="card w-100">
                        <img src={product1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Acer Laptop</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary me-5">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></a>
                            <i class="fas fa-star text-warning ms-3 fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-heart text-danger fs-5 me-2"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="card w-100">
                        <img src={product1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Acer Laptop</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary me-5">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></a>
                            <i class="fas fa-star text-warning ms-3 fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-heart text-danger fs-5 me-2"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="card w-100">
                        <img src={product1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Acer Laptop</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary me-5">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></a>
                            <i class="fas fa-star text-warning ms-3 fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-heart text-danger fs-5 me-2"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="card w-100">
                        <img src={product1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Acer Laptop</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary me-5">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></a>
                            <i class="fas fa-star text-warning ms-3 fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-heart text-danger fs-5 me-2"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="card w-100">
                        <img src={product1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Acer Laptop</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary me-5">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></a>
                            <i class="fas fa-star text-warning ms-3 fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-star text-warning fs-5 me-2"></i>
                            <i class="fas fa-heart text-danger fs-5 me-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;