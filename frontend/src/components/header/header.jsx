import "./css/header.css";

function Header({onclick, link_image, theme}) {
  return (
    <header className={theme === 'dark'? "header_main_dark": ""} id="header_main">
      <img id="img_logo" src={theme === "dark"? "src/assets/logo_white.svg": "src/assets/logo.svg"} alt="" />
      <button id="change_" onClick={onclick}>
        <img src={link_image} alt=""/>
      </button>
    </header>
  );
}

export default Header;