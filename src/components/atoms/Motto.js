import React from "react";

function Motto() {
    return (
        <section id="motto" className="features">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Our Motto</h2>
                    <p>Check our Mission</p>
                </div>
                <div className="row">
                    {/* <div className="image col-lg-6" style='background-image: url("assets/img/features.jpg");' data-aos="fade-right">
                    </div> */}
                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                        <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                            <i className="bx bx-receipt"></i>
                            <h4>Authentication</h4>
                            <p>our organisation is authenticated and reliable where u can believe blind folded eyes.</p>
                        </div>
                        <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                            <i className="bx bx-cube-alt"></i>
                            <h4>Blooming</h4>
                            <p>we make a good relation between d technology and human needs which is future of world</p>
                        </div>
                        <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                            <i className="bx bx-images"></i>
                            <h4>Client satisfaction</h4>
                            <p>clients are the base so their satisfaction is most important. Client satisfaction is d path which leads
                                us on a path of success.</p>
                        </div>
                        <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                            <i className="bx bx-shield"></i>
                            <h4>Durability</h4>
                            <p>we always try to complete d task within d given time frame as time is d most important thing.</p>
                        </div>
                        <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                            <i className="bx bx-shield"></i>
                            <h4>Efficient</h4>
                            <p>we achieve our task with a team of highly efficient developers in a very cool working environment.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Motto;