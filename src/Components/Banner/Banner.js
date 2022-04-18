import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section class="section home-hero wf-section">
                <div class="container-default w-container">
                    <div class="home-hero-wrapper">
                        <div
                            data-w-id="29cd3f96-03a6-481d-9037-14cbd2879b0e"
                            class="split-content home-hero-left">
                            <div class="subtitle">Food Mania</div>
                            <h1 class="title home-hero">Your Trusted Food Catering</h1>
                            <button onClick={() => navigate('/services')} class="button-primary bg-secondary-1 w-button">
                                Order here
                            </button>

                        </div>
                        <div class="split-content home-hero-right">
                            <div
                                data-w-id="e20d7af4-1d3a-1f2b-a0af-9800897e28f4"
                                class="image-wrapper home-hero"
                            >
                                <img
                                    src="https://i.ibb.co/sb9yxhY/Red-Velvet.jpg"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 595px, (max-width: 1919px) 47vw, 656.59375px"
                                    alt="Doctor John Carter - Doctor Webflow Template"
                                    class="image home-hero"
                                />
                                <div
                                    class="image-solid-cover"
                                ></div>
                            </div>
                            <img
                                src="https://i.ibb.co/1Z2LSdR/Kabab.jpg"
                                data-w-id="f5323537-1a51-9965-7156-513075d69756"
                                alt=""
                                class="bg home-hero-right"
                            />
                        </div>
                    </div>
                </div>
                <div class="bg home-hero"></div>
            </section>
        </div>
    );
};

export default Banner;