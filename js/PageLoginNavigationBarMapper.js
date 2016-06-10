'use strict';

import React, {
  Text,
  View,
  TouchableOpacity,
}
from 'react-native';

var navStyle=require("./PageLoginNavigationBarStyles");

module.exports = {
  LeftButton: ( route, navigator, index, navState ) => {
    return(
      <TouchableOpacity onPress={() => {
        navigator.pop();
      }}>
      <Text>{ route.leftButton }</Text>
      </TouchableOpacity>
    );
  },
  Title: ( route, navigator, index, navState ) => {
    return(
      <Text>{ route.title }</Text>
    );
  },
  RightButton: ( route, navigator, index, navState ) => {
    return(
      <TouchableOpacity onPress={() => {
        navigator.popToTop();
      }}>
      <Text>{ route.rightButton }</Text>
      </TouchableOpacity>
    );
  }
}
