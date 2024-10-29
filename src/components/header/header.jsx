import "./css/header.css";

function Header({onclick, link_image}) {
  return (
    <header id="header_main">
      <img id="img_logo" src="src\assets\logo.svg" alt="" />
      <button id="change_" onClick={onclick}>
        <img src={link_image} alt=""/>
      </button>
    </header>
  );
}

export default Header;