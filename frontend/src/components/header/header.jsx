import "./css/header.css";

function Header({onclick, link_image, theme}) {
  return (
    <header className={theme === 'dark'? "header_main_dark": ""} id="header_main">
      <a href="http://127.0.0.1:5173/"><img id="img_logo" src={theme === "dark"? "src/assets/logo_white.svg": "src/assets/logo.svg"} alt="" /></a>
      <button id="change_" onClick={onclick}>
        <img src={link_image} alt=""/>
      </button>
    </header>
  );
}

export default Header;