import React from 'react';
import {  Breakpoint, setDefaultBreakpoints, up, down } from 'react-socks';
import { ButtonGroup, DropdownButton, Dropdown,  } from 'react-bootstrap';



function Nav({currentPage, handlepageChange}) {
    

    const tabs =['About', 'Experience', 'Resume', 'Projects', 'Contact']
    return(
        <idv>
        <Breakpoint large up>
        <nav className="navbar navbar-light bg-secondary">
        <div className="Name">Malachi Alusa</div>
                {tabs.map(tab => (
                    <div key={tab} className="navtext"><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab) }
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "navtext"
                    } >{tab}</a></div>
                ))}
        </nav>
        </Breakpoint>

        <Breakpoint small down>
         <nav className="navbar navbar-light bg-secondary">  
                    <div className="Name">Malachi Alusa</div>
        <ButtonGroup className="dropdown">
         <DropdownButton as={ButtonGroup} menuAlign={{ lg: 'right' }} id="bg-nested-dropdown" className="mobileMenuButton">

                {tabs.map(tab => (
                    <Dropdown.Item><div key={tab} className="navtext"><a href={'#' + tab.toLowerCase()} 
                    onClick={() => handlepageChange(tab)} data-toggle="dropdown"
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "mobileNavText"
                    } >{tab}</a></div>
               </Dropdown.Item> ))}
       </DropdownButton>
       </ButtonGroup>
       </nav>
        </Breakpoint>
 </idv>  
  )
}

export default Nav