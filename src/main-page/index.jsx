import './group-info/style.css';
import {Name} from "./group-info/name";
import {ContactInfo} from "./group-info/contact-info";
import {SocialLinks} from "./group-info/social-links";
import {FirstRowContainer} from "./group-info/first-row-container";
import {Description} from "./group-info/description";

export const App = () => {
  return(
  <div className={'main-page container'}>
    <Name/>
    <FirstRowContainer>
      <ContactInfo/>
      <SocialLinks/>
    </FirstRowContainer>
    <Description/>
  </div>
  )
}
