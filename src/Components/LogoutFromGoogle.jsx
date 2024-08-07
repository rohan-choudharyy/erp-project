import { GoogleLogout } from 'react-google-login';

const clientId = "91875453816-6599qmoi0j4oimm66ignsmqbb1tee0mp.apps.googleusercontent.com"; 

const LogoutFromGoogle = () => {

  const onLogoutSuccess = () => {
    console.log("Log Out Successfully!");
  }

  return (
    <div id="signOutButton">
      <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onLogoutSuccess} className={"btn w-100 rounded-0 mb-2 justify-content-center"} />
    </div>
  )
}

export default LogoutFromGoogle;
