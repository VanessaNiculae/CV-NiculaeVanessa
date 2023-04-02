import '../style.css';
import niculaeVanessa from '../../../images/1679777513088.png'
export const Name = () => {
    return(
        <div className={"container"}>
            <div className={'row name-section'}>
            <div className={"photo col-1 align-self-center"}>
                <img src={niculaeVanessa} alt={"Niculae Vanessa"} className={"image"}></img>
            </div>
            <div className={"name col-6 align-self-center"}>
                Vanessa-Alexandra Niculae
            </div>
            </div>
        </div>
    )
}