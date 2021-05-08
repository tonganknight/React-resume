import React from 'react';
import {Card} from 'react-bootstrap';
import ProjectFullstack from '../ProjectFullstack'
import ProjectInterface from '../ProjectInterface'


function AllProjects(){

    return(
        <div>
        <ProjectFullstack/>
        <ProjectInterface/>
        </div>
    )
}

export default AllProjects