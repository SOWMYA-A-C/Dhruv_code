import React from 'react';
 import LottieView from 'lottie-react-native';
  export default class LogoAnimation extends React.Component {
       render()
        { return
             ( <LottieView source={require('../assets/14987-logo-animation.json')} style={{width:"60%"}} autoPlay loop /> )
           } 
          }