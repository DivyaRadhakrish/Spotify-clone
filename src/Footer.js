import React from 'react';
import './Footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid,Slider} from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <div className='footer__albumLogo'>
      <img src='https://cdn.playpilot.tech/2b02ca5caab311ec96070a58a9feac02/src/img?optimizer=image&quality=75&width=320&aspect_ratio=2%3A3'alt='' />
      </div>
      <div className='footer__songInfo'>
        <h4> Do you want to Build a Snowman? - From "Frozen"/Soundtrack Version</h4>
        <p>Kristen Bell</p>
      </div>
      </div>
      
      
      <div className='footer__center'>
      <ShuffleIcon className='footer__icon' />
      <SkipPreviousIcon className='footer__icon' />
      <PlayCircleOutlineIcon fontSize='large'className='footer__icon' />
      <SkipNextIcon className='footer__icon' />
      <RepeatIcon className='footer__icon' />
      </div>
      
      
      <div className='footer__right'>
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider />

          
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Footer