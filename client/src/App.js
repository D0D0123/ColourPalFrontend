import './App.css';
import { Switch} from '@material-ui/core';
import { useState } from 'react';
import InputBar from './components/InputBar.js'
import Intro from './components/Intro.js'
import ghLogo from "./github-logo.png";
import shLogo from "./share-logo.png";


function App() {

  const [themeColour, setThemeColour] = useState('white');
  const [textColour, setTextColour] = useState('#585a5c');

  const handleModeSwitch = (event) => {
    if (!event.target.checked) {
      setThemeColour('white');
      setTextColour('#585a5c');
    }
    else {
      setThemeColour('black');
      setTextColour('white');
    }
  }
  
  return (
    <div className="bg">
      <div id='modeswitch'><Switch size='medium' color='default' onChange={handleModeSwitch}/></div>
      <div id="ghlogo">
        <a href="https://github.com/D0D0123/ColourPal">
        <img src={ghLogo} alt='github-link' width='50px'/>
        </a>
      </div>
      <div id="sharelogo">
        <img src={shLogo} alt='share-link' width='40px'/>
      </div>
      <div className='main-container' style={{ backgroundColor: themeColour, transition: '500ms' }}>
          <Intro textcolour={textColour}/>
          <InputBar/>
      </div>
    </div>
  );
}

export default App;
