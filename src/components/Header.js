import React, { useState } from 'react';
import '../styles/hebrewStyles/header.css';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as Cart } from '../assets/svg/cart.svg';
import { ReactComponent as Account } from '../assets/svg/account.svg';
import { ReactComponent as Search } from '../assets/svg/search.svg';
import { ReactComponent as Language } from '../assets/svg/language.svg';


function Header(){
const [svgSearch,setSvgSearched] = useState('')
const [grow,setGrow] = useState('')
return(
  <div className="headerWrap">
    <div className="header">
    <a href="/he" className="headLogo"><Logo/></a>
    <nav className='headNav'>
        <ul>
            <li><a href="#">צור קשר</a></li>
            <li><a href="#">מדריכים</a></li>
            <li><a href="/he/skateparks">סקייטפארקים</a></li>
            <li><a href="#">חנות</a></li>
            <li><a href="#">עלינו</a></li>
        </ul>
     </nav>
     <div className='headIcons'>
     <input type="text" className={`headSearch ${grow}`} placeholder="חיפוש" autocomplete="off" onchange="openPage()"/>
        <Search className={"search-svg " + svgSearch} onClick={()=>{
         if(svgSearch===''||svgSearch==='disabled'){
            setSvgSearched('clicked')
            setGrow('grow')
         }
          else {
            setSvgSearched('disabled')
            setGrow('shrink')
          }

         }
        }
         src={Search}/>
        <Cart/>
        <Account/>
        <Language/>
        </div>
     </div>
  </div>
)
}
export default Header