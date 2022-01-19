(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const classes = ['full', 'mobile', 'desktop', 'laptop', 'mobile2', 'full2'];
    let classIndex = -1;
    function changeBackground() {
      let main = document.querySelector('.lottie-animation');
      if (classIndex >= 0) {
        main.classList.remove(classes[classIndex]);
      }
      classIndex = (classIndex + 1) % classes.length;
      main.classList.add(classes[classIndex]);
    }
    changeBackground();
    setInterval(changeBackground, 2000);
  });

  document
    .getElementsByClassName('copy-button')[0]
    .addEventListener('click', copyCode);

  function copyCode() {
    navigator.clipboard.writeText(
      "import React from 'react';  import {Text, View} from 'react-native';  import {Header} from './Header';  import {heading} from './Typography';    const WelcomeScreen = () => (    <View>      <Header title=\"Welcome to React Native\"/>      <Text style={heading}>Step One</Text>      <Text>        Edit App.js to change this screen and turn it        into your app.      </Text>      <Text style={heading}>See Your Changes</Text>      <Text>        Press Cmd + R inside the simulator to reload        your app’s code.      </Text>      <Text style={heading}>Debug</Text>      <Text>        Press Cmd + M or Shake your device to open the        React Native Debug Menu.      </Text>      <Text style={heading}>Learn</Text>      <Text>        Read the docs to discover what to do next:      </Text></View>);"
    );
    document.getElementsByClassName('copy-button')[0].innerText = 'Copied';
    setTimeout(() => {
      document.getElementsByClassName('copy-button')[0].innerText = 'Copy';
    }, 2000);
  }
})();
