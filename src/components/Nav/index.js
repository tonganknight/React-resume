import react from 'react';

function Nav() {

    return(
        <nav className="navbar navbar-light bg-secondary">
            <div className="flexnav">
            <div className="aboutmeflex">
                <a  id="aboutmeclick" className="navtext" href="#about-me">About Me</a>
            </div>
            <div className="navtextflex">
                <a  id="resumeclick" className="navtext" href="#about-me">Resume</a>
            </div>
            <div className="navtextflex">
                <a  id="portfolioclick" className="navtext" href="#about-me">Portfolio</a>
            </div>
            <div className="navtextflex">
                <a  id="portfolioclick" className="navtext" href="#about-me">Contact</a>
            </div>
            </div>
        </nav>
    )
}

export default Nav