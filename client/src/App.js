import { Button, ButtonGroup, TextField, Grid, Paper, Input, Container, Switch} from '@material-ui/core';
import { flexbox, spacing} from '@material-ui/system';
import './App.css';
import { useState, setState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputBar from './components/InputBar.js'
import ImageFrame from './components/ImageFrame.js'
import Intro from './components/Intro.js'
import Palette from './components/Palette.js'
import ColourCard from './components/ColourCard.js'
import { lightGreen } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
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
      <div id="ghlogo"><img src={ghLogo} width='50px'/></div>
      <div id="sharelogo"><img src={shLogo} width='40px'/></div>
      <div className='main-container' style={{ backgroundColor: themeColour, transition: '500ms' }}>
          <Intro textcolour={textColour}/>
          <InputBar/>
      </div>
    </div>
  );
}

export default App;
