const Hero = props => {

    return (
        <div className="hero">
            <figure>
            <video className="pinkBackground" autoPlay loop muted>
                <source src="pinkclouds.mp4" type="video/mp4" />
            </video>
            </figure>
            <div>
            <img className="rosiepic" src="rosieprof.png" alt="me!" />
            </div>
            <div>
            <p className="rosie">Hello! I'm Rosie Choi. I'm a full-stack developer </p>
            </div>
            
        </div>
    )
}

export default Hero;