import { Button, ButtonGroup, TextField, Grid, Paper, Input, Container} from '@material-ui/core';
import { flexbox, spacing} from '@material-ui/system';
import './App.css';

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
  
  return (
    <div className="bg">
      <div id="ghlogo"><img src={ghLogo} width='50px'/></div>
      <div id="sharelogo"><img src={shLogo} width='40px'/></div>
      <div className='main-container'>
          <Intro/>
          <InputBar/>
          <ImageFrame/>
          <Palette/>
          <ColourCard/>
      </div>
    </div>
  );
}

export default App;
