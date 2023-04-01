import './group-info/style.css';
import {Name} from "./group-info/name";
import {ContactInfo} from "./group-info/contact-info";
import {SocialLinks} from "./group-info/social-links";
import {FirstRowContainer} from "./group-info/first-row-container";

export const App = () => {
  return(
  <div className={'main-div container'}>
    <Name/>
    <FirstRowContainer>
      <ContactInfo/>
      <SocialLinks/>
    </FirstRowContainer>
  </div>
  )
}
