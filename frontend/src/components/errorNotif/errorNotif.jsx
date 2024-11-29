import "./css/errorNotif.css";



function ErrorNotif({ errorText, themeNotif }) {
  const choseThemeNotif = () => {
    if (themeNotif === "error") {
      return "error_notif";
    }
    else if (themeNotif === "success") {
      return "success_notif";
    }
  }

  return (
    <div id="notif" className={choseThemeNotif()}>
      <p>{errorText}</p>
    </div>
  )
}

export default ErrorNotif;