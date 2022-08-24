import { useState } from "react";
import { Conteiner, Dropdown, HeadeR, Link, LogIn,  NavLinkstyle,  } from "./style";
import { Outlet} from 'react-router-dom'

const Header = () => {
  let none = {
    display: "none",
  };
  let block = {
    display: "block",
    position: "absolute",
    right:'10px',
    backgroundColor: " #f1f1f1",
    width: "260px",
    overflow: "auto",
    boxShadow: " 0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  };
  let logo={
    fontSize:'20px', 
    textDecoration:'none',
     borderRadius: '5px',
        color:'blue',
        backgroundColor: 'white',
        padding: '5px 10px',
  }
  const [toggle, setToggle] = useState(true);
  const [style, setStyle] = useState(none);
  function toggleMenu() {
    setToggle((toggle) => !toggle);
    if (toggle == true) {
      setStyle(none);
    } else {
      setStyle(block);
    }
  }
  return (
    <div>

    <Conteiner>
      <HeadeR>
        
        <NavLinkstyle to='/home' style={logo}>
          <span>MEDIA</span>PARK
        </NavLinkstyle>
        <Dropdown>

          
          <button onClick={toggleMenu}><img src="https://img.icons8.com/ios-filled/50/000000/menu-rounded.png"/>Каталог</button>

          <div style={style}>
            <LogIn>
              <img src="https://img.icons8.com/ios-filled/50/000000/ringer-volume.png"/>
            <Link href="">Телефоны</Link>
            </LogIn>
            <LogIn>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/tv-show.png"/>
              <Link href="">Телевизоры</Link>
            </LogIn>
            <LogIn>
            <img src="https://img.icons8.com/glyph-neue/64/000000/mac-book-air.png"/>
            <Link href="">Ноутбуки</Link>
            </LogIn>
            <LogIn>
            <img src="https://img.icons8.com/pastel-glyph/64/000000/vacuum-cleaner--v2.png"/>
            <Link href="">Техника для дома</Link>
            </LogIn>
          </div>
        </Dropdown>
        <input type="text"  placeholder="Apple Watch"/>
        <LogIn>
        <img src="https://img.icons8.com/ios-filled/50/000000/conference-call.png"/>
        <h4>Вход</h4>
        </LogIn>
        <LogIn>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"/>
        <h4>Корзина</h4>
        </LogIn>
        <LogIn>
        <img src="https://img.icons8.com/ios-filled/50/000000/call-male.png"/>
        <h1>(71)203 33 33</h1>
        </LogIn>
      </HeadeR>
    </Conteiner>
    <main>
      <Outlet></Outlet>
    </main>
    </div>
    
  );
};

export default Header;
