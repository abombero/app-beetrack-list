import React, { useEffect } from "react";

import Search from '../Search';
import Add from '../Add'
import { StyledNav } from './styled'
function Nav(){
  return (
    <StyledNav className="row nav">
      <div className='col-lg-4'><Search/></div>
      <div className='col-lg-2 offset-lg-6'><Add /></div>
   </StyledNav >
  )
}

export default Nav;