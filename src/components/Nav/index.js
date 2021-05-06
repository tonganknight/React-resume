import React from 'react';

function Nav({currentPage, handlepageChange}) {
    
    const tabs =['About', 'Experience', 'Resume', 'Projects', 'Contact']
    return(
        <nav className="navbar navbar-light bg-secondary">
            <div>Malachi Alusa</div>
            
                {tabs.map(tab => (
                    <div key={tab} className="navtext"><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab)}
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "navtext"
                    } >{tab}</a></div>
                ))}

        

           
        </nav>
    )
}

export default Nav