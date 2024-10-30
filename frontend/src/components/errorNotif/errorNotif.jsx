import "./css/errorNotif.css";



function ErrorNotif({errorText}) {
  return(
    <div id="error_notif">
      <p>{errorText}</p>
    </div>
  )
}

export default ErrorNotif;