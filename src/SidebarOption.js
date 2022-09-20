import React from 'react';
import './SidebarOption.css';
import {useDataLayerValue} from './DataLayer';

function SidebarOption({title,Icon}) {
     const [{}, dispatch] = useDataLayerValue();

    
   
  return (
    <div className='sidebarOption'>
    
    {/**If there is an Icon then render the Icon with the classname sidebaroption__Icon */}
      {Icon && <Icon className ='sidebarOption__icon' />}

        {/* if we have an Icon have h4 as title, otherwise have p tag*/ }
        {Icon? <h4>{title}</h4> :  <p>{title}</p>}

    </div>
  )
}

export default SidebarOption;