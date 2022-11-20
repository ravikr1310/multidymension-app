import React from "react";


function About() {
    return (
        <>
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="assets/img/about.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                            <h3>We are trying to improve the needs of our customer's business in this digital age.</h3>
                            <p class="font-italic">
                                Multidymenson technology is a fast growing next generation IT consulting and technology services company
                                in india headquartered in delhi. We are serving the clients everywhere. In today's world where d future
                                will be dependent on technology, we are using innovative ideas an d strategy to b implemented using d
                                latest technology.
                            </p>
                            <ul>
                                <li><i class="ri-check-double-line"></i> We are providing It services, R&D services, API , integrated
                                    portfolio of products and many others it related services.</li>
                                <li><i class="ri-check-double-line"></i> We also work on SEO(search engine optimization) which is very important.</li>

                            </ul>
                            <p>
                                Our ideas ranging from grassroot level to very high level are achieved by maintaining good relationship
                                with the clients and the employees providing them a very comfortable and friendly environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;