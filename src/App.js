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


function App() {
  
  return (
    <div className="bg">
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
