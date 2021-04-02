import react from 'react';

function Nav(props) {
    const tabs =['About, Resume, Portfolio, Contact']
    return(
        <nav className="navbar navbar-light bg-secondary">
            <div className="flexnav">
            <div className="aboutmeflex">
                <a  id="aboutmeclick" className="navtext" href="#about-me">About Me</a>
            </div>
            <div className="navtextflex">
                <a  id="resumeclick" className="navtext" href="#Resume">Resume</a>
            </div>
            <div className="navtextflex">
                <a  id="portfolioclick" className="navtext" href="#Portfolio">Portfolio</a>
            </div>
            <div className="navtextflex">
                <a  id="Contactclick" className="navtext" href="#Contact">Contact</a>
            </div>
            </div>
        </nav>
    )
}

export default Nav