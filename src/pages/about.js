function About() {
    return (
        <>
            <figure>
            <img className="header1" src={ process.env.PUBLIC_URL + "/Assets/images/download.jpg" } />
                <figcaption id="figcaption">
                    <p>Looking for a web developer? You've come to the right spot. </p>
                </figcaption>
            </figure>

            <main>
                <div class="container">
                    <h2 class="about-me-heading" id="About-me">About me</h2>
                    <div class="row justify-content-around">
                        <div class="card">
                            <div class="row card-body">
                                <div class="col-12 col-sm-8 col-lg-4 mb-3">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <p style={{ fontSize: 'large' }}> lets get acquainted! Hover here.</p>
                                            </div>
                                            <div class="flip-card-back">
                                                My name is Lilly! I am 20 years old and am working towards getting
                                                my
                                                foot in the door of
                                                the
                                                IT industry.
                                                I am currently studying a programming course through usyd and I am working
                                                hard
                                                towards my
                                                dream
                                                career of a full stack developer.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="row card-body">
                                <div class="col-12 col-sm-8 col-lg-4 mb-3">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <p style={{ fontSize: 'large' }}> What makes me stand out? Hover here!</p>
                                            </div>
                                            <div class="flip-card-back">
                                                I am a motivated and dedicated person wanting to excel in this field and
                                                am looking for
                                                experience. I have many personal and professional attributes which make me a
                                                great
                                                canditate. You can find my resume in the navbar above here and take a look for
                                                yourself!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default About