import React from 'react';

function Nav({currentPage, handlepageChange}) {
    
    const tabs =['About', 'Resume', 'Portfolio', 'Contact']
    return(
        <nav className="navbar navbar-light bg-secondary">
            <div className="flexnav">
                {tabs.map(tab => (
                    <div key={tab} className="navtextflex"><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab)}
                    className={
                    currentPage === tab ? 'nav-link active' : 'nav-link'
                    } >{tab}</a></div>
                ))}
            {/* /*<div className="aboutmeflex">
                <a data-testid="about" id="aboutmeclick" className="navtext" href="About">About Me</a>
            </div>
            <div className="navtextflex">
                <a data-testid="resume"  id="resumeclick" className="navtext" href="Resume" >Resume</a>
            </div>
            <div className="navtextflex">
                <a  id="portfolioclick" className="navtext" href="Portfolio">Portfolio</a>
            </div>
            <div className="navtextflex">
                <a  id="Contactclick" className="navtext" href="Contact">Contact</a>
            </div>  */}
            </div>
        </nav>
    )
}

export default Nav