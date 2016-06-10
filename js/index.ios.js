'use strict';

import React, {
  Text,
  View,
  Alert,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import PubSub from 'pubsub-js';
import isBlank from 'underscore.string';

var FBSDK = require('react-native-fbsdk');
var {
  AccessToken,
} = FBSDK;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

var FBLoginButton=require("./CompFBLogin");
var PageLogin = require("./PageLogin");
var pageRouter = function (index) {
  if ( index == 0 || isBlank(this.token)) {
    return <PageLogin token={this.token}/>;
  }
  return <View>
      <Text/>
      <Text/>
      <Text/>
      <Text/>
      <TouchableOpacity onPress={() => {
        this._navigator.pop();
        console.log("pop");
      }}>
        <Text>Back</Text>
        <FBLoginButton/>
      </TouchableOpacity>
    </View>
}

class SimpleApp extends React.Component {
  initialRoute={name: 'My First Scene', title: "Sd", index: 0}
  onReceived=(msg, data) => {
    console.log("onReceived");
    var navigator = this._navigator;
    var nextIndex = 1;
    navigator.push({ name: 'Scene ' + nextIndex, index: nextIndex,
      title: nextIndex,
      leftButton: "< Back",
      rightButton: "Home"
    });
  }
  componentWillMount=() => {
    PubSub.subscribe("Main", this.onReceived);
    console.log("subscribe");

    AccessToken.getCurrentAccessToken().then((token) => {
        console.log("Token:" + token.accessToken);
        this.token = token;
        this.setState({token:token});
        this.forceUpdate();
    })
  }
  componentWillUnmount=() => {
    PubSub.unsubscribe("Main", this.onReceived);
    console.log("unsubscribe");
  }
  render() {
    return (
      <Navigator
        initialRoute={this.initialRoute}
        renderScene={(route, navigator) => {
            this._navigator = navigator;
            return <View style={styles.container}>
              {pageRouter.bind(this)(route.index)}
            </View>
          }
        }
      />
    )
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
