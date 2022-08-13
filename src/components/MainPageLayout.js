import React from 'react'
import Navs from './Navs';
import Title from './Title';
const MainPageLayout = ({children}) => {
  return (
    <><div> 
        <Title subtitle="Box office" title="Are you looking for movie or actor"/>
          <Navs /> 
    
    {children}</div>
      
    </>
    
  );
  
}

export default MainPageLayout