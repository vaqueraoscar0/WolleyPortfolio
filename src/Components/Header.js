import {FiMenu} from "react-icons/fi";
import {useEffect, useState} from 'react'

export default function Header(){
    const [navBarScroll, setNavBarScroll] = useState('transparent')
    
    const handleClick = () =>{
        console.log('isClicked!')
    }

    const menuToggle = () =>{
        let menu = document.querySelector('#menu-icon')
        let nav = document.querySelector('.navlist')
        menu.classList.toggle('bx-x')
        nav.classList.toggle('open')
    }
    
    useEffect(() => {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setNavBarScroll("transparent")
      }else{
          setNavBarScroll('black')
      }
    };
  })
  

    return(
        <header className="App-header" style={{background: navBarScroll}}>
            <a href={'/'} onClick={handleClick} className={'logo'} >WolleyLand</a>
            <ul className={'navlist'}>
                <li><a href={'/'} onClick={handleClick}>Home</a></li>
                <li><a href={'/'} onClick={handleClick}>Wolley V2</a></li>
                <li><a href={'/'} onClick={handleClick}>Contacts</a></li>
                <li><a href={'/'} onClick={handleClick}>About</a></li>
            </ul>

            <div id={'menu-icon'} className={'open'} onClick={menuToggle}><FiMenu/></div>
        </header>
    )
}