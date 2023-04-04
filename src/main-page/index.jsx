import './group-info/style.css';
import {Name} from "./group-info/name/name";
import {ContactInfo} from "./group-info/contact-info/contact-info";
import {SocialLinks} from "./group-info/social-links/social-links";
import {FirstRowContainer} from "./group-info/first-row-container";
import {Description} from "./group-info/description/description";
import {WorkExperience} from "./group-info/work-experience/work-experience";
import {Education} from "./group-info/education";
import {DigitalSkills} from "./group-info/digital-skills";

export const App = () => {
  return(
  <div className={'main-page container'}>
    <Name/>
    <FirstRowContainer>
      <ContactInfo/>
      <SocialLinks/>
    </FirstRowContainer>
    <Description/>
    <WorkExperience/>
    <Education/>
    <DigitalSkills/>
  </div>
  )
}
