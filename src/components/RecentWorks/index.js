import React from 'react';
import {Card} from 'react-bootstrap';
import {  Breakpoint } from 'react-socks';

//this controls the view of the fullstack project display

function RecentWorks() {

    const RecentProjects = [{
        ProjectName: "The Emporium",
        ProjectLink: "https://melessite.herokuapp.com/",
        FeatureList: ["React application", "Mobile First application", "Object Mapping", "Custom CSS"],
        ProjectRepoLink: "https://github.com/tonganknight/CommerceSiteJohnson",
        ProjectSummary: "This is the front end of a web site that I built for a client. Its a E-commerce store that uses Venmo for transactions. This a React application that was intended to be the hub for an online business. The idea was to guide multiple social media stores such as instagram and facebook to one webpage to consolidate business. However due to obstacles from Covid the Customer abandoned the project. I built the landing page, and the products section. Its an example of some of my front end work",
        LgProjectCSSClass: "ProjectWindowMelesSiteLg",
        SmProjectCSSClass: "ProjectWindowEmporiumMobile"
    },
    {
        ProjectName: "AlusaDesign.com",
        ProjectLink: "http://www.alusadesign.com/",
        FeatureList: ["Interactive Art Gallery", "React Application", "Custom built modals", "Mobile First interface"],
        ProjectRepoLink: "https://github.com/tonganknight/Katie-Portfolio",
        ProjectSummary: " This is a custom portfolio I built for a Graphic Design graduate. Its a  React application and uses components for easy navigation. It also uses react-bootstrap's column system for its lay out. I built a custom modal layout for this app that utilizes reacts state management for multiple view options.",
        LgProjectCSSClass: "ProjectWindowPortfolio",
        SmProjectCSSClass: "ProjectWindowPortfolioMobile"
    }];

    

    return (

        <div>
    <Breakpoint large up>
    <div className="ProjectBackground">

   {RecentProjects.map( data => {

        return(
    <div className="paneBody">

    <Card className=" cardBody bg-dark text-light">
        <Card.Header className="projectTitle"><a href={data.ProjectLink} target="Blank" className="ProjectTitleLink">{data.ProjectName}</a>
            </Card.Header>
                <Card.Body className="cardflex">
                    <div className="featureList">
                        <ul className="features"><strong>Features:</strong>
                            {data.FeatureList.map((Feature) =>{
                                return(
                                <li className="featureItem">{Feature}</li>
                                )
                             })}

                        </ul>
                    </div>
                        <Card.Text className="card1text">{data.ProjectSummary} </Card.Text>
                            
                            <a href={data.ProjectLink} target="Blank" className={data.LgProjectCSSClass}></a>
    </Card.Body>
        </Card>


        </div>
        )
   })}



    </div>
</Breakpoint>

<Breakpoint small down>

<div className="ProjectBackground">

{RecentProjects.map(data =>{
return(

<div className="pane">

<Card className=" cardMobile bg-dark text-light">
<Card.Header className="projectTitleMobile"><a href={data.ProjectLink} target="Blank" className="ProjectTitleLinkMobile">
    {data.ProjectName}</a></Card.Header>
<Card.Body className="cardFlexMobile">
<a href="http://www.alusadesign.com/" target="Blank" className={data.SmProjectCSSClass}></a>
<div className="featureList">
    <ul className="features"><strong>Features:</strong>
        {data.FeatureList.map(Feature =>{
            return(
                <li className="featureItem">{Feature}</li>
            )
        })}
        
        
<div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href={data.ProjectRepoLink}>Click here</a></div>
</ul>
</div>
    <Card.Text className="card1text">
        {data.ProjectSummary}
    </Card.Text>
</Card.Body>
</Card>
</div>

    
)
})}
</div>
</Breakpoint> 
</div>
  

)

}

export default RecentWorks