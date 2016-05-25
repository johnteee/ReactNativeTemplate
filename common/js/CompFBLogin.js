import React, {

}
from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
} = FBSDK;

module.exports=
class PageLogin extends React.Component {
  render() {
    return (
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              alert("login has finished with permissions: " + result.grantedPermissions);
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
    )
  }
}
