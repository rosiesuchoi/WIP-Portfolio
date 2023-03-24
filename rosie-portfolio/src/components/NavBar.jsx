const NavBar = (props) => {

    return (
        <section id="homeCard">
            <div className="nav">
                <div>
                    <p className="rosieName">Rosie <span className="red">(</span> <span className="middleName">Shion</span> <span className="blue">)</span> Choi</p>
                </div>
                <nav>
                    <p className="home">Home</p>
                    <p className="about">About</p>
                    <p className="projects">Projects</p>
                    <p className="contact">Contact</p>
                </nav>
            </div>
            <div className="line-container">
                <svg viewBox="0 0 950 445" fill="none" preserveAspectRatio="xMidYMax meet">
                    <path className="path" d="M1 435.028C141.833 457.361 441 450.228 511 243.028C581 35.8276 832.167 -4.30573 949 1.5276" stroke="black" />
                </svg>
            </div>
            <footer>
                <div className="footerSoftware">
                    <p className="softwareP">Software Developer</p>
                    <div>
                    <a href="https://github.com/Ubaeby"><img src="./github-mark.png" alt="github" height={63} width={60} /></a>
                    <a href="https://www.linkedin.com/in/pocketfilledwithrosies/"><img src="./linkedin.png" alt="linkedin" height={63} width={60} /></a>
                    </div>
                </div>

                <div className="containerAnimation">
                <p className="journey"> On a journey to write clean and simple solutions.</p>
                </div>
                
            </footer>
        </section>

    )
}


export default NavBar;