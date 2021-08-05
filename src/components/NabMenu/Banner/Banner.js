import React from 'react';
import bannerPhoto from '../../img/slider.png'
const Banner = () => {
    return (
        <div className="container my-5">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bannerPhoto} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerPhoto} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerPhoto} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;