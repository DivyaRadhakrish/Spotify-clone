import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{spotify,playlists},dispatch]= useDataLayerValue();
  console.log(playlists);
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
      <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='logo' />
       </div>
       <SidebarOption Icon ={HomeIcon}title="Home" />
       <SidebarOption Icon ={ SearchIcon} title="Search" />
       <SidebarOption Icon ={LibraryMusicIcon} title="Your Library" />
       <br />
       <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />  {/**Horizontal row -line break */}

              {/**mapping playlists from spotify */}
      {playlists?.items?.map((playlist) =>(
         <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id} />
        

))}
      

    </div>
  );
}

export default Sidebar