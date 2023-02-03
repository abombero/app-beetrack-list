import React from 'react';

import {StyledHeader} from './styled';


function Header(){
  return (
<nav class="navbar navbar-light">
  <div class="container">
    <StyledHeader class="navbar-brand mb-0 h1">Test <b>Beetrack</b></StyledHeader>
  </div>
</nav>
  )
}

export default Header;