import "./style.css"
import {Colleges} from "./components/colleges";
export const Education = () => {
    return(
        <div className={'education container'}>
            <div className={'row education-title'}>
                <p>Education</p>
            </div>
            <div className={'row education-text'}>
                <Colleges/>
            </div>
        </div>
    )
}