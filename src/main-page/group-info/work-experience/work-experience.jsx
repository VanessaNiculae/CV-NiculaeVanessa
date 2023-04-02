import '../style.css'
import {Jobs} from "../../components/jobs";

export const WorkExperience= () => {
    return(
       <div className={"container work-experience"}>
           <div className={"row work-experience-title"}>
               <p>Work Experience</p>
           </div>
           <div className={"row work-experience-text"}>
               <Jobs/>
           </div>
       </div>
    )
}