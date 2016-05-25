'use strict';

import React, {
  Text,
  View,
  Alert,
  Navigator,
  TouchableOpacity,
}
from 'react-native';
import PubSub from 'pubsub-js';
import isBlank from 'underscore.string';

var style=require("./PageLoginStyles");
var navMapper=require("./PageLoginNavigationBarMapper");
var FBLoginButton=require("./CompFBLogin");

var checkLoginAndShowLogin=function() {
  if (isBlank(this.props.token)) {
    return <View>
      <Text>Login</Text>
      <FBLoginButton/>
    </View>
  }
  else {
    return <View>
      <Text>Logout: {this.props.token.tokenString}</Text>
      <FBLoginButton/>
    </View>
  }
}

module.exports = class PageLogin extends React.Component {
  render() {
    return (
      <Navigator
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={navMapper}
            />
        }
        initialRoute={{name: 'Login', title: "Login", index: 0}}
        renderScene={(route, navigator) =>
          <View>

            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

            {/*
            <TouchableOpacity onPress={() => {
              var nextIndex = route.index + 1;
              navigator.push({ name: 'Scene ' + nextIndex, index: nextIndex,
                title: nextIndex,
                leftButton: "< Back",
                rightButton: "Home"
              });
            }}>
              <Text>{route.name}</Text>
            </TouchableOpacity>
            */}
            {checkLoginAndShowLogin.bind(this)()}

            <View/>
            <TouchableOpacity onPress={() => {
              navigator.popToTop();
              PubSub.publish("Main", "LOGGEDIN");
              console.log("publish");
            }}>
              <Text>GAME OVER</Text>
            </TouchableOpacity>
            <View/>

            <TouchableOpacity
            style={style.container}
            onPress={() => {
              Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                  {
                    text: 'Cancel',
                    onPress: () =>
                      console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {
                    text: 'OK',
                    onPress: () =>
                      console.log('OK Pressed')
                  },
                ]
              );
            }}>
              <Text>
                Alert
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    )
  }
}
