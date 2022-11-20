import React from "react";



function Header() {
    return (
        <>
            <header id="header" class="fixed-top ">
                <div class="container d-flex align-items-center justify-content-between">

                    <h1 class="logo"><a href="index.html">MdT</a></h1>
                    {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#motto">Motto</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            {/* <li class="drop-down"><a href="">Drop Down</a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li class="drop-down"><a href="#">Deep Drop Down</a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>  */}
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="#about" class="get-started-btn scrollto">Get Started</a>
                </div>
            </header>
            <section id="hero" class="d-flex align-items-center justify-content-center">
                <div class="container" data-aos="fade-up">

                    <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                        <div class="col-xl-6 col-lg-8">
                            <h1>MultiDymenson</h1>
                            <h2>Technologies</h2>
                        </div>
                    </div>
                    <div class="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                        <div class="col-xl-2 col-md-4 col-6">
                            <div class="icon-box">
                                <i class="icofont-web"></i>
                                <h3><a href="">Web Based Applications</a></h3>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-6 ">
                            <div class="icon-box">
                                <i class="icofont-gears"></i>
                                <h3><a href="">Service and Solution</a></h3>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
                            <div class="icon-box">
                                <i class="icofont-help-robot"></i>
                                <h3><a href="">Design and Development</a></h3>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
                            <div class="icon-box">
                                <i class="icofont-look"></i>
                                <h3><a href="">Excellent Quality</a></h3>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
                            <div class="icon-box">
                                <i class="icofont-handshake-deal"></i>
                                <h3><a href="">Client Satisfaction</a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Header;