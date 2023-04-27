import {FaGithub, FaLinkedin} from "react-icons/fa";
import {ImYoutube2} from "react-icons/im";

export default function SocialMedia(){
    return(
        <div className={'icons'}>
            <a href={'/'}><FaGithub /></a>
            <a href={'/'}><FaLinkedin /></a>
            <a href={'/'}><ImYoutube2 /></a>
        </div>
    )
}