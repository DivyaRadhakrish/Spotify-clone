import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
  const[{discover_weekly},dispatch] =useDataLayerValue();  // pulling the discover weekly from the data layer
  
 

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
       <img src={discover_weekly?.images[0].url} alt='album pic' />
       <div className='body__infoText'>
        <strong>
          PLAYLISTS
        </strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
       </div>
       </div>
       <div className='body__songs'>

      
       <div className='body__icons'>
        <PlayCircleFilledIcon  fontsize= 'large'className='body__shuffle'/>
        <FavoriteIcon  fontSize='large'/>
        <MoreHorizIcon />
       </div>
{/**Pulling the list of songs track which will be display on the body */}
       
       {discover_weekly?.tracks.items.map(item =>(
        <SongRow track={item.track} />
        ))}
       </div>
    </div>
  )
}

export default Body