import React from 'react'

const ProjectList =()=> {

    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
               <div className="card-content grey-text text-darken-3">
                    <span className="card-title"> rftBD</span>
                    <p> Nom de schema:  sde</p>
                    <p> Nombre de table :73</p>
                </div>  
            </div>
            <div className="card z-depth-0 project-summary">
               <div className="card-content grey-text text-darken-3">
                    <span className="card-title"> sieBD</span>
                    
                    <p> Nom de schema:  public </p>
                    <p> Nombre de table: 13</p>
                </div>  
            </div>
            <div className="card z-depth-0 project-summary">
               <div className="card-content grey-text text-darken-3">
                    <span className="card-title"> btBD</span>
                    <p> Nom de schema:  bt</p>
                    <p> Nombre de table :16</p>
                </div>  
            </div>
        </div>
    )
}
export default ProjectList; 