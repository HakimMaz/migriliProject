import React from 'react';
import {Link} from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedOutLinks from './SignedOutLinks';
const Navbar =()=>{
    return(
    <nav className="nav-wrapper  teal darken-2 ">
        <div className="container">
          <Link to="/" className="brand-logo">Migrili</Link>
          <SignedinLinks/>
          <SignedOutLinks/>
         </div>            

    </nav>
    )
}

export default Navbar;