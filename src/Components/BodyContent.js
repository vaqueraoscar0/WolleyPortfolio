import {FaPlay} from "react-icons/fa";
import wolley from "../img/robo4.png";

export default function BodyContent(){
    const handleClick = () =>{
        console.log('isClicked!')
    }

    return(
        <section className={'hero'}>
            <div className={'hero-text'}>
                <h4>Advance Technology</h4>
                <h1>Wolley-Top</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                <a href={'/'} onClick={handleClick}>Start</a>
                <a href={'/'} onClick={handleClick} className={'ctaa'}><FaPlay id={'faPlay'}/> Resume WOLLEY</a>
            </div>

            <div className={'hero-img'}>
                <img src={wolley} alt={'wolleyImg'}/>
            </div>
        </section>
    )
}