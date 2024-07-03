import React, { useState } from 'react';
import '../styles/Header.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/cart.svg';
import { ReactComponent as Account } from '../assets/account.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Language } from '../assets/language.svg';


function Header(){
const [svgSearch,setSvgSearched] = useState('')
return(
  <div className="headerWrap">
    <div className="header">
    <Logo className="logo" />
    <nav className='headNav'>
        <ul>
            <li><a href="#">צור קשר</a></li>
            <li><a href="#">מדריכים</a></li>
            <li><a href="#">סקייטפארקים</a></li>
            <li><a href="#">חנות</a></li>
            <li><a href="#">עלינו</a></li>
        </ul>
     </nav>
     <div className='headIcons'>

        <Search className={"search-svg " + svgSearch} onClick={()=>svgSearch===''||svgSearch==='disabled'?setSvgSearched('clicked'):setSvgSearched('disabled')} src={Search} />
        <Cart/>
        <Account/>
        <Language/>
        </div>
     </div>
  </div>
)
}
export default Header