import {useEffect} from "react";
import ScrollReveal from "scrollreveal";
import Header from "./Components/Header";
import SocialMedia from "./Components/SocialMedia";
import MenuBar from "./Components/MenuBar";
import BodyContent from "./Components/BodyContent";

function App() {

  useEffect( () => {
      const sr = ScrollReveal({
          distance: '65px',
          duration: 2600,
          delay: 450,
          reset: true
      })

      sr.reveal('.hero-text', {delay:200, origin:'top'})
      sr.reveal('.hero-img', {delay:450, origin:'top'})
      sr.reveal('.icons', {delay:500, origin:'left'})
      sr.reveal('.scroll-down', {delay:500, origin:'right'})

    }, [])


  return (
    <div className="App">
      <Header/>
      <BodyContent/>
      <SocialMedia/>
      <MenuBar/>
    </div>
  );
}

export default App;
