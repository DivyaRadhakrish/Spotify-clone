import React, { useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify =new SpotifyWebApi(); 

function App() {



  //Fetching user,token or whatever we need from datalayer, dispatch is used to pop any action to the datalayer
  const[{user,token},dispatch] =useDataLayerValue();

  //Using useState and useEffect for rendering the accesstoken everytime

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash=""; 
    const _token = hash.access_token;   // To secure the accesstoken due to privacy, the token will not show in the URL
    
    //if there is a _token, setToken to be _token

    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      });

      spotify.setAccessToken(_token);   //connecting spotify with the token 
      

     

      // If spotify gets me (i.e. user) then it will perform the dispatch action
      spotify.getMe().then ( (user) => {
       dispatch({
        type:"SET_USER",
        user:user,
       });


      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        });

      });

      spotify.getPlaylist('37i9dQZEVXcNiL1lDUWcxu').then(response =>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      });

    }
    
  },[]);
  return (
    <div className="App">
 {/* If there is a token render the player otherwise go the Login page */}
       { token ? 
       <Player spotify={spotify}/> : 
       <Login />
      
         }
    </div>
  );
}

export default App;
